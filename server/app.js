const express = require('express');
const path = require('path')
const app = express();

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname,"../")
app.use(express.static(static_path)) 
app.set("view engine","hbs")

app.get('/',(req,res)=>{``
    res.render('index');
})

app.listen(port,()=>{
    console.log(`listening to the port${port}`)
})
console.log(static_path)