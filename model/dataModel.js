const mongoose = require("mongoose");

const sampleSchema = new mongoose.Schema(
    {
        id :{
            type: Number,
            required: true,
          },

      name :{
        type: String,
        required: true,
      },
      date: {
        type:String,
        required:true
      },
      time: {
        type:String,
        required:true
      }
    }
  );
  
  module.exports = mongoose.model("data", sampleSchema);