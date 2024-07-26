'use client';

const ErrorPage = ({ error, reset }) => {
	return (
		<main>
			<h1>Error</h1>
			<p>{error.message}</p>
			<button
				className='black_btn'
				type='button'
			>
				Go back!
			</button>
		</main>
	);
};

export default ErrorPage;
