'use client';

import LoadingComponent from './LoadingComponent';
import PromptCard from './PromptCard';
import { useState, useEffect, Suspense } from 'react';

const PromptCardList = ({ data }) => {
	return (
		<div className='mt-16 prompt_layout'>
			{data.map((prompt) => (
				<PromptCard
					prompt={prompt}
					key={prompt._id}
				/>
			))}
		</div>
	);
};

const Feed = () => {
	const [searchText, setSearchText] = useState('');
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchPosts = async () => {
		const response = await fetch('/api/prompt');
		const data = await response.json();
		setPosts(data);
		setLoading(false);
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	useEffect(() => {
		if (searchText === '') fetchPosts();

		const fetchFilteredPosts = async () => {
			const response = await fetch(`/api/prompt/search`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ searchText }),
			});
			const data = await response.json();
			setPosts(data);
		};

		searchText !== '' && fetchFilteredPosts();
	}, [searchText]);

	const handleSearchChange = (e) => {
		setSearchText(e.target.value);
	};

	return loading ? (
		<LoadingComponent />
	) : (
		<section className='feed'>
			<form className='relative w-full flex-center'>
				<input
					type='text'
					placeholder='Search for a tag or an username'
					value={searchText}
					onChange={handleSearchChange}
					required
					className='search_input peer'
				/>
			</form>

			<PromptCardList data={posts} />
		</section>
	);
};

Feed.prototype = {};

export default Feed;
