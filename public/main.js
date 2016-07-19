var app = angular.module( "library", [ 'ngAnimate' ] );

app.controller( 'control', function( $scope ) {
	$scope.library = {};
	$scope.book = [];
	$scope.books = [];
	$scope.reverse = true;



	// 	$scope.books = [
	// 		{
	// 			id: '1',
	// 			title: 'Harry Potter and the Prisoner of Azkaban',
	// 			author: 'J. K. Rowling',
	// 			img: 'http://t3.gstatic.com/images?q=tbn:ANd9GcQpMUwSXKMjy_ftHrMtOAWMFiAZNaIHuRZK8t0m5DolqCy6MzI2',
	// 			genre: 'fantasy',
	// 			description: 'Harry Potter and the Prisoner of Azkaban is the third novel in the Harry Potter series, written by J. K. Rowling. The book follows Harry Potter, a young wizard, in his third year at Hogwarts School of Witchcraft and Wizardry.',
	// 			comments: 'J. K. Rowling has sidestepped the usual series-writer trap of sticking so closely to a successful formula that each book is just more of the same.'
	//
	//       },
	// 		{
	// 			id: '2',
	// 			title: 'Les Misérables',
	// 			author: 'Victor Hugo',
	// 			img: 'http://t2.gstatic.com/images?q=tbn:ANd9GcS8cnJAWyJjyDy3WBZ8of0AdmVTsLdGLN6WoKqTf-u4WTQ-Vfqe',
	// 			genre: 'Historical drama',
	// 			description: 'Les Misérables is a French historical novel by Victor Hugo, first published in 1862, that is considered one of the greatest novels of the 19th century. In the English-speaking world, the novel is usually referred to by its original French title.',
	// 			comments: ''
	//     },
	// 		{
	// 			id: '3',
	// 			title: 'One Hundred Years of Solitude',
	// 			author: 'Gabriel Garcia Marquez',
	// 			img: 'http://t3.gstatic.com/images?q=tbn:ANd9GcTTuwGK1J7Ond0fO9HkLUU84mkkb89rqYSNPbX4XGfFkcm3pm3u',
	// 			genre: 'Magic realism',
	// 			description: 'One Hundred Years of Solitude is a 1967 novel by Colombian author Gabriel García Márquez that tells the multi-generational story of the Buendía family, whose patriarch, José Arcadio Buendía, founds the town of Macondo, the metaphoric Colombia.',
	// 			comments: ''
	//     }
	//
	// ];
	//
	// 	$scope.authors = [
	// 		{
	// 			id: '',
	// 			fullName: 'Joanne Rowling',
	// 			dob: "July 31, 1965",
	// 			country: 'United Kingdom',
	// 			img: 'http://i.telegraph.co.uk/multimedia/archive/02617/jk_2617100b.jpg',
	// 			biography: 'Joanne "Jo" Rowling, OBE, FRSL, pen names J. K. Rowling and Robert Galbraith, is a British novelist, screenwriter and film producer best known as the author of the Harry Potter fantasy series.',
	// 			books: 'Harry Potter and the Prisoner of Azkaban, Harry Potter and the Chamber of Secrets'
	//   },
	// 		{
	// 			id: '',
	// 			fullName: 'Victor Hugo',
	// 			dob: 'February 26, 1802',
	// 			country: 'France',
	// 			img: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Victor_Hugo_by_%C3%89tienne_Carjat_1876_-_full.jpg',
	// 			biography: 'Victor Marie Hugo was a French poet, novelist, and dramatist of the Romantic movement. He is considered one of the greatest and best-known French writers.',
	// 			books: 'Les Misérables, The Man who Laughs'
	//
	// },
	// 		{
	// 			id: '',
	// 			fullName: 'Gabriel Garcia Marquez',
	// 			dob: 'March 6, 1927',
	// 			country: 'Colombia',
	// 			img: 'http://jontaplin.com/wp-content/uploads/2014/04/Marquez.jpg',
	// 			biography: 'Gabriel José de la Concordia García Márquez was a Colombian novelist, short-story writer, screenwriter and journalist, known affectionately as Gabo or Gabito throughout Latin America.',
	// 			books: 'One Hundred Years of Solitude, Love in the Time of Cholera, Chronicle of a Death Foretold'
	// }
	// ];

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

		// $scope.hide();

		$scope.books.push( newBook );
		console.log( "add a new book here!" );

		reset();
	}
} );
