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
	console.log( result );
} );


router.post( '/', function( req, res ) {
	var book = req.body;
	console.log( book );
	knex( 'books' ).insert( {
		title: req.title,
		// author: req.author,
		img: req.img,
		genre: req.genre,
		description: req.description,
		comments: req.comments
	} ).then( function( result, err ) {
		res.render( 'books' );
	} );
} );

// router.get( '/', function( req, res, next ) {
// 	knex( 'books' ).select().then( function( result, err ) {
// 		res.render( 'books' )
// 	} )
// } );





module.exports = router;
