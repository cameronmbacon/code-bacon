const express = require('express');
const mongoose = require('mongoose');

const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

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
