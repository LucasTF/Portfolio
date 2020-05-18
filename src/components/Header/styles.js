import styled from 'styled-components';

export const StyledHeader = styled.header`
	background: ${props =>
		props.simple
			? 'var(--bg-image) no-repeat 50% 0% / cover'
			: 'var(--bg-image) no-repeat center right / cover'};
	height: ${props => (props.simple ? '5.5rem' : '100vh')};
	border-bottom: ${props =>
		props.simple ? '3px solid var(--primary-color)' : 'none'};
	color: #fff;

	div.content {
		text-align: center;
		padding-top: 20%;

		h1 {
			font-size: 4rem;
			line-height: 1.2;
		}
	}
`;
