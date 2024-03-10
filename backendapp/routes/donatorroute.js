const express = require("express");
const donatorController = require('../controllers/donatorcontroller');
const donatorRouter = express.Router();

donatorRouter.post("/insertdonor", donatorController.insertDonor);
donatorRouter.post("/checkdonorlogin", donatorController.checkdonatorlogin);

module.exports = donatorRouter;
