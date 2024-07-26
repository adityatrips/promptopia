'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import Form from '@/components/Form';
import LoadingComponent from '@/components/LoadingComponent';

const EditPrompt = () => {
	const [submitting, setSubmitting] = useState(false);
	const [loading, setLoading] = useState(true);
	const [post, setPost] = useState({
		prompt: '',
		tag: '',
	});
	const router = useRouter();
	const searchParams = useSearchParams();
	const promptId = searchParams.get('id');

	useEffect(() => {
		const fetchPrompt = async () => {
			try {
				const response = await fetch(`/api/prompt/${promptId}`);
				const data = await response.json();

				setPost({
					prompt: data.prompt,
					tag: data.tag,
				});
				setLoading(false);
			} catch (error) {
				console.error(error);
			}
		};

		if (promptId) fetchPrompt();
	}, [promptId]);

	const updatePrompt = async (event) => {
		event.preventDefault();
		setSubmitting(true);

		if (!promptId) return alert("Prompt doesn't exist");

		try {
			const response = await fetch(`/api/prompt/${promptId}`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					prompt: post.prompt,
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

	return loading ? (
		<LoadingComponent />
	) : (
		<Suspense fallback={<LoadingComponent />}>
			<Form
				type='Edit'
				post={post}
				setPost={setPost}
				submitting={submitting}
				handleSubmit={updatePrompt}
			/>
		</Suspense>
	);
};

export default EditPrompt;
