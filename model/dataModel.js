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
        type:Object,
        required:true
      }
    }
  );
  
  module.exports = mongoose.model("data", sampleSchema);
