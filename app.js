const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const userRoutes = require('./routes/userRoutes');

const PORT = 3000;
const MONGODB_URI = 'mongodb://localhost/UserManagementAPI';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to database
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to database'))
  .catch((err) => console.log(err));


app.use('/', userRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
