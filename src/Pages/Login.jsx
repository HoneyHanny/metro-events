import { Link, Navigate } from "react-router-dom";
import React, { useState } from "react";
import "../css/login.css";
import Vectorbg from "../components/vectorbg";
import axios from "axios";

// const defaultTheme = createTheme()

// NOTE(hans): Login template
// https://github.com/mui/material-ui/tree/v5.15.12/docs/data/material/getting-started/templates/sign-up
const Login = () => {
	// TODO: Finish impl with backend
	// * * Done
	const [user, setUser] = useState({
		username: "",
		password: "",
	});
	const [success, setSuccess] = useState(false);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setUser((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = async (event) => {
		try {
			event.preventDefault();

			const response = await axios.post("http://localhost:8000/api/login/", {
				username: user.username,
				password: user.password,
			});

			if (response.status === 200) {
				alert("Login successful");
				setSuccess(true);
			}
			console.log(response);
		} catch (err) {
			console.error(err.response.data.error);
			if (err.response.status === 400) {
				alert(err.response.data.error);
				setUser((prevState) => ({
					...prevState,
					password: "",
				}));
			}
		}
	};

	if (success) return <Navigate to="/home/" />;

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
					<h1>Log In</h1>
					Username
					<input
						name="username"
						label="Username"
						autoFocus
						onChange={handleChange}
						value={user.username}
					/>
					Password
					<input
						name="password"
						label="Password"
						type="password"
						onChange={handleChange}
						value={user.password}
					/>
					<button onClick={handleSubmit}>Log in</button>
					<h5>
						Don’t have an Account yet?
						<Link style={{ color: "#596EC6" }} to="/signup">
							Sign up
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

export default Login;
