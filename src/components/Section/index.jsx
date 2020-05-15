import React from 'react';

import { LightSection, DarkSection } from './styles';

export default function Section({
	title,
	description,
	theme = 'light',
	children,
}) {
	let content = (
		<div className='container'>
			<h2 className='section-title'>{title}</h2>
			<p className='description'>{description}</p>
			{children}
		</div>
	);
	if (theme === 'dark') {
		return <DarkSection>{content}</DarkSection>;
	} else {
		return <LightSection>{content}</LightSection>;
	}
}
