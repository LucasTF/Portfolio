import React from 'react';
import { NavLink } from 'react-router-dom';
import * as Routes from '../../routes';

import { StyledNavbar } from './styles';

export default function Navbar() {
	return (
		<StyledNavbar>
			<ul>
				<li className='nav-link'>
					<NavLink exact to={Routes.HOME}>
						Início
					</NavLink>
				</li>
				<li className='nav-link'>
					<NavLink to={Routes.ABOUT}>Sobre mim</NavLink>
				</li>
				<li className='nav-link'>
					<NavLink to={Routes.PROJECTS}>Projetos</NavLink>
				</li>
				<li className='nav-link'>
					<NavLink to={Routes.CONTACT}>Contato</NavLink>
				</li>
			</ul>
		</StyledNavbar>
	);
}
