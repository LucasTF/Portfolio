import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';

import { StyledFooter } from './styles';

export default function Footer() {
	return (
		<StyledFooter>
			<div className='footer-content container'>
				<p>Lucas Ferreira; 2020.</p>
				<div className='contact'>
					<FaFacebookF className='icon' />
					<FaGithub className='icon' />
					<FaLinkedinIn className='icon' />
				</div>
			</div>
		</StyledFooter>
	);
}
