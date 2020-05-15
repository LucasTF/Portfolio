import React from 'react';

import Section from '../';

import { StyledTechnologies } from './styles';

import javaLogo from '../../../assets/images/java-logo.png';
import csharpLogo from '../../../assets/images/csharp-logo.png';
import htmlLogo from '../../../assets/images/html-logo.png';
import cssLogo from '../../../assets/images/css-logo.png';
import javascriptLogo from '../../../assets/images/javascript-logo.png';
import reactLogo from '../../../assets/images/react-logo.png';
import reduxLogo from '../../../assets/images/redux-logo.png';
import nodeJSLogo from '../../../assets/images/nodejs-logo.png';
import postgreSQLLogo from '../../../assets/images/postgres-logo.png';
import mysqlLogo from '../../../assets/images/mysql-logo.png';

export default function Technologies() {
	return (
		<Section
			title='Tecnologias'
			description='Tecnologias em que possuo proficiência na utilização'
			theme='light'
		>
			<StyledTechnologies>
				<div>
					<img src={javaLogo} alt='Java' />
					<p className='description'>Java</p>
				</div>
				<div>
					<img src={csharpLogo} alt='C#' />
					<p className='description'>C#</p>
				</div>
				<div>
					<img src={htmlLogo} alt='HTML' />
					<p className='description'>HTML</p>
				</div>
				<div>
					<img src={cssLogo} alt='CSS' />
					<p className='description'>CSS</p>
				</div>
				<div>
					<img src={javascriptLogo} alt='JavaScript' />
					<p className='description'>JavaScript</p>
				</div>
				<div>
					<img src={reactLogo} alt='React' />
					<p className='description'>React</p>
				</div>
				<div>
					<img src={reduxLogo} alt='Redux' />
					<p className='description'>Redux</p>
				</div>
				<div>
					<img src={nodeJSLogo} alt='NodeJS' />
					<p className='description'>NodeJS</p>
				</div>
				<div>
					<img src={postgreSQLLogo} alt='PostgreSQL' />
					<p className='description'>PostgreSQL</p>
				</div>
				<div>
					<img src={mysqlLogo} alt='MySQL' />
					<p className='description'>MySQL</p>
				</div>
			</StyledTechnologies>
		</Section>
	);
}
