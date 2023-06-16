import React from "react";
import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

function GameCard({ name, img }) {
  return (
    <Grid item xs={12} md={6} lg={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: '200px' }} image={img} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default GameCard;
