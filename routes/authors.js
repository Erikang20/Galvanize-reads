var express = require( 'express' );
var router = express.Router();
var knex = require( '../db/knex' );
var methodOverride = require( 'method-override' );
var bodyParser = require( 'body-parser' );



router.get( '/', function( req, res, next ) {
	knex( 'authors' ).select().then( function( result, err ) {
		res.render( 'authors', {
			author: result
		} )

	} );
} );


router.post( '/authors', function( req, res ) {
	var author = req.body;
	knex( 'authors' ).insert( {
		fullName: req.fullName,
		dob: req.dob,
		country: req.country,
		img: req.img,
		biography: req.biography,
		// books: req.books
	} ).then( function( result, err ) {
		res.render( '/authors' );
	} );
} );

// ====================================
////Add a new book////
// ====================================

// router.get( '/new', function( req, res ) {
// 	res.render( 'index' );
// } );





module.exports = router;
