import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledButton = styled(NavLink)`
	display: inline-block;
	padding: 0.8rem 2rem;
	transition: all 0.5s;
	border: none;
	cursor: pointer;

	&.primary {
		color: var(--dark-color);
		background-color: var(--primary-color);
	}
	&.light {
		color: var(--dark-color);
		background-color: var(--light-color);
	}
	&.dark {
		color: var(--light-color);
		background-color: var(--dark-color);
	}

	:hover {
		background-color: var(--primary-color);
	}
`;
