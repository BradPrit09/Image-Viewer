import React, { Component } from 'react';
import { withRouter } from "react-router";
import SearchAppBar from './../../common/header/SearchAppBar';
import { Card, CardContent } from "@material-ui/core";
import { FormControl, InputLabel, Input, Button, FormHelperText } from "@material-ui/core";
import { Typography, withStyles } from "@material-ui/core";

import './Login.css';

const styles = () => ({
	contentRoot: {
		'padding': '60px !important'
	},
	formControlRoot: {
		'width': '-webkit-fill-available'
	}
})
class Login extends Component {

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			usernameReqdClass: 'dispNone',
			password: '',
			passwordReqdClass: 'dispNone',
			credentialsIncorrectClass: 'dispNone'
		}
	}

	usernameChangeHandler = e => {
		this.setState({
			username: e.target.value
		});
	}

	passwordChangeHandler = e => {
		this.setState({
			password: e.target.value
		});
	}

	loginButtonClickHandler = () => {

		const username = 'pritam', password = '1234', accessToken = '7cdef430a51949a5932acb42dfc54d45', currState = this.state;
		currState.usernameReqdClass = this.state.username === "" ? "dispBlock" : "dispNone";
		currState.passwordReqdClass = this.state.password === "" ? "dispBlock" : "dispNone";
		if (this.state.username && this.state.password) {
			currState.credentialsIncorrectClass = this.state.username !== username || this.state.password !== password ? "dispBlock" : "dispNone";
		}
		this.setState(currState);


		if (!this.state.username || !this.state.password) {
			return;
		}

		if (this.state.username !== username || this.state.password !== password) {
			return;
		}

		sessionStorage.setItem("access-token", accessToken);

		this.props.history.push({
			pathname: `/home`,
			state: this.state
		});

	}

	render() {
		const { classes } = this.props;
		return (
			<>
				<SearchAppBar />
				<Card className="cardStyle">
					<CardContent classes={{ root: classes.contentRoot }}>
						<Typography variant="headline" component="h2"> LOGIN </Typography><br />
						<FormControl classes={{ root: classes.formControlRoot }} required>
							<InputLabel htmlFor="username">Username</InputLabel>
							<Input id="username" username={this.state.username} type="string" onChange={this.usernameChangeHandler} />
							<FormHelperText className={this.state.usernameReqdClass}>
								<span className="textColorRed">required</span>
							</FormHelperText>
						</FormControl>
						<br /><br />

						<FormControl classes={{ root: classes.formControlRoot }} required>
							<InputLabel htmlFor="password">Password</InputLabel>
							<Input id="password" password={this.state.password} type="password" onChange={this.passwordChangeHandler} />
							<FormHelperText className={this.state.passwordReqdClass}>
								<span className="textColorRed">required</span>
							</FormHelperText>
						</FormControl>
						<br /><br />

						<div className={this.state.credentialsIncorrectClass}>
							<span className="textColorRed">Incorrect username and/or password</span>
							<br /><br />
						</div>

						<Button variant="contained" color="primary" onClick={this.loginButtonClickHandler}> Login </Button>
					</CardContent>
				</Card>
			</>
		)
	}
}

export default withRouter(withStyles(styles)(Login));