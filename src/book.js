import React from 'react';

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

export default Book;
