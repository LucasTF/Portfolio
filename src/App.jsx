import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as Routes from './routes';

import Home from './containers/Home';
import About from './containers/About';

function App() {
	let routes = (
		<Switch>
			<Route path={Routes.ABOUT} component={About} />
			<Route path={Routes.PROJECTS} component={Home} />
			<Route path={Routes.CONTACT} component={Home} />
			<Route path={Routes.HOME} component={Home} />
		</Switch>
	);

	return <BrowserRouter>{routes}</BrowserRouter>;
}

export default App;
