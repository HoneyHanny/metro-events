import React, { useState } from "react";
import "../css/signup.css";
import { Link, Navigate } from "react-router-dom";
import Vectorbg from "../components/vectorbg";
import axios from "axios";

const SignUp = () => {
	const [credential, setCredentials] = useState({
		username: "",
		password: "",
		confirmPassword: "",
	});
	const [success, setSuccess] = useState(false);

	const handleChange = (event) => {
		const { name, value } = event.target;
		console.log(event.target);
		setCredentials((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (credential.password !== credential.confirmPassword) {
			alert("Mismatch");
			return;
		}

		try {
			const response = await axios.post("http://localhost:8000/api/register/", {
				username: credential.username,
				password: credential.password,
			});

			if (response.status === 201) {
				alert("Created successfully.");
				setSuccess(true);
			}
		} catch (err) {
			console.error(err);
			if (err.response.status === 400) {
				alert("User already exists");
				// * * IF THIS IS THE CASE, CLEAR ALL FIELDS
				setCredentials({
					...credential,
					username: "",
					password: "",
					confirmPassword: "",
				});
			}
			if (err.response.status === 405) {
				alert("Failed to register");
				return;
			}
		}
	};

	if (success) return <Navigate to="/" />;

	return (
		<>
			<Vectorbg />
			<div
				width="597"
				height="359"
				viewBox="0 0 597 359"
				// fill='none'
				className="container">
				<div className="left">
					<h1>Sign Up</h1>
					Username
					<input
						name="username"
						label="Username"
						autoFocus
						value={credential.username}
						onChange={handleChange}
					/>
					Password
					<input
						name="password"
						label="Password"
						type="password"
						value={credential.password}
						onChange={handleChange}
					/>
					Confirm password
					<input
						name="confirmPassword"
						label="confirmPass"
						type="password"
						value={credential.confirmPassword}
						onChange={handleChange}
					/>
					<button onClick={handleSubmit}>Sign up</button>
					<h5>
						Already have an Account
						<Link style={{ color: "#596EC6" }} to="/login">
							Log in
						</Link>
					</h5>
				</div>
				<hr />
				<div className="right">
					<h1>
						Metro<span style={{ color: "#596EC6" }}>Events</span>
					</h1>
				</div>
			</div>
		</>
	);
};

export default SignUp;
