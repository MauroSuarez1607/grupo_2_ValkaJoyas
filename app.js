const express = require('express')
const app = express()
const PORT = 3010
const path = require('path')

app.use(express.static('public'))

app.get('/',(req,res) => res.sendFile(path.join(__dirname,'views','index.html')))
app.get('/login',(req,res) => res.sendFile(path.join(__dirname,'views','login.html')))
app.get('/productCart',(req,res) => res.sendFile(path.join(__dirname,'views','productCart.html')))
app.get('/productDetail',(req,res) => res.sendFile(path.join(__dirname,'views','productDetail.html')))
app.get('/register',(req,res) => res.sendFile(path.join(__dirname,'views','register.html')))
app.get('/header',(req,res) => res.sendFile(path.join(__dirname,'views', 'partials','header.html')))
app.get('/footer',(req,res) => res.sendFile(path.join(__dirname,'views', 'partials','footer.html')))

app.listen(PORT, () => console.log(`Server running in http://localhost:${PORT}`))