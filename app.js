var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var ueditor = require("ueditor")

// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
//var bodyParser = require('body-parser');

var app = express();
//app.use(bodyParser.json());

var apiModule = require('./api/index').init(app);

// view engine setup
app.set('views', path.join(__dirname, 'app/views'));

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'app')));

//// /ueditor 入口地址配置 https://github.com/netpi/ueditor/blob/master/example/public/ueditor/ueditor.config.js
//// 官方例子是这样的 serverUrl: URL + "php/controller.php"
//// 我们要把它改成 serverUrl: URL + 'ue'
//app.use("/ueditor/ue", ueditor(path.join(__dirname, 'public'), function(req, res, next) {
//
//    // ueditor 客户发起上传图片请求
//
//    if(req.query.action === 'uploadimage'){
//
//        // 这里你可以获得上传图片的信息
//        var foo = req.ueditor;
//        console.log(foo.filename); // exp.png
//        console.log(foo.encoding); // 7bit
//        console.log(foo.mimetype); // image/png
//
//        // 下面填写你要把图片保存到的路径 （ 以 path.join(__dirname, 'public') 作为根路径）
//        var img_url = 'yourpath';
//        res.ue_up(img_url); //你只要输入要保存的地址 。保存操作交给ueditor来做
//    }
//    //  客户端发起图片列表请求
//    else if (req.query.action === 'listimage'){
//        var dir_url = 'your img_dir'; // 要展示给客户端的文件夹路径
//        res.ue_list(dir_url) // 客户端会列出 dir_url 目录下的所有图片
//    }
//    // 客户端发起其它请求
//    else {
//
//        res.setHeader('Content-Type', 'application/json');
//        // 这里填写 ueditor.config.json 这个文件的路径
//        res.redirect('/ueditor/ueditor.config.json')
//    }}));

module.exports = app;
