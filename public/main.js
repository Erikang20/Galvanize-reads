var app = angular.module( "myApp", [ 'ngRoute' ] );

var reset = function () {
	$scope.library.title = null;
	$scope.library.author = null;
	$scope.library.img = null;
	$scope.library.description = null;
	$scope.library.newBooks = false;

	console.log( "this is clean!" );
}

app.config( function ( $routeProvider ) {
	$routeProvider.when( '/', {
			templateUrl: 'partials/home.html',
			controller: 'headerController'
		} )
		.when( '/books', {
			templateUrl: 'partials/books.html',
			controller: 'booksController'
		} )
		.when( '/authors', {
			templateUrl: 'partials/authors.html',
			controller: 'authorsController'
		} )
} )

app.controller( 'booksController', function ( $scope ) {
	$scope.view = {};
	$scope.book = [];
	$scope.books = [];

	$scope.addBook = function () {
		var newBook = {};
		newBook.title = $scope.book.title;
		newBook.author = $scope.book.author;
		newBook.img = $scope.book.img;
		newBook.genre = $scope.book.genre;
		newBook.description = $scope.book.description;
		newBook.comments = $scope.book.comments

		reset();
		$scope.books.push( newBook );

		console.log( "add a new book here!" );
	}


} )

app.controller( 'authorsController', function ( $scope ) {
	$scope.view = {};
	$scope.authors = [];

	$scope.addAuthor = function () {
		var newAuthor = {};
		newAuthor.fullName = $scope.author.fullName;
		newAuthor.dob = $scope.author.dob;
		newAuthor.country = $scope.author.country;
		newAuthor.img = $scope.author.img;
		newAuthor.biography = $scope.author.biography;
		reset();

		$scope.authors.push( newAuthor );
		console.log( "new authors here yo!" )
	}

	$scope.showPerson = function () {
		$scope.showAuthor = !$scope.showAuthor;
		console.log( "showPerson function here" );
	}
} )



app.controller( 'headerController', function ( $scope ) {
	$scope.view = {};
	$scope.library = {};
	$scope.view.message = "header here"

	$scope.author = [];
	$scope.authors = [];
	$scope.reverse = true;
	console.log( "header header" );

	$scope.hide = function () {
		$scope.showMe = !$scope.showMe;
		console.log( "hiding" );
	}




} );

//
// 	$http( {
// 		method: "GET",
// 		url: '/books',
// 		// params: {
// 		// 	book_id: book.id,
// 		// 	book_title: book.title
// 		// }
// 	} ).then( function mySucces( response ) {
// 			// var books = books;
// 			// var books = {
// 			// 	title: book.title,
// 			// 	author: book.author,
// 			// 	img: book.img,
// 			// 	genre: book.genre,
// 			// 	description: book.description,
// 			// 	comments: book.comments
// 			// }
// 			console.log( response );
// 			console.log( 'succes' );
// 		},
// 		function err( response ) {
// 			console.log( "Error" );
// 		} );
//



// $http( {
// 	method: "GET",
// 	url: '/',
// 	// params: {
// 	// 	book_id: book.id,
// 	// 	book_title: book.title
// 	// }
// } ).then( function mySucces( response ) {
// 		// var books = books;
// 		// var books = {
// 		// 	title: book.title,
// 		// 	author: book.author,
// 		// 	img: book.img,
// 		// 	genre: book.genre,
// 		// 	description: book.description,
// 		// 	comments: book.comments
// 		// }
// 		console.log( 'succes' );
// 	},
// 	function err( response ) {
// 		console.log( "Error" );
// 	} );
// // ================================
// // var data = book;
// // var data = {
// // 	// book_id: data.id,
// // 	title: data.title,
// // 	author: data.author,
// // 	img: data.img,
// // 	genre: data.genre,
// // 	description: data.description,
// // 	comments: data.comments
// // }
// //
// // var config = {
// // 	params: data,
// // 	headers: {
// // 		'Accept': '/'
// // 	}
// // };
// // ================================
//
// $http.get( '/' ).then( function mySucces( response ) {
// 	// $scope.books = books;
// 	console.log( "getting http" );
// } )
//
// // var req = {
// // 	method: 'POST',
// // 	url: '/books',
// // 	headers: {
// // 		'Content-Type': undefined
// // 	},
// // 	data: {
// // 		test: 'test'
// // 	}
// // }
//
//
// $http( {
// 	method: "POST",
// 	url: '/books',
// 	// params: {
// 	// 	book_id: book.id,
// 	// 	book_title: book.title
// 	// }
// } ).then( function mySucces( response ) {
// 	console.log( "testing post" );
// } );
//
// $http.post( '/' ).then( function mySucces( response ) {
// 	// $scope.books = books;
// 	console.log( "posting http!" );
// } );
//
// } );
