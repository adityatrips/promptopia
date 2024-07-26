'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter, usePathname } from 'next/navigation';

const PromptCard = ({ prompt, handleEdit, handleDelete }) => {
	const { data: session } = useSession();
	const pathname = usePathname();
	const router = useRouter();

	const [copied, setCopied] = useState('');

	const handleCopy = () => {
		setCopied(prompt.prompt);
		navigator.clipboard.writeText(prompt.prompt);

		setTimeout(() => {
			setCopied('');
		}, 3000);
	};

	const handleTagClick = (tagname) => {
		router.push(`/tag?tagname=${tagname}`);
	};

	return (
		<div className='prompt_card'>
			<div className='flex justify-between items-start gap-5'>
				<div className='flex-1 flex justify-start items-center gap-3 cursor-pointer'>
					<Image
						onClick={() => {
							router.push(`/profile/${prompt.creator._id}`);
						}}
						src={prompt.creator.image}
						width={40}
						height={40}
						className='rounded-full object-contain'
					/>

					<div className='flex flex-col'>
						<h3 className='font-satoshi font-semibold text-white900'>
							{prompt.creator.username}
						</h3>
						<p className='font-inter text-sm text-white500'>
							{prompt.creator.email}
						</p>
					</div>
				</div>
				<div
					className='copy_btn'
					onClick={handleCopy}
				>
					<Image
						src={
							copied === prompt.prompt
								? '/assets/icons/tick.svg'
								: '/assets/icons/copy.svg'
						}
						width={20}
						height={20}
					/>
				</div>
			</div>
			<p className='my-4 font-satoshi text-sm text-white700'>{prompt.prompt}</p>
			<p
				className='font-inter text-sm blue_gradient cursor-pointer'
				onClick={() => handleTagClick(prompt.tag)}
			>
				#{prompt.tag}
			</p>

			{session?.user.id === prompt.creator._id && pathname === '/profile' && (
				<div className='mt-5 flex-center gap-4 border-t border-gray-300 pt-3'>
					<p
						onClick={handleEdit}
						className='font-inter text-sm green_gradient cursor-pointer'
					>
						Edit
					</p>
					<p
						onClick={handleDelete}
						className='font-inter text-sm orange_gradient cursor-pointer'
					>
						Delete
					</p>
				</div>
			)}
		</div>
	);
};

export default PromptCard;
