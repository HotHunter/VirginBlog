/**
 * Created by Erum on 16/10/24.
 */
var router = require('express').Router();
var Article = require('../model/Article');
var bodyParser = require('body-parser');

router.get('/', function (req, res, next) {
    var articles = Article.find();
    res.send(articles.count);
});

router.post('/', bodyParser.json(), function (req, res, next) {
    var newArticle = new Article();
    newArticle.title = req.body.title;
    newArticle.content = req.body.content;
    newArticle.author = req.body.author;
    newArticle.save(function (err, article) {
        if (err){
            res.send('err');
        }else {
            res.send('ok');
        }
    });
});
module.exports = router;