// app.js
const express = require('express');
const moment = require('moment-timezone');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine','hbs')

app.set("views","views")

// app.use((req, res, next) => {
// //   console.log(`Received request at ${new Date().toISOString()}`);
//   next();
// });

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/getTime', (req, res) => {
  const location = req.body.location;

  // Determine the time zone for the entered location
  const timezone = moment.tz.guess(location);

  if (!timezone) {
    return res.render('index', { error: 'Unable to determine the time zone for the entered location' });
  }

  // Get the current time for the determined time zone
  const currentTime = moment().tz(timezone).format('YYYY-MM-DD HH:mm:ss');

  res.render('index', { location, timezone, time: currentTime });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
