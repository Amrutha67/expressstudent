var mongoose=require('mongoose')



var studentSchema=new mongoose.Schema(
    {
        name:{type:String,required:true},
        class:{type:Number,required:true},
        dob:{type:String,required:true},
        school:{type:String,required:true},
        Address:{type:String,required:true}
    }
)
var studentModel =mongoose.model('students',studentSchema)
module.exports={studentModel}