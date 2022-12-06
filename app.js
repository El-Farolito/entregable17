const express = require ("express");
app = express();
const path = require("path")

app.use(express.static(path.join(__dirname, "public")))


app.listen(3000, function(){
console.log('prendio')
})


app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "./views/home.html"))
})

