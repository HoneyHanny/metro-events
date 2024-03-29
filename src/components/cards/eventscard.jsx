import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import Button from '@mui/material/Button';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import Basketball from '../../assets/images/basketball.jpg'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const StyledCard = styled(Card)({
  backgroundColor: '#F0F0F0',
  borderRadius: 16,
  marginBottom: 16,
});

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <StyledCard
      sx={{ maxWidth: 2000, elevation: 0 }}
      style={{ boxShadow: 'none' }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'></Avatar>
        }
        action={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '1px' }}>10</span>{' '}
            {/* Number outside the IconButton */}
            <IconButton
              sx={{
                height: '40px',
                width: '40px',
                marginRight: '5px',
                color: '#6A6A6A',
              }}
            >
              <PeopleAltOutlinedIcon />
            </IconButton>
          </div>
        }
        title='Shrimp and Chorizo Paella'
        subheader='September 14, 2016'
      />
      <CardMedia
        component='img'
        height='194'
        image={Basketball}
        alt='Basketball Vent'
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton sx={{ height: '40px', width: '40px' }}>
          <FavoriteIcon />
        </IconButton>
        <IconButton sx={{ height: '40px', width: '40px' }}>
          <ModeCommentOutlinedIcon />
        </IconButton>

        <Button
          variant='contained'
          color='primary'
          sx={{
            backgroundColor: '#596EC6',
            borderRadius: '35px',
            padding: '6px',
            minWidth: '20px',
            minHeight: '30px',
            marginRight: '5px',
            elevation: '0',
            marginLeft: 'auto', // This line pushes the button to the right
            '&:hover': {
              backgroundColor: '#455990', // Optional: Change hover color
            },
          }}
        >
          Join
        </Button>
      </CardActions>
    </StyledCard>
  );
}
