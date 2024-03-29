import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';

const NotificationCard = ({ image, heading, subheading, description }) => {
  return (
    <Card sx={{
      maxWidth: 1000,
      maxHeight: 150,
      borderRadius: 8,
      marginTop: 2,
      backgroundColor: '#FFFFFF',
      boxShadow: 4,
      '@media (max-width: 960px)': {
        maxWidth: 500,
        flexDirection: 'column',
      }
    }}>
      <div style={{ display: 'flex', direction:'row' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '15px' }}>
          <Avatar sx={{ bgcolor: red[500], width: '80px', height: '80px',  borderRadius: '30px'}} aria-label='recipe'></Avatar>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  }}>

        <CardContent sx={{ flex: '1' }}>
          <Typography gutterBottom variant="h10" component="div" color='#596EC6' fontWeight='bold'>
            {/* {heading} */}
            JOHN CADUNGOG
          </Typography>

          <Typography variant="subtitle2"  color="text.secondary" gutterBottom marginTop='-10px' fontWeight='bold' color='#6A6A6A' >
            Wants to join {Event}
          </Typography>
          <Typography variant="body2" color="text.secondary" minWidth='200px' maxWidth='200px' maxHeight='40px' overflow='hidden' textOverflow='ellipsis'>
            {description}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.

            
          </Typography>

        </CardContent>
        </div>
      </div>
    </Card>
  );
};

export default NotificationCard;

