import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Navbar from '../components/navbar';
import '../css/home.css';
import EventsCard from '../components/cards/eventscard';
import Notifications from '../components/notifications';
import NotificationCard from '../components/cards/notificationcard';
import Acceptrequests from '../components/acceptrequests';
import Joinrequests from '../components/joinrequests';
const Home = () => {
  return (
    <>
      <Navbar />
      <div className='body'>
       
       
        <Grid container spacing={4}>
          {/*left column */}
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
                marginTop: '10px'
              }}
            >
              {/* Content for middle column */}

              <EventsCard />
            </Paper>
          </Grid>



          {/* Right column */}
          <Grid item xs={16} md={3}>

                  <Acceptrequests/>
                  <Joinrequests/>
           
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Home;
