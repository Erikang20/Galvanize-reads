var express = require( 'express' );
var router = express.Router();
var knex = require( '../db/knex' );
var methodOverride = require( 'method-override' );
var bodyParser = require( 'body-parser' );



router.get( '/', function( req, res, next ) {
	knex( 'books' ).select().then( function( result, err ) {
		res.render( 'index' )

	} );
} );


router.post( '/', function( req, res ) {
	var book = req.body;
	knex( 'books' ).insert( {
		title: book.title,
		author: book.author,
		img: book.img,
		genre: book.genre,
		description: book.description,
		comments: book.comments
	} ).then( function( result, err ) {
		res.redirect( '/' );
	} );
} );

// ====================================
////Add a new book////
// ====================================

router.get( '/new', function( req, res ) {
	res.render( 'index' );
} );





module.exports = router;
