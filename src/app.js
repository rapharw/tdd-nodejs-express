const logger = require('pino')()
const app = require('./config/server/express')();
const port = process.env.SERVER_PORT || 3030;

app.listen(port, () => {
  logger.info(`Server is running on Port ${port}`);
});