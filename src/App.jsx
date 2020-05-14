import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './containers/Home';

function App() {
	let routes = (
		<Switch>
			<Route path='/about' component={Home} />
			<Route path='/work' component={Home} />
			<Route path='/contact' component={Home} />
			<Route path='/' component={Home} />
		</Switch>
	);

	return <BrowserRouter>{routes}</BrowserRouter>;
}

export default App;
