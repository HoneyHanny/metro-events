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
const Home = () => {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		const retrieve = async () => {
			try {
				let response = await axios.get("http://localhost:8000/api/event/");
				setEvents(response.data);
				console.log(response);
			} catch (err) {
				console.error(err);
			}
		};

		retrieve();
	});

	return (
		<>
			<Navbar />
			<div className="body">
				<Grid container spacing={4}>
					{/*left column */}
					<Notifications />

					{/* Middle column */}

					<Grid item xs={20} md={6}>
						<h3>Events Feed</h3>
						<Paper
							elevation={3}
							sx={{
								borderRadius: "40px",
								padding: "20px",
								height: "100vh",
								marginTop: "10px",
							}}>
							{/* Content for middle column */}
							{/* Map the response */}
							{events.map((event) => {
								return (
									<EventsCard
										title={event.eventName}
										date={event.eventDate}
										description={event.eventDescription}
										numOfAttendees={event.eventNumberOfAttendees}
									/>
								);
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
