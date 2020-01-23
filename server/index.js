const app = require('./config/app');
const config = require('./config/environment');

app.listen(config.port, err => {
  if (err) throw err;
  console.log(`Server running on port: ${config.port}`)
})
