const axios = require('../config/plugins/axios');
const logger = require('pino')()

const GET = async (url) => {
    return axios.get(url)
                .then(response => response)
                .catch(error => {
                    const msg = "Error on GET operation";
                    logger.error(error, msg);
                    return new Error(msg);
                });
}


module.exports = {GET};