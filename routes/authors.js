var express = require( 'express' );
var router = express.Router();
var knex = require( '../db/knex' );
var methodOverride = require( 'method-override' );
var bodyParser = require( 'body-parser' );



router.get( '/', function( req, res, next ) {
	knex( 'library' ).select().then( function( result, err ) {
		res.render( 'index' )

	} );
} );


router.post( '/authors', function( req, res ) {
	var book = req.body;
	knex( 'library' ).insert( {
		fullName: author.fullName,
		dob: author.dob,
		country: author.country,
		img: author.img,
		biography: author.biography,
		// books: author.books
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
