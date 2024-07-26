'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Form from '@/components/Form';

const CreatePrompt = () => {
	const [submitting, setSubmitting] = useState(false);
	const [post, setPost] = useState({
		prompt: '',
		tag: '',
	});
	const { data: session } = useSession();
	const router = useRouter();

	const createPrompt = async (event) => {
		event.preventDefault();
		setSubmitting(true);

		try {
			const response = await fetch('/api/prompt/new', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					prompt: post.prompt,
					userId: session?.user.id,
					tag: post.tag,
				}),
			});

			if (response.ok) {
				router.push('/');
			}
		} catch (error) {
			console.error(error);
		} finally {
			setPost({
				prompt: '',
				tag: '',
			});
			setSubmitting(false);
		}
	};

	return (
		<Form
			type='Create'
			post={post}
			setPost={setPost}
			submitting={submitting}
			handleSubmit={createPrompt}
		/>
	);
};

export default CreatePrompt;
