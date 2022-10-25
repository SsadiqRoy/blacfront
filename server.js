const dotenv = require('dotenv');

process.on('uncaughtException', (error) => {
  console.log(error);
  process.exit(1);
});

dotenv.config({ path: './config.env' });

const app = require('./app');

const server = app.listen(process.env.port, process.env.host, () => console.log('blacfront server started...'));

process.on('unhandledRejection', (error) => {
  console.log(error);
  server.close(() => {
    process.exit();
  });
});
