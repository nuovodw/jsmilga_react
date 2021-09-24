// import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const books = [
	{
		id: 1,
		img: 'https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL200_SR200,200_.jpg',
		title: 'If Animals Kissed Good Night',
		author: 'Ann Whitford Paul',
	},
	{
		id: 2,
		img: 'https://images-na.ssl-images-amazon.com/images/I/811SRapU9aL._AC_UL200_SR200,200_.jpg',
		title: 'School Zone',
		author: 'Daniel Tiger',
	},
	{
		id: 3,
		img: 'https://images-na.ssl-images-amazon.com/images/I/51jR6z19bKL._AC_UL200_SR200,200_.jpg',
		title: 'Flash Cards: Sight Words',
		author: 'Scholastic Teacher Resources',
	},
];

function BookList() {
	return (
		<section className='booklist'>
			{books.map((book) => {
				return <Book key={book.id} {...book}></Book>;
			})}
		</section>
	);
}

const Book = ({ img, title, author }) => {
	const clickHandler = () => {
		alert('hello world');
	};

	return (
		<article
			className='book'
			onMouseOver={() => {
				console.log(title);
			}}
		>
			<img src={img} alt='cover of the kids book' />
			<h1
				onClick={() => {
					console.log(title);
				}}
			>
				{title}
			</h1>
			<h4>{author}</h4>
			<button type='button' onClick={clickHandler}>
				reference example
			</button>
		</article>
	);
};

ReactDom.render(<BookList />, document.getElementById('root'));
