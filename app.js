var express = require( 'express' );
var knex = require( 'knex' );
var bookshelf = require( 'bookshelf' )( knex );
var pg = require( 'pg' );
var path = require( 'path' );
var methodOverride = require( 'method-override' );
var bodyParser = require( 'body-parser' );
var routes = require( './routes/index' );
var books = require( './routes/books' );
var authors = require( './routes/authors' );
var app = express();



app.set( 'view engine', 'ejs' );
app.set( 'views', path.join( __dirname, '/views' ) );
app.use( express.static( path.join( __dirname, '/public' ) ) );
// app.use( logger( 'dev' ) );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( {
	extended: false
} ) );
app.use( methodOverride( '_method' ) );


app.use( '/', routes );
// app.use( '/books', books );
// app.use( '/authors', authors );




var port = process.env.PORT || 3000;
app.listen( port, function () {
	console.log( "Im listening here yo!" );
} );

module.exports = {
	app
};
