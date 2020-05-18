import styled from 'styled-components';

export const StyledFooter = styled.footer`
	background: var(--darker-color);
	color: var(--light-color);
	height: 4rem;

	.footer-content {
		display: flex;
		justify-content: space-between;
		height: 4rem;
		align-items: center;

		.contact {
			.icon {
				margin-right: 1rem;
				border: 2px var(--light-color) solid;
				border-radius: 50%;
				font-size: 2rem;
				padding: 0.3rem;

				:hover {
					background: var(--primary-color);
					color: var(--darker-color);
					cursor: pointer;
				}
			}
		}
	}
`;
