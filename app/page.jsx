import Feed from '@/components/Feed';
import React from 'react';

const HomePage = () => {
	return (
		<section className='w-full flex-center flex-col'>
			<h1 className='head_text text-center'>
				Discover & Share
				<br className='max-md:hidden' />
				<span className='orange_gradient text-center'> AI-powered prompts</span>
			</h1>
			<p className='desc text-center'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. In quas sit
				sint, labore voluptatum magni. Aliquam vitae ratione quidem tenetur vel,
				est ad quasi sint.
			</p>
			<Feed />
		</section>
	);
};

export default HomePage;
