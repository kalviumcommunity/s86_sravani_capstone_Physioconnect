const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  therapistId: { type: mongoose.Schema.Types.ObjectId, ref: 'Therapist', required: true },
  date: { type: String, required: true }, 
  time: { type: String, required: true },
  status: { type: String, default: 'booked' } 
});

module.exports = mongoose.model('Appointment', appointmentSchema);
