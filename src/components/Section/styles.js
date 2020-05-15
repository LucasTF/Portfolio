import styled from 'styled-components';

const StyledSection = styled.section`
	text-align: center;
	padding: 2rem 0;
`;

export const DarkSection = styled(StyledSection)`
	background: #333;
	color: var(--light-color);
`;

export const LightSection = styled(StyledSection)`
	background: #f0f0f0;
	color: var(--dark-color);
`;
