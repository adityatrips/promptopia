import React from 'react';
import { Puff } from 'react-loader-spinner';

const LoadingComponent = () => {
	return (
		<Puff
			visible={true}
			height='100'
			width='100'
			color='#2563eb'
			ariaLabel='puff-loading'
			wrapperStyle={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: 'calc(100vh - 6rem)',
				width: '100vw',
			}}
		/>
	);
};

export default LoadingComponent;
