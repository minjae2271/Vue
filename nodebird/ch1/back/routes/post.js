const express = require('express');
const multer = require('multer');
const path = require('path');

const db = require('../models');
const image = require('../models/image');
const { isLoggedIn } = require('./middlewares');

const router = express.Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      const basename = path.basename(file.originalname, ext); // 제로초.png, basename = 제로초, ext = .png
      done(null, basename + Date.now() + ext);
    },
  }),
  limit: { fileSize: 20 * 1024 * 1024 },
});
router.post('/images', isLoggedIn, upload.array('image'), (req, res) => {
  console.log(req.files);
  res.json(req.files.map(v => v.filename));
});

router.delete('/:id', isLoggedIn, async (req, res, next) => {
    try {
        await db.Post.destroy({
            where: { id: req.params.id}
        });
        res.send('게시물이 삭제 되었습니다.')
    }
    catch(err) {
        console.error(err);
        next(err);
    }
})

router.post('/', isLoggedIn, async (req, res, next) => { // POST /post
  try {
    const hashtags = req.body.content.match(/#[^\s#]+/g);
    const newPost = await db.Post.create({
      content: req.body.content,
      UserId: req.user.id,
    });
    if (hashtags) {
      const result = await Promise.all(hashtags.map(tag => db.Hashtag.findOrCreate({
        where: { name: tag.slice(1).toLowerCase() },
      })));
      await newPost.addHashtags(result.map(r => r[0]));
    }

    if(req.body.image){
        if(Array.isArray(req.body.image)){
            await Promise.all(req.body.image.map((image) => {
                return db.Image.create({
                    src: image,
                    postId: newPost.id
                })
            }));
        }
        else {
             await db.Image.create({
                 src: image,
                 postId: newPost.id
             })
        }
    }

    const fullPost = await db.Post.findOne({
      where: { id: newPost.id },
      include: [{
        model: db.User,
        attributes: ['id', 'nickname'],
      }, {
        model: db.User,
        as: 'Likers',
        attributes: ['id',]
      }, {
          model: db.Image,
      }],
    });
    return res.json(fullPost);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.post('/:id/comments', async (req, res, next) => {
    try {
        const post = await db.Post.findOne({
            where: { id: req.params.id }
        });

        if(!post){
            return res.status(404).send('해당 포스트가 존재하지 않습니다.')
        }

        const comments = await db.Comment.findAll({
            where: {
                PostId: req.params.id
            },
            include: [{
                model: db.User,
                attributes: ['id', 'nickname']
            }],
            order: [['createdAt','ASC']]
        });
        return res.json(comments);
    }
    catch(err) {
        console.error(err);
        next(err);
    }
})

router.post('/:id/comment', isLoggedIn, async (req, res, next) => { //POST /post/:id/comment -> 동적라우팅과 유사
    try {
        //서버쪽은 안전해야한다. 
        const post = await db.Post.findOne({ 
            where: { id: req.params.id } 
        });

        if(!post){
            return res.status(404).send('해당 포스트가 존재하지 않습니다.');
        }

        const newComment = await db.Comment.create({
            PostId: post.id,
            UserId: req.user.id,
            content: req.body.content,
        });
        //바로 위에 PostId를 연결 해줘서 필요 없는 작업이 되었습니다.
        //await post.addComment(newComment.id);

        const comment = await db.Comment.findOne({
            where: { id: newComment.id},
            include: [{
                model: db.User,
                attributes: ['id', 'nickname'],
            }],
        });
        return res.json(comment);
    }
    catch(err) {
        console.error(err);
        next(err);
    }
})

router.post('/:id/retweet', isLoggedIn , async (req, res, next) => {
    try{
        const post = await db.Post.findOne({
            where: { id: req.params.id },
            include: [{
                model: db.Post,
                as: 'Retweet',
            }],
        });
        if(!post){
            return res.status(404).send('게시글이 존재하지 않습니다.')
        }
        if(req.user.id === post.UserId || (post.Retweet && post.Retweet.UserId === req.user.id)){
            return res.status(403).send('자신의 글은 리트윗 할 수 없습니다.')
        }
        const retweetTargetId = post.RetweetId || post.id;
        const exPost = await db.Post.findOne({
            where: {
                UserId: req.user.id,
                RetweetId: retweetTargetId,
            }
        });
        if(exPost){
            return res.status(403).send('이미 리트윗한 글입니다.')
        }
        const retweet = await db.Post.create({
            UserId: req.user.id,
            RetweetId: retweetTargetId,
            content: 'retweet',
        });
        const retweetWithPrevPost = await db.Post.findOne({
            where: {
                id: retweet.id,
                include: [{
                    model: db.User,
                    attributes: ['id', 'nickname']
                }, {
                    model: db.User,
                    as: 'Likers',
                    attributes: ['id',]
                }, {
                    model: db.Post,
                    as: 'Retweet',
                    include: [{
                        model: db.User,
                        attributes: ['id', 'nickname'],
                    }, {
                        model: db.Image,

                    }]
                }]
            }
        });
        res.json(retweetWithPrevPost);
    }
    catch(err){
        console.error(err);
        next(err);
    }
});

router.post('/:id/like', isLoggedIn, async (req, res, next) => {
    try{
        const post = await db.Post.findOne({
            where: {
                id: req.params.id
            }
        });
        if(!post){
            return res.status(404).send('게시글이 존재하지 않습니다.');
        }
        await post.addLiker(req.user.id);
        res.json({UserId: req.user.id});
    }
    catch(err){
        console.error(err);
        next(err);
    }
});

router.delete('/:id/like', isLoggedIn, async (req, res, next) => {
    try{
        const post = await db.Post.findOne({
            where: {
                id: req.params.id
            }
        });
        if(!post){
            return res.status(404).send('게시글이 존재하지 않습니다.');
        }
        await post.removeLiker(req.user.id);
        res.json({UserId: req.user.id});
    }
    catch(err){
        console.error(err);
        next(err);
    }  
});

module.exports = router;