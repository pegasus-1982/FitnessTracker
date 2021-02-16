const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  day: {
    type: String,
    
  },
  /* excercises: {
    type: Schema.Types.ObjectId,,
    ref: "Excercise"
  }, */
  date: {
    type: Date,
    default: Date.now
  }
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
