import React from 'react';
import { StyledButton } from './styles';

export default function Button({ link, children, type }) {
	return (
		<StyledButton to={link} className={type}>
			{children}
		</StyledButton>
	);
}
