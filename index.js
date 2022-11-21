const express = require('express');

const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
dotenv.config();

app.use(express.json());

mongoose
  .connect(
    process.env.MONGO_URL,
    'mongodb+srv://goabhishek:<password>@cluster0.oizf2sf.mongodb.net/?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(console.log('Connected to mongodb'))
  .catch((err) => console.log(err));

app.use('/api/auth', authRoute);

app.listen('5000', () => {
  console.log('backend is running');
});
