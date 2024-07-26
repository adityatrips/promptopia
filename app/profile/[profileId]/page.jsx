'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';

import Profile from '@/components/Profile';
import LoadingComponent from '@/components/LoadingComponent';

const OtherProfile = () => {
	const [posts, setPosts] = useState([]);
	const router = useRouter();
	const { profileId } = useParams();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchPosts = async () => {
			const response = await fetch(`/api/users/${profileId}/posts`);
			const data = await response.json();
			setPosts(data);
			setLoading(false);
		};

		if (profileId) fetchPosts();
	}, []);

	return loading ? (
		<LoadingComponent />
	) : (
		<Profile
			name={`${posts[0]?.creatorName}'s`}
			desc={`Welcome to ${posts[0]?.creatorName}'s personalized space`}
			data={posts}
		/>
	);
};

export default OtherProfile;
