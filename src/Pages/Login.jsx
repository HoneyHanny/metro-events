import { Link, Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../css/login.css";
import Vectorbg from "../components/vectorbg";
import axios, { AxiosHeaders } from "axios";
import { WindowSharp } from "@mui/icons-material";

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

    const [id, setId] = useState("");

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();

            let response = await axios.post(
                "http://localhost:8000/api/token/",
                {
                    username: user.username,
                    password: user.password,
                },
                {
                    headers: {
                        Authorization:
                            "JWT " + localStorage.getItem("access_token"),
                    },
                }
            );

            // * * Save the access_token and refresh_token in the localStorage for further authentication.
            localStorage.setItem("access_token", response.data.access);
            localStorage.setItem("refresh_token", response.data.refresh);

            if (response.status === 200) {
                try {
                    const response2 = await axios.get(
                        `http://localhost:8000/api/user/id/${user.username}`,
                        {
                            headers: {
                                Authorization:
                                    "JWT " +
                                    localStorage.getItem("access_token"),
                            },
                        }
                    );

                    if (response2.status === 200) {
                        console.log(response2.data.user);
                        setId(response2.data.user.id);
                        alert(`Login successful ${id}`);
                        setSuccess(true);
                    }
                } catch (err) {
                    console.log(err);
                }
            }
        } catch (err) {
            console.log(err);
            if (err.response.status === 400) {
                alert(err.response.data.error);
                setUser((prevState) => ({
                    ...prevState,
                    password: "",
                }));
            }
        }
    };

    // Trial code rani para indicator naka log in ang user.
    if (success) return <Navigate to={`/home/${id}`} />;

    return (
        <>
            <Vectorbg />
            <div
                width="597"
                height="359"
                viewBox="0 0 597 359"
                fill="none"
                className="container"
            >
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
