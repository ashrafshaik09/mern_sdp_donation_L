const Donator = require('../models/Donator');

const insertDonor = async (req, res) => {
  try {
    const inputData = req.body;
    const donator = new Donator(inputData);
    await donator.save();
    res.status(201).send("Donator Registered Successfully");
  } catch (error) {
    console.error('Error registering donor:', error);
    res.status(500).send(error.message);
  }
};

const checkdonatorlogin = async (req, res) => {
  try {
    const input = req.body;
    const donator = await Donator.findOne(input);
    if (donator) {
      res.json(donator);
    } else {
      res.status(404).json({ message: "Login Failed" });
    }
  } catch (err) {
    console.error('Error checking donor login:', err);
    res.status(500).send(err.message);
  }
};

module.exports = { insertDonor, checkdonatorlogin };