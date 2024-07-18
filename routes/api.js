const express = require("express");
const router = express.Router();
const usercontroller = require("../controller/usercontroller");
const transactioncontoller = require("../controller/transactioncontroller");
const auth = require("../middelware/auth");

// User information
router.post("/addregister", usercontroller.addregister);
router.post("/login", usercontroller.login);
router.get("/getallregister", auth, usercontroller.getallregister);

// Transaction information
router.post("/createTransaction", transactioncontoller.createTransaction);
router.get("/getTransaction", auth, transactioncontoller.getTransaction);
router.put("/updatetransaction/:id", transactioncontoller.updatetransaction);
router.delete("/deletetransaction/:id", transactioncontoller.deletetransaction);
router.get("/transactions/report", transactioncontoller.report);

module.exports = router;
