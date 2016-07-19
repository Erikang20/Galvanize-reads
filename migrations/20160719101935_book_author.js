exports.up = function( knex, Promise ) {
	return knex.schema.createTable( 'book_author', function( table ) {
		table.increments( 'id' ).primary();
		table.integer( 'book_id' ).unsigned().references( 'books.id' );
		table.integer( 'auhtor_id' ).unsigned().references( 'authors.id' );
	} );
};

exports.down = function( knex, Promise ) {
	return knex.schema.dropTable( 'book_author' );


};
