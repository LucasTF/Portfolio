import React from 'react';
import TW from '../Utils/TW';

import Navbar from '../Navbar';
import Button from '../Utils/Button';

import { StyledHeader } from './styles';

export default function Header({ simple = false }) {
	let content;
	if (!simple) {
		content = (
			<div className='content'>
				<h1>
					Lucas Ferreira <TW /> Developer
				</h1>
				<p className='description'>
					Desenvolvedor especializado na criação de sites responsivos
					e REST APIs.
				</p>
				<Button link='/work' type='light'>
					Meus Projetos
				</Button>
			</div>
		);
	} else {
		content = null;
	}
	return (
		<StyledHeader simple={simple}>
			<div className='container'>
				<Navbar />
				{content}
			</div>
		</StyledHeader>
	);
}
