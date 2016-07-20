var app = angular.module( "library", [ 'ngAnimate', 'ngResource' ] );

app.controller( 'control', function( $scope ) {
	$scope.library = {};
	$scope.book = [];
	$scope.books = [];
	$scope.reverse = true;
	$scope.moreBooks = [];


	$scope.hide = function() {
		$scope.showMe = !$scope.showMe;
		console.log( "hiding" );
	}

	$scope.hideMe = function() {
		$scope.hideForm = !$scope.hideForm;
		console.log( "show the new button" );
	}

	$scope.showPerson = function() {
		$scope.showAuthor = !$scope.showAuthor;
		console.log( "showing the Author" );
		// $scope.hide();
	}

	var reset = function() {
		$scope.library.title = null;
		$scope.library.author = null;
		$scope.library.img = null;
		$scope.library.description = null;
		$scope.library.newBooks = false;

		console.log( "this is clean!" );
	}


	$scope.addBook = function() {
		var newBook = {};
		newBook.title = $scope.book.title;
		newBook.author = $scope.book.author;
		newBook.img = $scope.book.img;
		newBook.description = $scope.book.description;

		reset();
		$scope.books.push( newBook );

		console.log( "add a new book here!" );
	}


} );
