exports.seed = function( knex, Promise ) {
	// Deletes ALL existing entries
	return knex( 'book_authors' ).del()
		.then( function() {
			return knex( 'authors' ).del()
		} )
		.then( function() {
			console.log( "authors" );
			return Promise.all( [
        // Inserts seed entries
        knex( 'authors' ).insert( {
					id: 1,
					fullName: 'Joanne Rowling',
					dob: "July 31, 1965",
					country: 'United Kingdom',
					img: 'http://i.telegraph.co.uk/multimedia/archive/02617/jk_2617100b.jpg',
					biography: 'Joanne "Jo" Rowling, OBE, FRSL, pen names J. K. Rowling and Robert Galbraith, is a British novelist, screenwriter and film producer best known as the author of the Harry Potter fantasy series.',
				} ),
        knex( 'authors' ).insert( {
					id: 2,
					fullName: 'Victor Hugo',
					dob: 'February 26, 1802',
					country: 'France',
					img: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Victor_Hugo_by_%C3%89tienne_Carjat_1876_-_full.jpg',
					biography: 'Victor Marie Hugo was a French poet, novelist, and dramatist of the Romantic movement. He is considered one of the greatest and best-known French writers.',
				} ),
        knex( 'authors' ).insert( {
					id: 3,
					fullName: 'Gabriel Garcia Marquez',
					dob: 'March 6, 1927',
					country: 'Colombia',
					img: 'http://jontaplin.com/wp-content/uploads/2014/04/Marquez.jpg',
					biography: 'Gabriel José de la Concordia García Márquez was a Colombian novelist, short-story writer, screenwriter and journalist, known affectionately as Gabo or Gabito throughout Latin America.',
				} )
      ] );
		} );
};
