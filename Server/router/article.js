/**
 * Created by Erum on 16/10/24.
 */
var router = require('express').Router();
var Article = require('../model/Article');
var bodyParser = require('body-parser');

/*
    查 Select
 */
// 列出所有文章
router.get('/', function (req, res) {
    Article.find(function (err, articles) {
        res.json(articles);
    });
});

// 获取指定id的文章
router.get('/:id', function (req, res) {
    Article.findById(req.params.id, function (err, article) {
        res.json(article);
    });
});

/*
    增 Create
 */
// 新增文章
router.post('/', bodyParser.json(), function (req, res) {
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

/*
    改 Update
 */
// 修改文章
router.put('/:id', bodyParser.json(), function (req, res) {
    Article.update(
        {_id:req.params.id}, {$set:{title:req.body.title, content:req.body.content, author:req.body.author}},
        function (err, raw) {
            if (err){
                res.send('err');
            }
            res.json(raw);
        }
    );
});
module.exports = router;