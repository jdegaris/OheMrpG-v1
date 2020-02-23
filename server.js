const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
// const colors = require('colors');
// const errorHandler = require('./middleware/error')
// const connectDB = require('./config/db')

// Route files
const books = require('./routes/books')

// Load env vars
dotenv.config({
  path: './config/config.env'
});

const app = express();

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// Mount routers
app.use('/api/v1/books', books)


const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);