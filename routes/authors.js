var express = require( 'express' );
var router = express.Router();
var knex = require( '../db/knex' );
var methodOverride = require( 'method-override' );
var bodyParser = require( 'body-parser' );



// router.get( '/', function ( req, res ) {
// 	res.render( 'authors' )
// } );

//
router.get( '/authors', function ( req, res, next ) {
	knex( 'authors' ).select().then( function ( result, err ) {
		res.render( '/authors' )
		console.log( "authors" );
	} )
} );


//
module.exports = router;
