const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

//middleware required:

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Set the folder where your EJS files live
app.set('views', path.join(__dirname, 'views/pages'));

//routes:
app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/events', (req, res) => {
  res.render('events');
});

app.get('/donate', (req, res) => {
  res.render('donate');
});

// Home page
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});