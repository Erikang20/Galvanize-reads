var app = angular.module( "library", [ 'ngAnimate' ] );

app.controller( 'control', function( $scope ) {
	$scope.library = {};

	$scope.books = [
		{
			id: '1',
			title: 'Harry Potter and the Prisoner of Azkaban',
			author: 'J. K. Rowling',
			img: 'http://t3.gstatic.com/images?q=tbn:ANd9GcQpMUwSXKMjy_ftHrMtOAWMFiAZNaIHuRZK8t0m5DolqCy6MzI2',
			genre: 'fantasy',
			description: 'Harry Potter and the Prisoner of Azkaban is the third novel in the Harry Potter series, written by J. K. Rowling. The book follows Harry Potter, a young wizard, in his third year at Hogwarts School of Witchcraft and Wizardry.',
			comments: 'J. K. Rowling has sidestepped the usual series-writer trap of sticking so closely to a successful formula that each book is just more of the same.'

      },
		{
			id: '2',
			title: 'Les Misérables',
			author: 'Victor Hugo',
			img: 'http://t2.gstatic.com/images?q=tbn:ANd9GcS8cnJAWyJjyDy3WBZ8of0AdmVTsLdGLN6WoKqTf-u4WTQ-Vfqe',
			genre: 'Historical drama',
			description: 'Les Misérables is a French historical novel by Victor Hugo, first published in 1862, that is considered one of the greatest novels of the 19th century. In the English-speaking world, the novel is usually referred to by its original French title.',
			comments: ''
    }

];

	$scope.authors = [
		{
			id: '',
			fullName: 'Joanne Rowling',
			dob: "07/31/1965",
			country: 'United Kingdom',
			img: 'http://i.telegraph.co.uk/multimedia/archive/02617/jk_2617100b.jpg',
			biography: 'Joanne "Jo" Rowling, OBE, FRSL, pen names J. K. Rowling and Robert Galbraith, is a British novelist, screenwriter and film producer best known as the author of the Harry Potter fantasy series.',
  }
];

	$scope.hide = function() {
		$scope.showMe = !$scope.showMe;
		console.log( "hiding" );
	}

	$scope.showPerson = function() {
		$scope.showAuthor = !$scope.showAuthor;
		console.log( "showing the Author" );
	}
} );
