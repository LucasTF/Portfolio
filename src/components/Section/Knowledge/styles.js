import styled from 'styled-components';

export const StyledKnowledge = styled.section`
	margin-top: 3rem;
	display: grid;
	grid-gap: 1.5rem;
	grid-template-columns: repeat(4, 1fr);

	div {
		.icon {
			font-size: 2rem;
			color: var(--primary-color);
		}
		p {
			text-align: justify;
		}
	}
`;
