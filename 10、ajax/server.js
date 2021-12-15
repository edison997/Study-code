//1.引入express

const express = require('express');
//2.创建应用对象
const app = express();

//3.创建路由规则
// request 是对请求报文的封装
// response是对响应报文的封装

//server就是相当于跳转页面后面跟的参数
app.get('/server', (req, res) => {
    // 设置响应头(设置允许跨域)
    res.setHeader('Access-Control-Allow-Origin', '*')
    // 设置响应
    res.send("Hello world")
});

app.post('/server', (req, res) => {
    // 设置响应头(设置允许跨域)
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    // res.setHeader('X-Powered-By', '3.2.1')


    
    // 设置响应（这里只能就收字符串）
    res.send("hello post")
});


//可以接收任何形式的请求
app.all('/json-server', (req, res) => {
    // 设置响应头(设置允许跨域)
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length,Authorization,Accept,X-Requested-With');
    // res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    // res.header('X-Powered-By', '3.2.1')


    const data = {
        name: "handsome"
    }

    let str = JSON.stringify(data)
    // 设置响应（这里只能就收字符串）
    res.send(str)
});



app.get('/ie', (req, res) => {
    // 设置响应头(设置允许跨域)
    res.setHeader('Access-Control-Allow-Origin', '*')
    // 设置响应
    res.send("Hello ie 2 ")
});


// 延时测试
app.get('/delay', (req, res) => {
    // 设置响应头(设置允许跨域)
    res.setHeader('Access-Control-Allow-Origin', '*')
    // 设置响应
    setTimeout(()=> {
        res.send("延时测试")
    },3000)
    
});


//axios

app.all('/axios-server', (req, res) => {
    // 设置响应头(设置允许跨域)
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length,Authorization,Accept,X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    res.header('X-Powered-By', '3.2.1')


    const data = {
        name: "handsome"
    }

    let str = JSON.stringify(data)
    // 设置响应（这里只能就收字符串）
    res.send(str)
});


//fetch
app.all('/fetch-server', (req, res) => {
    // 设置响应头(设置允许跨域)
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
      res.header("X-Powered-By", ' 3.2.1')
      //这段仅仅为了方便返回json而已
      res.header("Content-Type", "application/json;charset=utf-8");


    const data = {
        name: "handsome"
    }

    let str = JSON.stringify(data)
    // 设置响应（这里只能就收字符串）
    res.send(str)
});


// 4.监听端口启动服务
app.listen(8080, () => {
    console.log("启动超级变换形态")
})