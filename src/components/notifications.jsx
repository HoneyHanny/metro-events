import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

// Left column
const notifications = () => {
  return (
    <Grid item xs={12} md={3}>
      <Paper
        elevation={3}
        sx={{
          borderRadius: '12px',
          padding: '20px',
          height: '100vh',
        }}
      >
        {/* <h3>Notifications</h3> */}
        <h3>Upcoming Events</h3>
      </Paper>
    </Grid>
  );
};

export default notifications;
