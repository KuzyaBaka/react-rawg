import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionGames, actionType } from "../../store/actions/gameAction";
import GameCard from "../../components/Card/GameCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function Home() {
  const { loading, games } = useSelector((state) => state.games);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGames.getGames());
  }, []);

  console.log(games);
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 3, md: 3 }}>
        {!loading ? (
          games.map((i) => {
            return (
              <Grid
                item
                xs={3}
              >
                <GameCard name={i.name} img={i.background_image} />
              </Grid>
            );
          })
        ) : (
          <p>loading</p>
        )}
      </Grid>
    </Box>
  );
}

export default Home;
