const mongoose = require('mongoose');

const TherapistSchema = new mongoose.Schema({
  name: String,
  email: String,
  specialization: String,
  state: String,
  city: String,
  availableTimeSlots: [String],
});

module.exports = mongoose.model('Therapist', TherapistSchema);
