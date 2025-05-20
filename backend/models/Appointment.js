const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  patientId: String,
  therapistId: String,
  date: String,
  time: String,
  status: { type: String, default: 'booked' },
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
