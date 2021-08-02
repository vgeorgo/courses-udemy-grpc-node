const config = require('../knexfile')[process.env.ENVIRONMENT];

module.exports = require('knex')(config);