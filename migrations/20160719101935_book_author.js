exports.up = function( knex, Promise ) {
	return knex.schema.createTable( 'book_author', function( table ) {
		table.increments( 'id' ).primary();
		table.integer( 'book_id' ).unsigned().references( 'books.id' ).onDelete( 'CASCADE' );
		table.integer( 'author_id' ).unsigned().references( 'authors.id' ).onDelete( 'CASCADE' );
	} );
};

exports.down = function( knex, Promise ) {
	return knex.schema.dropTable( 'book_author' );


};
