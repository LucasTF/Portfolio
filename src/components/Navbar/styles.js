import styled from 'styled-components';

export const StyledNavbar = styled.nav`
	padding-top: 1rem;

	ul {
		display: flex;

		li.nav-link {
			padding: 1rem 1.5rem;

			a {
				text-decoration: none;
				color: #fff;
				text-transform: uppercase;
				border-bottom: 3px transparent solid;
				padding-bottom: 0.5rem;
				transition: border-color 0.5s;

				:hover {
					border-color: var(--light-color);
				}

				&.active {
					border-color: var(--primary-color);
				}
			}
		}
	}
`;
