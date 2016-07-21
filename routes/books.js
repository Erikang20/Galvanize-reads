// var express = require( 'express' );
// var router = express.Router();
// var knex = require( '../db/knex' );
// var methodOverride = require( 'method-override' );
// var bodyParser = require( 'body-parser' );
//
// router.get( '/', function ( req, res ) {
// 	console.log( 'YOOOOOOOO', result );
// 	knex( 'books' ).select().then( function ( result, err ) {
// 		console.log( 'YO', result );
// 		res.json( result );
// 	} )
// } )
//
//
// router.post( '/', function ( req, res ) {
// 	var book = req.body;
// 	console.log( book );
// 	knex( 'books' ).insert( {
// 		title: book.title,
// 		// author: req.author,
// 		img: book.img,
// 		genre: book.genre,
// 		description: book.description,
// 		comments: book.comments
// 	} ).then( function ( result, err ) {
// 		if ( err ) {
// 			console.log( err );
// 		} else {
// 			console.log( "result:" +
// 				result );
// 		}
// 		res.render( 'books' );
// 	} );
// 	console.log( "working books here" );
// } );
//
// // $scope.save = function () {
// // 	$.ajax( {
// // 		type: 'POST',
// // 		url: "library", ///database here???
// // 		data:"books:{'id': '', + $scope.book.id + "", 'title': '' + $scope.book.title + "", ''}"
// // 	} )
// // }
//
//
//
//
// module.exports = router;
