const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'))
app.set('view engine','hbs');

app.get('/',(req,res)=>{
    res.render("index"); 
})
app.get('/initiatives',(req,res)=>{
    res.render("initiatives"); 
})
app.get('/abt',(req,res)=>{
    res.render("abt"); 
})
app.get('/achievments',(req,res)=>{
    res.render("achievments"); 
})
app.get('/resources',(req,res)=>{
    res.render("resources"); 
})


app.listen(port,()=>{
    console.log(`listening to the port ${port}`) 
})  