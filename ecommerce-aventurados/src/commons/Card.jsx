import * as React from "react";
import {useState} from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Grid } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Card2 = ({data}) => {


  return (
    <Card sx={{ height:'25rem', width: '18rem', boxShadow: '0.1em 0.1em 0.8em grey', borderRadius: '10px'}}>
      <CardMedia
        component="img"
        height="140"
        image={data.image}
        alt="experiencia"
      />
      <CardContent>
        <Stack spacing={1}>
        <Rating name="half-rating-read" defaultValue={data.rating} precision={0.5} readOnly />
        </Stack>
        <Typography sx={{height:'2em'}} gutterBottom variant="h5" component="div">
          {data.name}
        </Typography>
        <Typography sx={{height:'5em'}} variant="body2" color="text.secondary">
          {data.description}
        </Typography>
        <Grid container sx={{ alignItems: "center" }}>
          <Typography
            sx={{ flexGrow: 1 }}
            gutterBottom
            variant="h6"
            component="div"
          >
            {data.price}
          </Typography>
          <FavoriteBorderIcon />
        </Grid>
        <Grid container sx={{justifyContent: 'center'}}>
          <Button sx= {{bgcolor: '#DBF227', color:'black', borderRadius: '20px'}} endIcon={<ShoppingCartIcon sx= {{color:'black'}} />} variant="contained">Comprar</Button>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Card2;