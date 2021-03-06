import React, { Component } from 'react';
import CreateLink from './CreateLink';
import Header from './Header';
import LinkListPage from './LinkListPage';
import {Switch, Route, Router} from 'react-router-dom';

import '../styles/App.css';

class App extends Component {
	render() {
		return (
			<div className='center w85'>
				<Header />
				<div className='ph3 pv1 background-gray'>
					<Switch>
						<Route exact path='/' component={LinkListPage}/>
						<Route exact path='/create' component={CreateLink}/>
					 </Switch>
				</div>
			</div>
		)
	}
}

export default App;
