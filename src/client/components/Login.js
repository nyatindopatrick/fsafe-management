import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import history from '../util/history';

const Login = () => {
	const [selected, setSelect] = useState([]);
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	let credemail = (e) => {
		setEmail(e.target.value);
	};
	let credpass = (e) => {
		setPassword(e.target.value);
	};

	let handleChange = (e) => {
		setSelect([...selected, e.target.value]);
	};
	let msg = [];
	let handleClick = (e) => {
		if (selected.length === 0) {
			alert('please select a role');
			msg.push('please select a role');
		} else if (
			email === 'nyatindopatrick@gmail.com' &&
			password === 'lakefire'
		) {
			localStorage.setItem('roles', JSON.stringify(selected));
			history.push('/app');
		} else {
			alert('wrong credentials');
		}
	};
	console.log(selected);
	console.log(email);
	return (
		<div>
			<div className="split left"></div>
			<div>
				<div
					className="split right "
					title="Login"
					align="center"
					description=""
				>
					<h1 className="loginHead">Fika Safe</h1>
					<form className="loginform" onSubmit={handleClick}>
						<br />
						<div className="role">
							<label htmlFor="username">What is your role?</label>
							<select className="select" name="role" onChange={handleChange}>
								<option>Select Role</option>
								<option name="role" value="admin">
									Admin
								</option>
								<option name="role" value="sacco">
									Sacco Admin
								</option>
								<option name="role" value="riders">
									Boda
								</option>
							</select>
						</div>

						<br />
						<input
							required={true}
							name="email"
							placeholder="email"
							className="loginput"
							onChange={credemail}
						/>
						<br />
						<input
							required={true}
							name="password"
							placeholder="password"
							type="password"
							className="loginput"
							onChange={credpass}
						/>
						<br />
						<div>
							<span>
								<input type="checkbox" name="" /> <label>Remember me</label>{' '}
							</span>
							<Link className="forgot" to="/forgot-password">
								Forgot Password
							</Link>
						</div>
						<br />
						<span>
							{' '}
							<button className="btn loginButton" type="submit">
								Login
							</button>
						</span>
						<Link to="/register">
							<button className="btn registerButton" type="submit">
								Register
							</button>
						</Link>
					</form>
				</div>
			</div>
		</div>
	);
};


export default Login;
