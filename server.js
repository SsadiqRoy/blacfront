const dotenv = require('dotenv');
const { WriteError } = require('./error/writeError');

process.on('uncaughtException', (error) => {
  // console.log(error);
  new WriteError(error, {}, 'uncaughtException');
  process.exit(1);
});

dotenv.config({ path: './config.env' });

new WriteError({ m: 'Before we create the app' }, {}, 'just console');
const app = require('./app');

new WriteError({ m: 'We are about to start the server' }, {}, 'just console');
const server = app.listen(process.env.port, process.env.host, () => console.log('🎁🎁 blacfront server started...'));

process.on('unhandledRejection', (error) => {
  // console.log(error);
  new WriteError(error, {}, 'unhandledRejection');
  server.close(() => {
    process.exit();
  });
});
