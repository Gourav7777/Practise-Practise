const mongoose = require("mongoose")

const prodSchema = mongoose.Schema(
    {
      name:{type:String,required:true},
      price:{type:Number,required:true}
    },

    {
        timestamps:true
    }

)

const Prod =  mongoose.model("Prod",prodSchema)

module.exports = Prod