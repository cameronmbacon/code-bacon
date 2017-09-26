const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/epic', (req, res) => {
  res.send({
    epic: 'BACON STRIPS N BACON STRIPS N BACON STRIPS!'
  });
});

const server = app.listen(process.env.PORT || 5000, () => {
  console.log(`Server up on port ${server.address().port}`);
});

server.isRunning = true;

module.exports = server;
