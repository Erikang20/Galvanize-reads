exports.up = function( knex, Promise ) {

	return knex.schema.createTable( 'books', function( table ) {
		table.increments( 'id' ).primary();
		table.string( 'title' );
		table.string( 'img' ).defaultTo( '' );
		table.string( 'genre' );
		table.text( 'description' );
		table.text( 'comments' );

	} );

};

exports.down = function( knex, Promise ) {
	return knex.schema.dropTable( 'books' )
};
