// import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

function BookList() {
	return (
		<section className='booklist'>
			<Book />
		</section>
	);
}

const author = 'Ann Whitford Paul';
const Book = () => {
	const title = 'If Animals Kissed Good Night';
	return (
		<article className='book'>
			<img
				src='https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL200_SR200,200_.jpg'
				alt='cover of the kids book'
			/>
			<h1>{title}</h1>
			<h4>{author.toUpperCase()}</h4>
		</article>
	);
};

ReactDom.render(<BookList />, document.getElementById('root'));
