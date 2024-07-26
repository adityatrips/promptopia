'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';

import Profile from '@/components/Profile';

const OtherProfile = () => {
	const [posts, setPosts] = useState([]);
	const router = useRouter();
	const { profileId } = useParams();

	useEffect(() => {
		const fetchPosts = async () => {
			const response = await fetch(`/api/users/${profileId}/posts`);
			const data = await response.json();
			console.log(data);
			setPosts(data);
		};

		if (profileId) fetchPosts();
	}, []);

	return (
		<Profile
			name={`${posts[0]?.creatorName}'s`}
			desc={`Welcome to ${posts[0]?.creatorName}'s personalized space`}
			data={posts}
		/>
	);
};

export default OtherProfile;
