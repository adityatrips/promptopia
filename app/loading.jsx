'use client';

import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Loading = () => {
	return (
		<div className='w-screen flex justify-center items-center h-screen'>
			<ThreeDots
				visible={true}
				height='80'
				width='80'
				color='#2563eb '
				radius='9'
				ariaLabel='three-dots-loading'
			/>
		</div>
	);
};

export default Loading;
