import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Profile from './screens/profile/Profile';
import Login from "./screens/login/Login";
import Home from './screens/home/Home';
import ApiClient from "./client/ApiClient";

const apiClient = new ApiClient();

class Routes extends Component {
	render() {
		return (
			<Router>
				<div className="main-container">
					<Route exact path='/' render={(props) => <Login {...props} />} />
					<Route exact path='/home' render={(props) => <Home apiClient={apiClient} {...props} />} />
				        <Route exact path='/profile' render={(props) => <Profile {...props} />} />
					
				</div>
			</Router>
		)
	}
}
export default Routes;
