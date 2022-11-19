const dotenv = require('dotenv');

process.on('uncaughtException', (error) => {
  // console.log(error);
  new WriteError(error, req, 'uncaughtException');
  process.exit(1);
});

dotenv.config({ path: './config.env' });

const app = require('./app');
const { WriteError } = require('./error/writeError');

const server = app.listen(process.env.port, process.env.host, () => console.log('🎁🎁 blacfront server started...'));

process.on('unhandledRejection', (error) => {
  // console.log(error);
  new WriteError(error, req, 'unhandledRejection');
  server.close(() => {
    process.exit();
  });
});
