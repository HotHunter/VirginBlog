/**
 * Created by Erum on 16/10/24.
 */
var router = require('express').Router();
var Article = require('../model/Article');
var bodyParser = require('body-parser');

/*
 查 Retrieve
 */
//获取文章总数
router.get('/count', function (req, res, next) {
    Article.count({}, function (err, count) {
        if (err) {
            return next(err);
        }
        res.json({'count': count});
    })
});
// 列出文章
router.get('/', function (req, res, next) {
    var start = Number(req.query.start) || 0;
    var quantity = Number(req.query.quantity) || 20;

    Article.find({}, null, {skip: start, limit: quantity}, function (err, articles) {
        if (err) {
            return next(err);
        }
        res.json(articles);
    });
});

// 获取指定id的文章
router.get('/:id', function (req, res, next) {
    Article.findById(req.params.id, function (err, article) {
        if (err) {
            return next(err);
        }
        res.json(article);
    });
});

/*
 增 Create
 */
// 新增文章
router.post('/', bodyParser.json(), function (req, res, next) {
    var newArticle = new Article();
    newArticle.title = req.body.title;
    newArticle.content = req.body.content;
    var author = req.body.author;
    if (author) {
        newArticle.author = author;
    }
    newArticle.save(function (err, article) {
        if (err) {
            return next(err)
        } else {
            res.send('ok' + article.title);
        }
    });
});

/*
 改 Update
 */
// 修改文章
router.put('/:id', bodyParser.json(), function (req, res, next) {
    var keysToSet = {};
    if (req.body.title){
        keysToSet.title = req.body.title;
    }
    if (req.body.content){
        keysToSet.content = req.body.content;
    }
    if (req.body.author){
        keysToSet.author = req.body.author;
    }
    Article.update(
        {_id: req.params.id}, {$set: keysToSet},
        function (err, raw) {
            if (err) {
                return next(err);
            }
            res.json(raw);
        }
    );
});

/*
 删 Delete
 */
router.delete('/:id', function (req, res, next) {
    Article.findByIdAndRemove(req.params.id, function (err, removedArticle) {
        if (err){
            return next(err);
        }
        res.json(removedArticle);
    });
});

/*
 错误处理
 */
router.use(function (err, req, res, next) {
    res.status(403).send(err);
});

module.exports = router;