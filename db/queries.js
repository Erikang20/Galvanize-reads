var knex = require( 'knex' );


function getBooks() {
	return knex( 'books' )
		.select()
		.innerJoin( 'book_author', 'books.id', 'book_id' )
		.innerJoin( 'authors', 'authors.id', 'author_id' )
}
