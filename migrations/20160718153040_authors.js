exports.up = function( knex, Promise ) {

	return knex.schema.createTable( 'authors', function( table ) {
		table.increments( 'id' ).primary();
		table.string( 'fullName' );
		table.date( 'dob' );
		table.string( 'country' );
		table.string( 'img' ).defaultTo( '' );
		table.text( 'biography' );
	} );

};

exports.down = function( knex, Promise ) {
	return knex.schema.dropTable( 'authors' );
};
