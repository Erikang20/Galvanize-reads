exports.seed = function( knex, Promise ) {
	// Deletes ALL existing entries
	return knex( 'books' ).del()
		.then( function() {
			console.log( "books" );
			return Promise.all( [
        // Inserts seed entries
        knex( 'books' ).insert( {
					id: 1,
					title: 'Harry Potter and the Prisoner of Azkaban',
					img: 'http://t3.gstatic.com/images?q=tbn:ANd9GcQpMUwSXKMjy_ftHrMtOAWMFiAZNaIHuRZK8t0m5DolqCy6MzI2',
					genre: 'fantasy',
					description: 'Harry Potter and the Prisoner of Azkaban is the third novel in the Harry Potter series, written by J. K. Rowling. The book follows Harry Potter, a young wizard, in his third year at Hogwarts School of Witchcraft and Wizardry.',
					comments: 'J. K. Rowling has sidestepped the usual series-writer trap of sticking so closely to a successful formula that each book is just more of the same.'
				} ),
        knex( 'books' ).insert( {
					id: 2,
					title: 'Les Misérables',
					img: 'http://t2.gstatic.com/images?q=tbn:ANd9GcS8cnJAWyJjyDy3WBZ8of0AdmVTsLdGLN6WoKqTf-u4WTQ-Vfqe',
					genre: 'Historical drama',
					description: 'Les Misérables is a French historical novel by Victor Hugo, first published in 1862, that is considered one of the greatest novels of the 19th century. In the English-speaking world, the novel is usually referred to by its original French title.',
					comments: ''
				} ),
        knex( 'books' ).insert( {
					id: 3,
					title: 'One Hundred Years of Solitude',
					img: 'http://t3.gstatic.com/images?q=tbn:ANd9GcTTuwGK1J7Ond0fO9HkLUU84mkkb89rqYSNPbX4XGfFkcm3pm3u',
					genre: 'Magic realism',
					description: 'One Hundred Years of Solitude is a 1967 novel by Colombian author Gabriel García Márquez that tells the multi-generational story of the Buendía family, whose patriarch, José Arcadio Buendía, founds the town of Macondo, the metaphoric Colombia.',
					comments: ''
				} )
      ] );
		} );
};
