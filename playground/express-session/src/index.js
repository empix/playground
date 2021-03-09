require('dotenv').config();

const path = require('path');

const express = require('express');
const session = require('express-session');

const app = express();

app.use(
  session({
    secret: '1fb5fe07fb2561adf158652f146d9ba7',
    resave: false,
    saveUninitialized: true,
  })
);
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/static', express.static(path.join(__dirname, 'public')));

const dbEmail = 'email@email.com';
const dbPassword = '1234';

app.get('/', (req, res) => {
  if (!req.session.email) return res.redirect('/login');

  return res.render('index', { email: req.session.email });
});

app.get('/login', (req, res) => {
  if (req.session.email) return res.redirect('/');
  return res.render('login');
});

app.post('/login', (req, res) => {
  if (req.session.email) return res.redirect('/');

  const { email, password } = req.body;

  if (email === dbEmail && password === dbPassword) {
    req.session.email = email;
    return res.redirect('/');
  }

  res.render('login', { error: 'Invalid credentials!' });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port: ${process.env.PORT}`);
});
