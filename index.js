const express = require('express');

const app = express();

app.use('/', (req, res) => {
  console.log('this is main url');
});

app.listen('5000', () => {
  console.log('backend is running');
});
