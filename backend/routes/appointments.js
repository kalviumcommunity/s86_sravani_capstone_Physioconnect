const express = require('express');
const Appointment = require('../models/Appointment');

const router = express.Router();

router.post('/book', async (req, res) => {
  try {
    const { patientId, therapistId, date, time } = req.body;

    if (!patientId || !therapistId || !date || !time) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newAppointment = new Appointment({
      patientId,
      therapistId,
      date,
      time,
      status: 'booked',
    });

    await newAppointment.save();
    res.status(201).json({ message: 'Appointment booked successfully', appointment: newAppointment });
  } catch (err) {
    res.status(500).json({ error: 'Error booking appointment' });
  }
});


router.get('/user/:userId', async (req, res) => {
  try {
    const appointments = await Appointment.find({ patientId: req.params.userId });
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching appointments' });
  }
});

router.get('/user/:userId/all', async (req, res) => {
  try {
    const appointments = await Appointment.find({ patientId: req.params.userId });
    res.json(appointments); 
  } catch (err) {
    res.status(500).json({ error: 'Error fetching appointments' });
  }
});



router.put('/:appointmentId/cancel', async (req, res) => {
  try {
    const { appointmentId } = req.params;

    const updatedAppointment = await Appointment.findByIdAndUpdate(
      appointmentId,
      { status: 'cancelled' },
      { new: true }
    );

    if (!updatedAppointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }

    res.status(200).json({
      message: 'Appointment cancelled successfully',
      appointment: updatedAppointment,
    });
  } catch (err) {
    res.status(500).json({ error: 'Error cancelling appointment' });
  }
});

module.exports = router;
