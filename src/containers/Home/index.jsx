import React from 'react';

import Header from '../../components/Header';
import Technologies from '../../components/Section/Technologies';
import Knowledge from '../../components/Section/Knowledge';
import Footer from '../../components/Footer';

export default function Home() {
	return (
		<>
			<Header />
			<Technologies />
			<Knowledge />
			<Footer />
		</>
	);
}
