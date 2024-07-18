const mongoose = require("mongoose");

const TransactionSchema = mongoose.Schema({
  amount: { type: Number, required: false },
  type: {
    type: String,
    enum: ["Income", "Expence"],
    required: true,
  },
  category: { type: String, required: false },
  date: { type: Date, required: true },
});

module.exports = mongoose.model("Transaction", TransactionSchema);

// "2024-06-27T14:00:00Z"
