import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

import './ButtonCard.css';

const ButtonCard = (props) => {
  return (


    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Link to={props.link} className='link'>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>         
        </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
}

export default ButtonCard;
