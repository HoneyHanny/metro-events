import React, { useState } from "react";
import Popover from "@mui/material/Popover";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Button, TextField } from "@mui/material";
import axios from "axios";

const CreateEventPopup = ({ open, anchor, onClose, userId }) => {
    const [formData, setFormData] = useState({
        eventName: "",
        eventVenue: "",
        eventDate: null,
        eventDescription: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleDateChange = (date) => {
        setFormData((prevState) => ({
            ...prevState,
            eventDate: date,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log(parseInt(userId));
            let response = await axios.post(
                "http://localhost:8000/api/event/create/",
                {
                    eventName: formData.eventName,
                    eventVenue: formData.eventVenue,
                    eventDate: formData.eventDate.toISOString().split("T")[0],
                    eventDescription: formData.eventDescription,
                    eventOrganizer: parseInt(userId),
                },
                {
                    headers: {
                        Authorization:
                            "JWT " + localStorage.getItem("access_token"),
                    },
                }
            );
            console.log(response.status);
            console.log(response);
        } catch (err) {
            console.log(err);
        }
        console.log("form data: ");
        console.log(formData);
    };

    return (
        <Popover
            open={open}
            anchor={anchor}
            onClose={onClose}
            anchorOrigin={{
                vertical: "center",
                horizontal: "center",
            }}
            transformOrigin={{
                vertical: "center",
                horizontal: "center",
            }}
        >
            <form
                style={{
                    padding: "20px",
                    display: "flex",
                    gap: "20px",
                    justifyContent: "center",
                    flexDirection: "column",
                }}
                onSubmit={handleSubmit}
            >
                <TextField
                    label="Name"
                    name="eventName"
                    value={formData.eventName}
                    onChange={handleChange}
                    margin="normal"
                />
                <TextField
                    label="Venue"
                    name="eventVenue"
                    value={formData.eventVenue}
                    onChange={handleChange}
                    margin="normal"
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Date"
                        value={formData.eventDate}
                        onChange={handleDateChange}
                        margin="normal"
                    />
                </LocalizationProvider>
                <TextField
                    label="Description"
                    name="eventDescription"
                    value={formData.eventDescription}
                    onChange={handleChange}
                    margin="normal"
                />
                <Button
                    type="submit"
                    variant="contained"
                    style={{ marginLeft: "100px" }}
                >
                    Create event
                </Button>
            </form>
        </Popover>
    );
};

export default CreateEventPopup;
