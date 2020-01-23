const express = require('express');
const path = require('path');

const app = express();
const { PORT = 4220 } = process.env;


const frontend = path.join(__dirname, '../dist/cossai-sales-mgr');

app.use(express.static(frontend));

app.get('*', (req, res) => {
  res.sendFile(path.join(frontend, 'index.html'));
});

app.listen(PORT, err => {
  if (err) throw err;
  console.log(`Server running on port: ${PORT}`)
})
