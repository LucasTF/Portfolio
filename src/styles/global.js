import { createGlobalStyle } from 'styled-components';

import bgImg from '../assets/images/bg-image.jpg';

export const GlobalStyle = createGlobalStyle`

    :root {
        --web-width: 1280px;
        --primary-color: #ffaf00;
        --light-color: #f4f4f4;
        --dark-color: #333;
        --bg-image: url(${bgImg});
        font-family: 'Dosis', sans-serif;
        font-size: 16px;
        line-height: 1.6;
        background: #f0f0f0;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body::-webkit-scrollbar {
        display: none;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    h2, h3, h4 {
        text-transform: uppercase;
    }

    img {
        width: 100%;
    }

    div.container {
        max-width: var(--web-width);
        padding: 0 1.5rem;
        margin: auto;
        overflow: hidden;
    }

    div.bottom-line {
        height: 2px;
        width: 5rem;
        background: var(--primary-color);
        display: block;
        margin: 0 auto 1rem auto;
    }

    p.description {
		font-size: 1.3rem;
		margin-bottom: 2rem;
	}

`;
