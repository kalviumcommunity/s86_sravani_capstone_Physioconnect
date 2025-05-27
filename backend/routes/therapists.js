const express = require('express');
const bcrypt = require('bcrypt');
const Therapist = require('../models/Therapist');

const router = express.Router();


router.post('/signup', async (req, res) => {
  try {
    const { name, email, password, specialization, state, city, availableTimeSlots } = req.body;

    const existing = await Therapist.findOne({ email });
    if (existing) return res.status(400).json({ error: 'Therapist already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newTherapist = new Therapist({
      name,
      email,
      password: hashedPassword,
      specialization,
      location: { state, city },
      availableTimeSlots
    });

    await newTherapist.save();
    res.status(201).json({ message: 'Therapist registered successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error registering therapist' });
  }
});


router.get('/', async (req, res) => {
  try {
    const therapists = await Therapist.find();
    res.json(therapists);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching therapists' });
  }
});


router.get('/state/:state', async (req, res) => {
  try {
    const therapists = await Therapist.find({ 'location.state': req.params.state });
    res.json(therapists);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching therapists by state' });
  }
});

module.exports = router;
