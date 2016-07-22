var express = require( 'express' );
var router = express.Router();
var knex = require( '../db/knex' );
var methodOverride = require( 'method-override' );
var bodyParser = require( 'body-parser' );



router.get( '/', function ( req, res, next ) {
	knex( 'authors' ).select().then( function ( result, err ) {
		res.json( 'authors' )
		console.log( "authors" );
	} )
} );

router.post( '/', function ( req, res, next ) {
	var author = req.body;
	console.log( author );
	knex( 'authors' ).insert( {
		full_name: author.full_name,
		dob: author.dob,
		country: author.country,
		img: author.img,
		biography: author.biography
	} ).then( function ( response, err ) {
		res.json( 'authors' )
		console.log( "json authors here" );
	} )
} )


module.exports = router;
