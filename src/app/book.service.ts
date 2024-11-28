import { Injectable } from '@angular/core';
import { Book } from './book.interface';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class BookService {
	samplePlaceholderImageURl = 'https://placehold.co/400';

	private books: Book[] = [
		{
			id: 1,
			title: 'Alamat ng Kalabaw',
			genre: 'Adventure',
			author: 'Segundo D.  Matias',
			year: 	2009,
			imageUrl: 'Kalabaw.jpg',
			description:'(Part of the Modernong Alamat Series by Segundo D. Matias Jr.',
			rating: 4.5,
		},
		{
			id: 2,
			title: 'Alamat ng Atis',
			genre: 'Fiction',
			author: 'Rene O. Villanueva',
			year: 2007,
			imageUrl: 'Atis.jpg',
			description:
				'(The Legend of the Custard Apple) (Modernong Alamat - Modern Legend)',
			rating: 4.8,
		},
		{
			id: 3,
			title: 'Alamat ng Ahas',
			genre: 'Fiction',
			author: 'Segundo D. Matias Jr.',
			year: 2009,
			imageUrl: 'Ahas.jpg',
			description:
				'(THE LEGEND OF THE SNAKE)',
			rating: 4.7,
		},
		{
			id: 4,
			title: 'Alamat ng Bawang',
			genre: 'Adventure',
			author: ' Segundo D. Matias Jr. and Jomike Tejido',
			year: 2009,
			imageUrl: 'Bawang.jpg',
			description:
				'(THE LEGEND OF GARLIC)',
			rating: 4.6,
		},
		{
			id: 5,
			title: 'Alamat ng Butiki',
			genre: 'Horror',
			author: 'Rene O. Villanueva',
			year: 2007,
			imageUrl: 'Butiki.jpg',
			description:
				'The Legend of the House Lizard (Modernong Alamat - Modern Legend)',
			rating: 4.4,
		},
		{
			id: 6,
			title: 'Alamat ng Buwaya',
			genre: 'Adventure',
			author: ' Segundo D. Matias Jr.',
			year: 2009,
			imageUrl: 'Buwaya.jpg',
			description:
				'The Legend of the Crocodile [Tagalog]',
			rating: 4.2,
		},
		{
			id: 7,
			title: 'Alamat ng Rosas',
			genre: 'Romance',
			author: ' Segundo D. Matias Jr.',
			year: 2009,
			imageUrl: 'Rosas.jpg',
			description:
				'(The Legend of the Rose)',
			rating: 4.3,
		},
		{
			id: 8,
			title: 'Alamat ng Lansones',
			genre: 'Adventure',
			author: 'Segundo D. Matias Jr.',
			year: 2009,
			imageUrl: 'Lansones.jpg',
			description:
				'(The Legend of the Lanzones)',
			rating: 4.1,
		},
		{
			id: 9,
			title: 'Alamat ng Puno ng Nara',
			genre: 'Fantasy',
			author: 'Segundo D. Matias Jr.',
			year: 2009,
			imageUrl: 'Narra.jpg',
			description:
				'The Legend of the Narra Tree',
			rating: 4.9,
		},
		{
			id: 10,
			title: 'Alamat ng Mangga',
			genre: 'Sci-Fi',
			author: 'Rene O. Villanueva',
			year: 2007,
			imageUrl: 'Mangga.jpg',
			description:
				'The Legend of the Mango (Modernong Alamat - Modern Legend)',
			rating: 4.5,
		},
		{
			id: 11,
			title: 'Alamat ng Pagong',
			genre: 'Fantasy',
			author: 'Segundo D. Matias Jr.',
			year: 2009,
			imageUrl: 'Pagong.jpg',
			description:
				'The Legend of the Turtle',
			rating: 4.6,
		},
		{
			id: 12,
			title: 'Alamat ng Agila',
			genre: 'Dystopian',
			author: 'Segundo D. Matias Jr.',
			year: 2009,
			imageUrl: 'Agila.jpg',
			description:
				'(The Legend of the Eagle)',
			rating: 4.4,
		},
		
	];

	getBooks(): Observable<Book[]> {
		return of(this.books);
	}
}