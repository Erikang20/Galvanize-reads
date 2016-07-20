var app = angular.module( "library", [ 'ngAnimate', 'ngResource' ] );

app.controller( 'control', function ( $scope ) {
	$scope.library = {};
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


} );
