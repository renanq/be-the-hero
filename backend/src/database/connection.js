const knex = require('knex');
const configuration = require('../../knexfile');

//variavel de ambiente para test, altera banco a ser utilizado
const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;

const connection = knex(config);

module.exports = connection;