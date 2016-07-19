var environment = process.env.NODE_ENV || 'development';
var config = require( '../bookshelf.js' )[ environment ];


module.exports = require( 'bookshelf' )( knex );
