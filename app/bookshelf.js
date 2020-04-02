const dbConfig = require('../config/database.config.js');

const knex = require('knex')(dbConfig);
module.exports = require('bookshelf')(knex);
