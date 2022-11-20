const dotenv = require('dotenv');
const { WriteError, LogToFile } = require('./error/writeError');

process.on('uncaughtException', (error) => {
  // console.log(error);
  new WriteError(error, {}, 'uncaughtException');
  process.exit(1);
});

dotenv.config({ path: './config.env' });

new LogToFile({ m: 'Before we create the app' });
const app = require('./app');

new LogToFile({ m: 'We are about to start the server' });
const server = app.listen(process.env.port, process.env.host, () => console.log('🎁🎁 blacfront server started...'));
new LogToFile({ m: 'Ther sever has started' });

process.on('unhandledRejection', (error) => {
  // console.log(error);
  new WriteError(error, {}, 'unhandledRejection');
  server.close(() => {
    process.exit();
  });
});
