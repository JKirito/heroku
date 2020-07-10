const express = require('express');
const app = express()
const dotenv = require("dotenv")
dotenv.config()

app.use(express.static(__dirname+"/public"))
app.set('view engine','ejs');

app.listen(process.env.PORT || 8080);
app.get('/',(req,res) => {
    res.render('index')
})

app.get('/api', (req,res) => {
    res.send("Success, Deployed to Heroku");
})