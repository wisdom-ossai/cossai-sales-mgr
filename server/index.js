const express = require('express');
const path = require('path');

const app = express();
const { PORT = 4220 } = process.env;


const frontend = path.join(__dirname, '../dist');

app.get('/', (req, res) => {
  res.sendFile(frontend, 'index.html');
});

app.listen(PORT, err => {
  if (err) throw err;
  console.log(`Server running on port: ${PORT}`)
})
