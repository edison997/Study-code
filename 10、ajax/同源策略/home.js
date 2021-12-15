const express = require('express')

const app = express();

app.get('/home',(req, res) => {
    res.sendFile(__dirname + '/同源策略.html')
})

app.get('/data',(req, res) => {
    res.send('data')
})

app.listen(8000, () => {
    console.log("啟動")
})