// const { promisify } = require('util');
// const fs = require('fs');
const path = require('path');
const express = require('express');
const cookieparser = require('cookie-parser');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cookieparser());
// app.use(cors({ origin: [], credentials: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');
app.set('views', 'views');

const clientRoutes = require('./routes/clientRoutes');
const dashboard = require('./routes/adminRoutes');
const { loggedIn } = require('./middlewares/globalMiddlewares');
// const { updater } = require('./utils/utils');
const { WriteError } = require('./error/writeError');

app.use(loggedIn);
app.use('/', clientRoutes);
app.use('/dashboard', dashboard);

app.use('*', (req, res, next) => {
  const error = {
    title: 'Page not available.',
    message: 'Report as problem if you have ever visited this page',
  };
  res.status(200).render('admin/error', { error });
});

app.use((error, req, res, next) => {
  // if (req.originalUrl.startsWith('/dashboard')) {
  // new WriteError(error, req, 'Global Error');
  // }

  if (!error.isOperational) {
    new WriteError(error, req, 'Global Error');
    console.log(error);
  }

  return res.status(200).render('admin/error', { error });
  // res.status(500).json({
  //   status: 'failed',
  //   message: error.message,
  //   error,
  // });
});

module.exports = app;
