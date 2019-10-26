import React, { useState } from 'react';
import useSignUpForm from './customHooks';

const MasterForm = () => {
	let [currentStep, setCurrent] = useState(1);
	const { inputs, handleInputChange, handleSubmit } = useSignUpForm(
		handleLogin
	);
	function handleLogin() {
		return console.log(inputs);
	}

	let _next = () => {
		let currentSt = currentStep;
		currentSt = currentSt >= 2 ? 3 : currentSt + 1;
		setCurrent(currentSt);
	};

	let _prev = () => {
		let currentSt = currentStep;
		currentSt = currentSt <= 1 ? 1 : currentSt - 1;
		setCurrent(currentSt);
	};

	// the functions for our button

	function previousButton() {
		let currentSt = currentStep;
		if (currentSt !== 1) {
			return (
				<button className="btn btn-secondary" type="button" onClick={_prev}>
					Previous
				</button>
			);
		}
		return null;
	}

	function nextButton() {
		let currentSt = currentStep;
		if (currentSt < 3) {
			return (
				<button
					className="btn btn-primary float-right"
					type="button"
					onClick={_next}
				>
					Next
				</button>
			);
		}
		return null;
	}
	return (
		<>
			<h1>Login </h1>
			<p>Step {currentStep} </p>

			<form onSubmit={handleSubmit}>
				<Step1 currentStep={currentStep} handleChange={handleInputChange} />
				<Step2 currentStep={currentStep} handleChange={handleInputChange} />
				<Step3 currentStep={currentStep} handleChange={handleInputChange} />
				{previousButton()}
				{nextButton()}
			</form>
		</>
	);
};

const Step1 = (props) => {
	if (props.currentStep !== 1) {
		return null;
	}
	return (
		<div className="form-group">
			<label htmlFor="email">Email address</label>
			<input
				className="form-control"
				id="email"
				name="email"
				type="text"
				placeholder="Enter email"
				onChange={props.handleChange}
			/>
		</div>
	);
};

const Step2 = (props) => {
	if (props.currentStep !== 2) {
		return null;
	}
	return (
		<div>
			<label htmlFor="username">What is your role?</label>
			<select name="role" className="select" onChange={props.handleChange} >
				<option>Select Role</option>
				<option name="role" value="admin">Admin</option>
				<option name="role" value="manager">Sacco Admin</option>
				<option name="role" value="customer">Boda</option>
			</select>
		</div>
	);
};

const Step3 = (props) => {
	if (props.currentStep !== 3) {
		return null;
	}
	return (
		<>
			<div className="form-group">
				<label htmlFor="password">Password</label>
				<input
					className="form-control"
					id="password"
					name="password"
					type="password"
					placeholder="Enter password"
					onChange={props.handleChange}
				/>
			</div>
			<button className="btn btn-success btn-block">Log In</button>
		</>
	);
};


export default MasterForm;
