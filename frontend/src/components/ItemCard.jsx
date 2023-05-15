import React, {useCallback } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate} from 'react-router-dom';

export default function MultiActionAreaCard({ item }) {
  const navigate = useNavigate();

  // USD formatting options
    let formatting_options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
 }

 // covert price to readable USD
  item.price = (item.variants.filter((variant)=>{
    if(variant.is_default)return variant
  })[0].price / 100).toLocaleString("en-US",
      formatting_options);

      const clickHandler = useCallback(() => {
        navigate(`/${item.id}`)
     }, [item]);

  return (
    <Card sx={{ maxWidth: '345px', height: '485px' }}>
      <CardActionArea onClick={clickHandler}>
        <CardMedia
          component="img"
          image= {item.images[0].src}

          alt={item.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {item.title}
          </Typography>
          <Typography variant="h5" color="secondary">
          {item.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
  );
}