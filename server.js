const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const events = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('calendar', { events });
});

app.post('/', (req, res) => {
  const { title, date } = req.body;
  events.push({ title, date });
  res.redirect('/');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
