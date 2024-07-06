const express=require('express')
const app=express()
app.get('/', function(req,res){
    res.send("honey product data")
})
app.get('/clothes',function(req,res){
    res.send("clothes product data")     
})
app.listen(8085)