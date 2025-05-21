const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();


app.use(cors());
app.use(express.json());

app.use('/api/users', require('./routes/user'));
app.use('/api/therapists', require('./routes/therapists'));
app.use('/api/appointments', require('./routes/appointments'));


app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
