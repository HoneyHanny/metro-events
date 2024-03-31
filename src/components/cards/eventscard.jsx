import * as React from "react";
import { useState } from "react"; // Import useState hook
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import Button from "@mui/material/Button";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import Basketball from "../../assets/images/basketball.jpg";
import axios from "axios";
import CommentPopup from "../commentpopup";
import Popover from "@mui/material/Popover";

import Backdrop from "@mui/material/Backdrop";

const CustomPopover = styled(Popover)(({ theme }) => ({
    "& .MuiPopover-paper": {
        backgroundColor: "none", // Ensure the popover is transparent
        Height: "400px",
        borderRadius: "30px", // Set maximum height
        // overflow: 'auto', // Enable scrolling
        "&::-webkit-scrollbar": {
            display: "none", // Hide scrollbar for Webkit browsers
        },
        "&::-ms-scrollbar": {
            display: "none", // Hide scrollbar for IE and Edge
        },
        "&::-webkit-scrollbar-thumb": {
            background: "transparent", // Make scrollbar thumb transparent
        },
    },
}));

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));

const StyledCard = styled(Card)({
    backgroundColor: "#F0F0F0",
    borderRadius: 16,
    marginBottom: 16,
});

export default function EventCard({ event }) {
    const [expanded, setExpanded] = React.useState(false);
    const [showCommentPopup, setShowCommentPopup] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isLoadingComments, setIsLoadingComments] = useState(false); // Track loading state

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleLikeClick = async (eventId) => {
        try {
            const updatedLikes = event.eventLikes + 1;
            const response = await axios.put(
                `http://localhost:8000/api/event/like/${eventId}/`,
                {},
                {
                    headers: {
                        Authorization:
                            "JWT " + localStorage.getItem("access_token"),
                    },
                }
            );
            console.log(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleJoinClick = async (eventId) => {
        try {
            const response = await axios.post(
                `http://localhost:8000/api/event/join/request/${eventId}/`,
                {},
                {
                    headers: {
                        Authorization:
                            "JWT " + localStorage.getItem("access_token"),
                    },
                }
            );
            console.log(response.data);
            if (response.status === 200) {
                alert("Join request was successfully sent.");
                // TODO: Pwede ni ninyo i unclickable ang button. Kamo na bahala.
            }
        } catch (err) {
            console.log(err);
            if (err.response.status === 400) {
                alert("You have already joined this event");
            }
        }
    };

    const handleCommentClick = async (eventId, event) => {
        alert("Comment was clicked");
        setIsLoadingComments(true); // Set loading state

        setShowCommentPopup(true);
        setAnchorEl(event.currentTarget); // Use the event object passed to the function

        try {
            const response = await axios.get(
                `http://localhost:8000/api/event/comment/${eventId}/`
            );
            console.log(response);
            if (response.status === 200) {
                alert("Map the return response");
                console.log(response.data);
                setShowCommentPopup(true);
                setAnchorEl(event.currentTarget);
                // TODO: Map the response data
            }
        } catch (err) {
            if (err.response.status === 400) {
                alert("Error Fetching comments");
            }
        }
    };
    const handleCloseCommentPopup = () => {
        // Close the popover when the user clicks outside of it
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <StyledCard
            sx={{ maxWidth: 2000, elevation: 0 }}
            style={{ boxShadow: "none" }}
        >
            <CardHeader
                avatar={
                    <Avatar
                        sx={{ bgcolor: red[500] }}
                        aria-label="recipe"
                    ></Avatar>
                }
                action={
                    <div style={{ display: "flex", alignItems: "center" }}>
                        {/* Number outside the IconButton */}
                        <IconButton
                            sx={{
                                height: "40px",
                                width: "40px",
                                marginRight: "5px",
                                color: "#6A6A6A",
                            }}
                        >
                            <PeopleAltOutlinedIcon />
                        </IconButton>
                    </div>
                }
                title={event.eventName}
                subheader={event.eventDate}
            />
            <CardMedia
                component="img"
                height="194"
                image={Basketball}
                alt="Basketball Vent"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {event.eventDescription}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton sx={{ height: "40px", width: "40px" }}>
                    <span style={{ marginRight: "1px" }}>
                        {event.eventLikes}
                    </span>{" "}
                    <FavoriteIcon onClick={() => handleLikeClick(event.id)} />
                    {/* heart icon*/}
                </IconButton>

                {/* Comment icon, todo add a pop up-john */}
                <IconButton sx={{ height: "40px", width: "40px" }}>
                    <ModeCommentOutlinedIcon
                        onClick={(event) => handleCommentClick(event.id, event)}
                    />
                </IconButton>

                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        backgroundColor: "#596EC6",
                        borderRadius: "35px",
                        padding: "6px",
                        minWidth: "20px",
                        minHeight: "30px",
                        marginRight: "5px",
                        elevation: "0",
                        marginLeft: "auto", // This line pushes the button to the right
                        "&:hover": {
                            backgroundColor: "#455990", // Optional: Change hover color
                        },
                    }}
                    onClick={() => handleJoinClick(event.id)}
                >
                    Join
                </Button>
            </CardActions>

            <CustomPopover
                open={open}
                anchorReference="none"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                onClose={handleCloseCommentPopup}
            >
                <CommentPopup />
            </CustomPopover>
        </StyledCard>
    );
}
