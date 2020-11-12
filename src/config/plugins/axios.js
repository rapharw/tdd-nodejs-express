const axios = require('axios');
const logger = require('pino')()

const instance = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades',
  timeout: 1500,
  headers: {
      "content-type": "application/json"
    }
});

// Interceptor Request
instance.interceptors.request.use(
    (config) => {
        logDebug('Request', config);
        return config;
    }, 
    (error) => {
        return Promise.reject(error);
    }
);

// Interceptor Response
instance.interceptors.response.use(
    (response) => {
        logDebug('Response', response.data);
        return response.data;
    }, 
    (error) => {
        return Promise.reject(error);
    }
);

// Function to log
function logDebug(operation, data){
    logger.debug(`----- Start ${operation} -----`);
    logger.debug(data);
    logger.debug(`----- End ${operation} -----`)
}

module.exports = instance;