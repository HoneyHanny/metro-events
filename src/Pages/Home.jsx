import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Navbar from '../components/navbar';
import '../css/home.css';
import EventsCard from '../components/cards/eventscard';
import Notifications from '../components/notifications';
import NotificationCard from '../components/cards/notificationcard';
import Acceptrequests from '../components/acceptrequests';
const Home = () => {
  return (
    <>
      <Navbar />
      <div className='body'>
        <Grid container spacing={4}>
          <Notifications />

          {/* Middle column */}
          <Grid item xs={20} md={6}>
            <h3>Events Feed</h3>
            <Paper
              elevation={3}
              sx={{
                borderRadius: '40px',
                padding: '20px',
                height: '100vh',
                marginTop: '10px',
              }}
            >
              {/* Content for middle column */}

              <EventsCard
                title={'Shrimp and Chorizo Paella'}
                date={'September 14, 2016'}
                description={
                  'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'
                }
                numOfAttendees={10}
              />
            </Paper>
          </Grid>

          {/* Right column */}
          <Grid item xs={16} md={3}>
            {/* import the acceptrequest remain the grid for flex */}
            <Acceptrequests />
            <Paper
              elevation={4}
              sx={{
                borderRadius: '40px',
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
