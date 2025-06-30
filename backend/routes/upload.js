// routes/upload.js
const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const Therapist = require('../models/Therapist');

// Upload and update profile image for therapist
router.post('/therapists/:id/upload', upload.single('file'), async (req, res) => {
  try {
    const therapistId = req.params.id;
    const imagePath = req.file.path;

    const therapist = await Therapist.findByIdAndUpdate(
      therapistId,
      { profileImage: imagePath },
      { new: true }
    );

    res.json({ message: 'Profile image uploaded', therapist });
  } catch (err) {
    res.status(500).json({ error: 'Upload failed' });
  }
});

module.exports = router;
