var app = angular.module( "library", [ 'ngAnimate' ] );

app.controller( 'books', function( $scope ) {
	$scope.books = {};
} )
