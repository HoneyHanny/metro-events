import React from "react";
import Paper from "@mui/material/Paper";
import CommentCard from "./cards/commentpopupcard";

const CommentPopup = ({ comments }) => {
	return (
		<Paper
			sx={{
				borderRadius: "16px",
				padding: "20px",
				maxHeight: "300px",
				marginBottom: "20px",
				overflow: "auto", // Enable scrolling
				"&::-webkit-scrollbar": {
					display: "none", // Hide scrollbar for Webkit browsers
				},
				"&::-ms-scrollbar": {
					display: "none", // Hide scrollbar for IE and Edge
				},
				"&::-webkit-scrollbar-thumb": {
					background: "transparent", // Make scrollbar thumb transparent
				},
			}}>
			{comments.map((comment) => (
				<CommentCard
					key={comment.id}
					avatarSrc="/avatar2.jpg"
					name={comment.user.username}
					comment={comment.comment}
				/>
			))}
		</Paper>
	);
};

export default CommentPopup;
