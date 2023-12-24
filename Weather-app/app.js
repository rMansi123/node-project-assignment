const express = require('express');
const hbs = require('hbs');
const app = express();
const PORT = 3001;


// Set up HBS as the view engine
// app.set('view engine', 'hbs');
// hbs.registerPartials(__dirname + '/views/partials');

// // Set up static directory
// app.use(express.static(__dirname + '/public'));

app.set('view engine','hbs')

app.set("views","views")

// Set up routes
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
