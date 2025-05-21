const mongoose = require('mongoose');

const therapistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  specialization: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  availableSlots: [{ type: String }] 
});

module.exports = mongoose.model('Therapist', therapistSchema);
