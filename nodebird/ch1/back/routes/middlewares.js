exports.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    return res.status(401).send('로그인이 필요합니다.');
  };
  
  exports.isNotLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
      return next();
    }
    return res.status(401).send('로그인한 사람은 할 수 없습니다..');
  };


//export 차이점
//exports.blah => 사소한, 비슷한 속성 여러개
//module.exports => 굵직한 것들
//module.exports = {
//    isLoggedIn: (req,res,next) => {}
//    isNotLoggedIn: (req,res,next) => {}
//}