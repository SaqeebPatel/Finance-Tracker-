const mongoose = require("mongoose");
const Transaction = require("../model/transction");
const express = require("express");

// createTransaction
async function createTransaction(req, res) {
  console.log(req.body);
  try {
    const newTransaction = new Transaction(req.body);
    const result = await newTransaction.save();
    res.status(201).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
}

// Get all transaction
async function getTransaction(req, res) {
  try {
    const result = await Transaction.find();
    res.status(201).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
}

//  update transaction
async function updatetransaction(req, res) {
  console.log(req.body);
  try {
    const transactionId = req.params.id;
    const updatedTransaction = await Transaction.findByIdAndUpdate(
      transactionId,
      req.body
    );
    if (!updatedTransaction) {
      return res.status(404).send("Transaction not found");
    }
    return res.send(updatedTransaction);
  } catch (err) {
    console.log(err);
    if (!res.headersSent) {
      return res.status(500).json({ message: err.message });
    }
  }
}

//  delete transaction
async function deletetransaction(req, res) {
  console.log(req.body);
  try {
    const transaction = await Transaction.findByIdAndDelete(req.params.id);
    if (!transaction) {
      return res.status(404).send({ message: "transction not found" });
    }
    res
      .status(201)
      .send({ message: "Transaction deleted sucessfully", transaction });
  } catch (error) {
    return res.status(500).send(message.error);
  }
}

// Get all report between the range of date
async function report(req, res) {
  console.log(req.body);
  try {
    const { startDate, endDate } = req.query;
    if (!startDate || !endDate) {
      return res
        .status(400)
        .send({ error: "Startdate and Enddate is requires" });
    }
    const start = new Date(startDate);
    const end = new Date(endDate);
    const transactions = await Transaction.find({
      date: { $gte: start, $lte: end },
    });
    const report = transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === "income") {
          acc.totalIncome += transaction.amount;
        } else if (transaction.type == "Expence") {
          acc.totalExpence += transaction.amount;
        }
        return acc;
      },
      { totalIncome: 0, totalExpenses: 0 }
    );
    res.json(report);
  } catch (err) {
    res
      .status(400)
      .send({ error: "An error occurred while generating the report" });
  }
}

module.exports = {
  createTransaction,
  getTransaction,
  updatetransaction,
  deletetransaction,
  report,
};
