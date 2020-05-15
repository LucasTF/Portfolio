import React from 'react';
import { MdComputer } from 'react-icons/md';
import { FaServer, FaDatabase } from 'react-icons/fa';
import { IoMdConstruct } from 'react-icons/io';

import Section from '../';

import { StyledSpecializations } from './styles';

export default function Specializations() {
	return (
		<Section
			title='Conhecimentos'
			description='Meus conhecimentos na área de desenvolvimento'
			theme='dark'
		>
			<StyledSpecializations>
				<div>
					<MdComputer className='icon' />
					<h2>Frontend</h2>
					<p className='description'>
						Tenho experiência com o desenvolvimento de sites
						responsivos utilizando a stack padrão HTML, CSS e
						JavaScript e linguagens auxiliares como TypeScript e
						Sass, tendo também proficiência no uso de bibliotecas e
						frameworks populares como React, Redux, Bootstrap,
						dentre outras...
					</p>
				</div>
				<div>
					<FaServer className='icon' />
					<h2>Backend</h2>
					<p className='description'>
						Realizei a construção de soluções desktop, REST APIs e
						microserviços utilizando linguagens como C#, Java e
						NodeJS juntamente com suas respectivas bibliotecas e
						frameworks, sendo essas JavaFX e Spring para Java,
						Windows Forms e ASP.NET Core para C# e Electron e
						Express para NodeJS.
					</p>
				</div>
				<div>
					<FaDatabase className='icon' />
					<h2>Banco de Dados</h2>
					<p className='description'>
						Tenho conhecimento e costume na utilização da linguagem
						SQL bem como alguns de seus sistemas gerenciadores de
						bancos de dados mais populares como MySQL, PostgreSQL e
						SQLite. Sou, também, familiarizado com soluções ORM nas
						linguagens que domino como Hibernate, Entity Framework
						Core e Knex.
					</p>
				</div>
				<div>
					<IoMdConstruct className='icon' />
					<h2>Arquitetura de Software</h2>
					<p className='description'>
						Possuo uma fundação sólida em boas práticas,
						metodologias de desenvolvimento e em técnicas
						arquiteturais como MVC, Design Patterns, princípios
						SOLID, TDD, dentre outros...
					</p>
				</div>
			</StyledSpecializations>
		</Section>
	);
}
