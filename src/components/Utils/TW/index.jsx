import React from 'react';
import TypeWriter from 'typewriter-effect';
import { StyledTypeWriter } from './styles';

export default function TW() {
	return (
		<StyledTypeWriter className='main-text'>
			<TypeWriter
				options={{
					strings: ['Java', 'C#', 'JavaScript', 'React', 'NodeJS'],
					autoStart: true,
					wrapperClassName: 'main-text',
					cursor: '',
					loop: true,
				}}
			/>
		</StyledTypeWriter>
	);
}
