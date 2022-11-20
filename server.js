const dotenv = require('dotenv');

process.on('uncaughtException', (error) => {
  // console.log(error);
  new WriteError(error, undefined, 'uncaughtException');
  process.exit(1);
});

dotenv.config({ path: './config.env' });

const app = require('./app');
const { WriteError } = require('./error/writeError');

new WriteError({ m: 'We are about to start the server' }, undefined, 'just console');
const server = app.listen(process.env.port, process.env.host, () => console.log('🎁🎁 blacfront server started...'));

process.on('unhandledRejection', (error) => {
  // console.log(error);
  new WriteError(error, undefined, 'unhandledRejection');
  server.close(() => {
    process.exit();
  });
});
