const express = require('express');
const router = express.Router();
const Therapist = require('../models/Therapist');

// GET all therapists
router.get('/', async (req, res) => {
  try {
    const therapists = await Therapist.find();
    res.json(therapists);
  } catch (err) {
    res.status(500).json({ error: "Error fetching therapists" });
  }
});

// GET therapists by state
router.get('/state/:state', async (req, res) => {
  try {
    const therapists = await Therapist.find({ state: req.params.state });
    res.json(therapists);
  } catch (err) {
    res.status(500).json({ error: "Error fetching therapists by state" });
  }
});

module.exports = router;
