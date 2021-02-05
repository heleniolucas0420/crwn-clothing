import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component.jsx';
import shopPage from './pages/shop/shop.component.jsx';

import Header from './components/header/header.component';

import './App.css';


function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/shop' component={shopPage} />
			</Switch>
		</div>
	);
}

export default App;
