const express = require('express');

const db = require('../models');

const router = express.Router();

router.get('/', async (req, res, next) => {
    const posts = await db.Post.findAll({
        include: [{
            model: db.User,
            attributes: ['id', 'nickname']
        }, {
            model: db.Image
        }, {
            model: db.User,
            as: 'Likers',
            attributes: ['id'],
        }, {
            model: db.Post,
            as: 'Retweet',
            include: [{
                model: db.User,
                attributes: ['id', 'nickname']
            }]
        }],
        order: [['createdAt', 'DESC']],
        offset: parseInt(req.query.offset, 10) || 0,
        limit: parseInt(req.query.limit, 10) || 10
    });
    res.json(posts);
})

module.exports = router;