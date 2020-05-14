import styled from 'styled-components';

export const StyledHeader = styled.header`
	background: var(--bg-image) no-repeat center right / cover;
	height: 100vh;
	color: #fff;

	div.content {
		text-align: center;
		padding-top: 20%;

		h1 {
			font-size: 4rem;
			line-height: 1.2;
		}

		p.description {
			font-size: 1.3rem;
			margin-bottom: 2rem;
		}
	}
`;
