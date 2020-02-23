const express = require('express');
const dotenv = require('dotenv');
// const morgan = require('morgan');
// const colors = require('colors');
// const errorHandler = require('./middleware/error')
// const connectDB = require('./config/db')

// Load env vars
dotenv.config({
  path: './config/config.env'
});


const app = express();

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);