var express = require( 'express' );
var router = express.Router();
var knex = require( '../db/knex' );
var methodOverride = require( 'method-override' );
var bodyParser = require( 'body-parser' );

// home page
router.get( '/', function( req, res ) {
	res.render( 'books', {

		books: result
	} );
} );


router.post( '/', function( req, res ) {
	var book = req.body;
	console.log( book );
	knex( 'books' ).insert( {
		title: book.title,
		// author: req.author,
		img: book.img,
		genre: book.genre,
		description: book.description,
		comments: book.comments
	} ).then( function( result, err ) {
		if ( err ) {
			console.log( err );
		} else {
			console.log( "result:" +
				result );
		}
		res.render( 'books' );
	} );
	console.log( "working books here" );
} );

router.get( '/', function( req, res, next ) {
	knex( 'books' ).select().then( function( result, err ) {
		res.render( 'books' )
	} )
} );





module.exports = router;
