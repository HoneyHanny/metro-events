import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const CommentCard = ({ avatarSrc, name, comment }) => {
  return (
    <Card sx={{ borderRadius: '16px', width:"350px", backgroundColor: '#F0F0F0', marginBottom: '16px' }}>
      <CardContent>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <Avatar src={avatarSrc} alt={name} />
          <Typography variant="body1" sx={{ marginLeft: '8px' }}>{name}</Typography>
        </div>
        <Typography variant="body2">{comment}</Typography>
      </CardContent>
    </Card>
  );
};

export default CommentCard;
