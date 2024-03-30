import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Acceptrequestscard from "./cards/acceptrequestcard";

// Left column
const acceptrequests = ({ request }) => {
	console.log(request);

	return (
		<Paper
			elevation={4}
			sx={{
				borderRadius: "40px",
				padding: "20px",
				height: "50vh",
				marginTop: "20px",
			}}>
			{/* <h3>Notifications</h3> */}
			<h3>Accept Request </h3>
			{request.map((req) => {
				return <Acceptrequestscard request={req} />;
			})}
		</Paper>
	);
};

export default acceptrequests;
