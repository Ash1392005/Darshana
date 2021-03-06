const fs = require('fs');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: 'v1.0.9',
    AMMU_CODE: process.env.AMMU_CODE === undefined ? '' : process.env.AMMU_CODE,
    HANDLERS: process.env.HANDLERS === undefined ? '[.!;]' : process.env.HANDLERS,
    WORKTYPE: process.env.WORK_TYPE === undefined ? 'private' : process.env.WORK_TYPE,
    BOT_PRESENCE: process.env.BOT_PRESENCE === undefined ? 'online' : process.env.BOT_PRESENCE,
    SUDO: process.env.SUDO === undefined ? '919188346721,0' : process.env.SUDO,
    NO_LOG: process.env.NO_LOG === undefined ? 'false' : process.env.NO_LOG,
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    NO_ONLINE: process.env.NO_ONLINE === undefined ? true : convertToBool(process.env.NO_ONLINE),
    AUTO_UPDATE: process.env.AUTO_UPDATE === undefined ? false : convertToBool(process.env.AUTO_UPDATE),
    MENTION: process.env.MENTION === undefined ? 'true' : process.env.MENTION,
    AK_MENTION: process.env.AK_MENTION === undefined ? 'true' : process.env.AK_MENTION,
    PASSWORD: process.env.PASSWORD === undefined ? 'darsshana' : process.env.PASSWORD,
    STATUS: process.env.STATUS === undefined ? 'false' : process.env.STATUS,
    BRANCH: 'main',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    DATABASE: new Sequelize({ dialect: "sqlite", storage: './server/DB/Darshana.db', logging: DEBUG }),
    DEBUG: DEBUG 
};