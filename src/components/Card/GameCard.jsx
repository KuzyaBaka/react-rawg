import React from "react";
import { Card, CardContent, CardMedia } from "@mui/material";
import makeStyles from "@mui/styled-engine";
import Typography from "@mui/material/Typography";

function GameCard({ name, img }) {
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default GameCard;
