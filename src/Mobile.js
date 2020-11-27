import './App.css';
import Admin from './pages/Admin'
import {HashRouter, Switch, Route} from 'react-router-dom'
import React from "react"
function Mobile() {
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

export default Mobile;
