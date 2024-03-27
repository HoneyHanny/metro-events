import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Navbar from '../Components/navbar';
import '../css/home.css';
import EventsCard from '../Components/eventscard';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='body'>
        <Grid container spacing={2}>
          {/* Left column */}
          <Grid item xs={12} md={3}>
            <Paper
              elevation={3}
              sx={{ borderRadius: '12px', padding: '20px', height: '100vh' }}
            >
              <h3>Notifications</h3>
            </Paper>
          </Grid>

          {/* Middle column */}
          <Grid item xs={20} md={6}>
            <h3>Events Feed</h3>
            <Paper
              elevation={3}
              sx={{ borderRadius: '12px', padding: '20px', height: '100vh' }}
            >
              {/* Content for middle column */}

              <EventsCard />
            </Paper>
          </Grid>

          {/* Right column */}
          <Grid item xs={16} md={3}>
            <Paper
              elevation={4}
              sx={{ borderRadius: '12px', padding: '20px', height: '50vh' }}
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
