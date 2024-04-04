import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import NotificationCard from "./cards/notificationcard";

// Left column
const notifications = ({ notifications }) => {
	return (
		<Grid item xs={12} md={3}>
			<Paper
				elevation={3}
				sx={{
					borderRadius: "40px",
					padding: "20px",
					height: "100vh",
				}}>
				{/* <h3>Notifications</h3> */}
				<h3>Notifications </h3>
				{notifications.length > 0 &&
					notifications.map((notification) => {
						return <NotificationCard notifications={notification} />;
					})}
			</Paper>
		</Grid>
	);
};

export default notifications;
