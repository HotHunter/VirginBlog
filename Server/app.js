/**
 * Created by Erum on 16/10/24.
 */
var express = require('express');
var mongoose = require('mongoose');
var articleRouter = require('./router/article');

/*
    数据库 MongoDB
 */
mongoose.connect('mongodb://localhost/virgin_blog');

/*
    服务器
 */
// 设置监听端口
var port = process.env.PORT || 1994;
// 启动服务器
var server = express();
server.listen(port);

/*
    路由
 */
// server.use('/api', auth);
server.use('/api/articles', articleRouter);