import Nav from '@/components/Nav';
import Provider from '@/components/Provider';

import '@/styles/globals.css';

export const metadata = {
	title: 'Promptopia',
	description: 'Promptopia is a platform for sharing prompts.',
	author: 'Aditya Tripathi',
	tags: ['prompt', 'writing', 'sharing', 'community'],
};

const RootLayout = ({ children }) => {
	return (
		<html>
			<body>
				<Provider>
					<div className='main'>
						<div className='gradient' />
					</div>

					<main className='app'>
						<Nav />
						{children}
					</main>
				</Provider>
			</body>
		</html>
	);
};

export default RootLayout;
