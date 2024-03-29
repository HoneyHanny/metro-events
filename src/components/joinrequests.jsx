import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Joinrequestscard from './cards/joinrequestcard';

// Left column
const joinrequests = () => {
  return (

    <Paper
    elevation={4}
    sx={{
      borderRadius: '40px',
      padding: '20px',
      height: '50vh',
      marginTop: '20px',
    }}
  >

        <h3>Accept Request </h3>
       <Joinrequestscard/>
      </Paper>
  
  );
};

export default joinrequests;
