var express = require( 'express' );
var router = express.Router();
var knex = require( '../db/knex' );
var methodOverride = require( 'method-override' );
var bodyParser = require( 'body-parser' );



router.get( '/', function( req, res, next ) {
	res.render( 'authors', {
		authors: result
	} )
} );


router.post( '/', function( req, res ) {
	var author = req.body;
	console.log( author );
	knex( 'authors' ).insert( {
		fullName: author.fullName,
		dob: author.dob,
		country: author.country,
		img: author.img,
		biography: author.biography,
	} ).then( function( result, err ) {
		res.render( 'authors' );
		console.log( "working with the authors here!!!!" );
	} );
} );

router.get( '/', function( req, res, next ) {
	knex( 'authors' ).select().then( function( result, err ) {
		res.render( 'authors' )
	} )
} );








module.exports = router;
