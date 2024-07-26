'use client';

import LoadingComponent from '@/components/LoadingComponent';
import PromptCard from '@/components/PromptCard';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const TagPosts = () => {
	const searchParams = useSearchParams();
	const tagname = searchParams.get('tagname');

	const [prompts, setPrompts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchTagPrompts = async () => {
			try {
				const response = await fetch(`/api/prompt/tag/${tagname}`);
				const data = await response.json();

				setPrompts(data);
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		};

		if (tagname) fetchTagPrompts();
	}, []);

	return loading ? (
		<LoadingComponent />
	) : (
		<div className='max-w-2xl w-full'>
			<h1 className='head_text text-left mb-5'>
				<span className='blue_gradient'>#{tagname}</span>
			</h1>
			<div className='prompt_layout'>
				{prompts.map((prompt) => (
					<div className='w-full'>
						<PromptCard prompt={prompt} />
					</div>
				))}
			</div>
		</div>
	);
};

export default TagPosts;
