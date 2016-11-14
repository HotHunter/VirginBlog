/**
 * Created by Erum on 16/10/24.
 */
var router = require('express').Router();
var Article = require('../model/Article');
var bodyParser = require('body-parser');

// 列出所有文章
router.get('/', function (req, res, next) {
    Article.find(function (err, articles) {
        res.send(articles);
    });
});

// 获取指定id的文章
router.get('/:id', function (req, res, next) {
    Article.findById(req.params.id, function (err, article) {
        res.send(article);
    });
});

// 新增文章
router.post('/', bodyParser.json(), function (req, res, next) {
    var newArticle = new Article();
    newArticle.title = req.body.title;
    newArticle.content = req.body.content;
    var author = req.body.author;
    if (author){
        newArticle.author = author;
    }
    newArticle.save(function (err, article) {
        if (err){
            res.send('err');
        }else {
            res.send('ok' + article.title);
        }
    });
});
module.exports = router;