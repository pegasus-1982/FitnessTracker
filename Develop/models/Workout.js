const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workOutSchema = new Schema({
  day: {
    type: Date,
    
  },

  excercises: [
    {
      type: Schema.Types.ObjectId,
      ref: "Excercise"
    }
  ]
  
});

const Workout = mongoose.model("Workout", workOutSchema);

module.exports = Workout;
