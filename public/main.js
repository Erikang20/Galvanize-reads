var app = angular.module( "library", [ 'ngAnimate', 'ngResource' ] );

app.controller( 'control', function ( $scope, $http ) {
	$scope.library = {};
	// $scope.views.library = [];
	$scope.book = [];
	$scope.books = [];
	$scope.author = [];
	$scope.authors = [];
	$scope.reverse = true;


	$scope.hide = function () {
		$scope.showMe = !$scope.showMe;
		console.log( "hiding" );
	}

	$scope.hideMe = function () {
			$scope.hideForm = !$scope.hideForm;
			console.log( "hideMe function here" );
		}
		// ================================================


	$scope.showME = function () {
		$scope.hideME = !$scope.hideME;
		console.log( "showME function here" );
	}

	$scope.showPerson = function () {
		$scope.showAuthor = !$scope.showAuthor;
		console.log( "showPerson function here" );
	}


	var reset = function () {
		$scope.library.title = null;
		$scope.library.author = null;
		$scope.library.img = null;
		$scope.library.description = null;
		$scope.library.newBooks = false;

		console.log( "this is clean!" );
	}


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



	$http( {
		method: "GET",
		url: '/',
		// params: {
		// 	book_id: book.id,
		// 	book_title: book.title
		// }
	} ).then( function mySucces( response ) {
			// var books = books;
			// var books = {
			// 	title: book.title,
			// 	author: book.author,
			// 	img: book.img,
			// 	genre: book.genre,
			// 	description: book.description,
			// 	comments: book.comments
			// }
			console.log( 'succes' );
		},
		function err( response ) {
			console.log( "Error" );
		} );
	// ================================
	// var data = book;
	// var data = {
	// 	// book_id: data.id,
	// 	title: data.title,
	// 	author: data.author,
	// 	img: data.img,
	// 	genre: data.genre,
	// 	description: data.description,
	// 	comments: data.comments
	// }
	//
	// var config = {
	// 	params: data,
	// 	headers: {
	// 		'Accept': '/'
	// 	}
	// };
	// ================================

	$http.get( '/' ).then( function mySucces( response ) {
		// $scope.books = books;
		console.log( "getting http" );
	} )

	$http.post( '/' ).then( function mySucces( response ) {
		// $scope.books = books;
		console.log( "posting http!" );
	} );



} );
