const mongoose = require('mongoose');

const therapistSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  specialization: String,
  location: {
    state: String,
    city: String
  },
  availableTimeSlots: [String],
  role: { type: String, default: 'therapist' }
});

module.exports = mongoose.model('Therapist', therapistSchema);
