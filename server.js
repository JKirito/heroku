const express = require('express');
const app = express()

app.use(express.static(__dirname+"/public"))
app.set('view engine','ejs');

app.listen(3000);
app.get('/',(req,res) => {
    res.render('index')
})

app.get('/api', (req,res) => {
    res.send("Success, Deployed to Heroku");
})