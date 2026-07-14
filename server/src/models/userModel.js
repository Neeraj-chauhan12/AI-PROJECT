const mongoose= require("mongoose");

const userSchema= new mongoose.Schema({
    username:{
        required:true,
        type:String,
    
    },
    email:{
        required:true,
        type:String,
        unique:true
    },
    password:{
        required:true,
        type:String
    },
    googleId: {
    type: String,
},

picture: {
    type: String,
},

provider: {
    type: String,
    default: "local",
},
})

module.exports= mongoose.model("User",userSchema);