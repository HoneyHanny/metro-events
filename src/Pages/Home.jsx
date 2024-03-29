import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Navbar from '../components/navbar';
import '../css/home.css';
import EventsCard from '../components/eventscard';
import Notifications from '../components/notifications';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='body'>
        <Grid container spacing={2}>
          <Notifications />

          {/* Middle column */}
          <Grid item xs={20} md={6}>
            <h3>Events Feed</h3>
            <Paper
              elevation={3}
              sx={{
                borderRadius: '12px',
                padding: '20px',
                height: '100vh',
              }}
            >
              {/* Content for middle column */}

              <EventsCard />
            </Paper>
          </Grid>

          {/* Right column */}
          <Grid item xs={16} md={3}>
            <Paper
              elevation={4}
              sx={{
                borderRadius: '12px',
                padding: '20px',
                height: '50vh',
              }}
            >
              <h3>Event Requests</h3>
            </Paper>

            <Paper
              elevation={4}
              sx={{
                borderRadius: '12px',
                padding: '20px',
                height: '50vh',
                marginTop: '20px',
              }}
            >
              <h3>Join Requests</h3>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Home;
