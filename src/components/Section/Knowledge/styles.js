import styled from 'styled-components';

export const StyledKnowledge = styled.section`
	margin-top: 3rem;
	display: grid;
	grid-gap: 1.5rem;
	grid-template-columns: repeat(4, 1fr);

	div {
		.icon {
			font-size: 4rem;
			color: var(--dark-color);
			background: var(--primary-color);
			padding: 16px;
			border-radius: 50%;
			transition: all 1s;

			:hover {
				font-size: 5rem;
			}
		}
		p {
			text-align: justify;
		}
	}
`;
