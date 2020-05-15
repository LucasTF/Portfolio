import styled from 'styled-components';

export const StyledTechnologies = styled.section`
	margin-top: 3rem;
	display: grid;
	grid-gap: 1rem;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: repeat(2, 1fr);

	img {
		width: 128px;
		height: 128px;
	}
`;
