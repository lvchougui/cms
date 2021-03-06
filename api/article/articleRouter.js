var router = require("express").Router();
var articleDao = require('./articleModel');
var cateDao = require('../cate/cateModel');

function getAllList(req, res){
    articleDao.getAll(function(err, data){
        if (!!err) {
            console.log(err);
            return res.json(500, err);
        }
        return res.json(200, data);
    })
}
function getArticleList(req, res){
    articleDao.getArticleList(req.params.articleId,function(err, data){
        if (!!err) {
            console.log(err);
            return res.json(500, err);
        }
        return res.json(200, data);
    })
}

function addArticle(req, res){
    articleDao.addArticle(req.body, function(err, data){
        if (!!err) {
            console.log(err);
            return res.json(500, err);
        }
        return res.json(200, data);
    })
}

function delArticle(req,res){
    articleDao.delArticle(req.params.articleId,function(err, data){
        if (!!err) {
            console.log(err);
            return res.json(500,  err);
        }
        return res.json(200,{results:data});
    })
}

function updateArticle(req,res){
    articleDao.updateArticle(req.body,function(err, data){
        if (!!err) {
            console.log(err);
            return res.json(500,  err);
        }
        return res.json(200,{results:data});
    })
}

function getArticleDetail(req,res){
    articleDao.getDetail(req.params.articleId,function(err, data){
        if (!!err) {
            console.log(err);
            return res.json(500, err);
        }
        return res.json(200, data);
    })
}

router.get("/getArticleList/:articleId",getArticleList);
router.get("/all",getAllList);
router.get("/getArticleDetail/:articleId",getArticleDetail);
router.post("/addArticle",addArticle);
router.post("/updateArticle",updateArticle);
router.put("/delArticle/:articleId",delArticle);

module.exports = router;