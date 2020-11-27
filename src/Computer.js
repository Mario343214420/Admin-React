import './App.css';
import Admin from './pages/Admin'
import React from "react"
import {HashRouter, Switch, Route} from 'react-router-dom'
function Computer() {
	return (
		<React.StrictMode>
			<HashRouter>
				<Switch>
					<Route path='/' component={Admin} />
				</Switch>
			</HashRouter>
		</React.StrictMode>
	);
}

export default Computer;
