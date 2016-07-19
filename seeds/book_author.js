exports.seed = function( knex, Promise ) {
	// Deletes ALL existing entries

	return knex( 'books' ).del()
		.then( function() {
			return knex( 'book_authors' ).del()
		} )
		.then( function() {
			console.log( "here here" );

			return Promise.all( [
        // Inserts seed entries
        knex( 'book_authors' ).insert( {
					id: 1,
					book_id: 1,
					author_id: 1,
				} ),
        knex( 'book_authors' ).insert( {

					id: 2,
					book_id: 2,
					author_id: 2,
				} ),

        knex( 'book_authors' ).insert( {
					id: 3,
					book_id: 3,
					author_id: 3,
				} ),
      ] );
		} );
};
