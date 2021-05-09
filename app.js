var express=require('express')
var bodyParser=require('body-parser')
var mongoose=require('mongoose')
var{studentModel}=require('./models/studentModel')

mongoose.connect("mongodb+srv://amru78:@amru@cluster0.1mnsm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{useNewUrlParser:true})

var app=express()

app.use(bodyParser.urlencoded({ extended: false }))
 

app.use(bodyParser.json())

app.get('/view',async(req,res)=>{
    try{
        var result=await studentModel.find()
        res.json(result)
    }
    catch(error)
    {
        res.send(error)
    }
})

app.post('/details',(req,res)=>{

    var studentObject=new studentModel(req.body)
    studentObject.save()
    res.json(studentObject)
})

app.get('/name',(req,res)=>{

    res.send("Student Details")
})



app.listen(3000)