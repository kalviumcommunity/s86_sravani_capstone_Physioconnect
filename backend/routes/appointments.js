const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

// GET appointments by patient ID
router.get('/user/:userId', async (req, res) => {
  try {
    const appointments = await Appointment.find({ patientId: req.params.userId });
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ error: "Error fetching appointments" });
  }
});

module.exports = router;
