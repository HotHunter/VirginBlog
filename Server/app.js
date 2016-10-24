/**
 * Created by Erum on 16/10/24.
 */
var express = require('express');
var articleRouter = require('./router/article');

// 设置监听端口
var port = process.env.PORT || 1900;

// 启动服务器
var server = express();
server.listen(port);

server.use('/article', articleRouter);