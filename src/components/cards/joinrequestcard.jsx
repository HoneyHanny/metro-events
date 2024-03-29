import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { red, blueGrey } from '@mui/material/colors';

const joinrequestscard = ({ image, heading, subheading, description }) => {
    return (
        <Card
            sx={{
                maxWidth: 1000,
                minHeight: 130,
                maxHeight: 500,
                borderRadius: 8,
                marginTop: 2,
                elevation: 'none',
                backgroundColor: '#F0F0F0',

                '@media (max-width: 960px)': {
                    maxWidth: 500,
                    flexDirection: 'column',
                },
            }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: '15px',
                    }}
                >
                    <Avatar
                        sx={{
                            bgcolor: red[500],
                            width: '50px',
                            height: '50px',
                            borderRadius: '30px',
                        }}
                        aria-label='recipe'
                    ></Avatar>
                </div>

                <CardContent sx={{ flex: '1' }}>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        {/* name  */}
                        <Typography
                            gutterBottom
                            variant='h10'
                            marginTop='10px'
                            component='div'
                            color='#596EC6'
                            fontWeight='bold'
                        >
                            JOHN CADUNGOG
                        </Typography>

                        {/* ACCEPTED, DECLINED, PENDING diri */}
                        <Typography
                            variant='subtitle2'
                            marginTop='10px'
                            gutterBottom
                            fontWeight='bold'
                            color='#6A6A6A'
                        >
                            Accepted
                        </Typography>
                    </div>

                    {/* Wants to join {EVENTNAME} */}
                    <Typography
                        variant='subtitle2'
                        marginTop='-10px'
                        gutterBottom
                        fontWeight='bold'
                        color='#6A6A6A'
                    >
                        Wants to join {Event}
                    </Typography>

                    {/* Description */}
                    <Typography
                        variant='body2'
                        color='text.secondary'
                        minWidth='200px'
                        maxWidth='200px'
                        maxHeight='40px'
                        overflow='hidden'
                        textOverflow='ellipsis'
                    >
                        {description}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed non risus. Suspendisse lectus tortor, dignissim sit
                        amet, adipiscing nec, ultricies sed, dolor. Cras
                        elementum ultrices diam. Maecenas ligula massa, varius
                        a, semper congue, euismod non, mi. Proin porttitor, orci
                        nec nonummy molestie, enim est eleifend mi, non
                        fermentum diam nisl sit amet erat. Duis semper. Duis
                        arcu massa, scelerisque vitae, consequat in, pretium a,
                        enim.
                    </Typography>
                </CardContent>
            </div>
        </Card>
    );
};

export default joinrequestscard;
