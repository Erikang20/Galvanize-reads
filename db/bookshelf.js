// var environment = process.env.NODE_ENV || 'development';
// var config = require( '../bookshelf.js' )[ environment ];
var knex = require( 'knex' )( require( '../knexfile.js' ) );
var bookshelf = require( 'bookshelf' )( knex );

module.exports = require( 'bookshelf' )( knex );
