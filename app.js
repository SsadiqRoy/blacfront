const { promisify } = require('util');
const fs = require('fs');
const path = require('path');
const express = require('express');
const cookieparser = require('cookie-parser');

const app = express();

app.use(express.json());
app.use(cookieparser());
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');
app.set('views', 'views');

const clientRoutes = require('./routes/clientRoutes');
const dashboard = require('./routes/adminRoutes');
const { loggedIn } = require('./middlewares/globalMiddlewares');
const { updater } = require('./utils/utils');

app.use(loggedIn);
app.use('/', clientRoutes);
app.use('/dashboard', dashboard);

app.use('*', (req, res, next) => {
  res.status(404).json({
    status: 'failed',
    message: `could not get ${req.get('host')}${req.originalUrl}`,
  });
});

app.use((error, req, res, next) => {
  if (req.originalUrl.startsWith('/dashboard')) {
    console.log(error);
    // error.message = 'You are not permitted to this page';
    return res.status(200).render('admin/error', { error });
  }

  console.log(error);

  error.date = new Date().toISOString();
  error.type = 'Global Error';

  fs.appendFile('./errors/error.log', JSON.stringify(errors), (e) => {
    if (e) console.log(e);
  });

  res.status(500).json({
    status: 'failed',
    message: error.message,
    error,
  });
});

module.exports = app;
