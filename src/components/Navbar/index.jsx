import React from 'react';
import { NavLink } from 'react-router-dom';

import { StyledNavbar } from './styles';

export default function Navbar() {
	return (
		<StyledNavbar>
			<ul>
				<li className='nav-link'>
					<NavLink exact to='/'>
						Início
					</NavLink>
				</li>
				<li className='nav-link'>
					<NavLink to='/about'>Sobre mim</NavLink>
				</li>
				<li className='nav-link'>
					<NavLink to='/work'>Projetos</NavLink>
				</li>
				<li className='nav-link'>
					<NavLink to='/contact'>Contato</NavLink>
				</li>
			</ul>
		</StyledNavbar>
	);
}
