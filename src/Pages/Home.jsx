import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Navbar from "../components/navbar";
import "../css/home.css";
import EventsCard from "../components/cards/eventscard";
import Notifications from "../components/notifications";
import NotificationCard from "../components/cards/notificationcard";
import Acceptrequests from "../components/acceptrequests";
import Joinrequests from "../components/joinrequests";
import axios from "axios";
import ResponsiveAppBar from "./../components/navbar";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";

const Home = () => {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		const retrieve = async () => {
			try {
				let response = await axios.get("http://localhost:8000/api/event/", {
					headers: {
						Authorization: "JWT " + localStorage.getItem("access_token"),
					},
				});
				setEvents(response.data);
			} catch (err) {
				console.error(err);
			}
		};

		retrieve();
	}, []);

	return (
		<>
			<Navbar />
			<div className="body" style={{ userSelect: "none" }}>
				<Grid container spacing={4}>
					{/*left column */}
					<Notifications />

					{/* Middle column */}

					<Grid item xs={20} md={6}>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								justifyConten: "center",
							}}>
							<h3 style={{ marginRight: "10px" }}>Events Feed</h3>
							{/* button create event, button with icon plus/ Adddd  */}
							<Button
								variant="contained"
								color="primary"
								startIcon={<AddIcon />}
								sx={{
									backgroundColor: "#FFFFFF",
									borderRadius: "35px",
									padding: "6px",
									minWidth: "20px",
									minHeight: "30px",
									elevation: "0",
									marginLeft: "auto",
									marginRight: "10px",
									color: "#6A6A6A",

									"&:hover": {
										backgroundColor: "#BEC6E7", // Optional: Change hover color
									},
								}}>
								event
							</Button>
						</div>
						<Paper
							elevation={3}
							sx={{
								borderRadius: "40px",
								padding: "20px",
								height: "103vh",
								marginTop: "10px",
								overflow: "auto", // Make the Paper scrollable
								"&::-webkit-scrollbar": {
									width: "0", // Hide the scrollbar on Webkit browsers (Chrome, Safari)
								},
								scrollbarWidth: "none", // Hide the scrollbar on Firefox
							}}>
							{/* Content for middle column */}
							{/* Map the response */}
							{events.map((event) => {
								return <EventsCard event={event} />;
							})}
						</Paper>
					</Grid>

					{/* Right column */}
					<Grid item xs={16} md={3}>
						<Acceptrequests />
						<Joinrequests />
					</Grid>
				</Grid>
			</div>
		</>
	);
};

export default Home;
