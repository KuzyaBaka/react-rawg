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
    <main className="classes.main">
      <Grid container spacing={2} justifyContent="right">
        {!loading ? (
          games.map((i) => {
            return (
              <Grid item md={3} sm={6} xs={12} sx={{border : '1px solid red'}}>
                <GameCard name={i.name} img={i.background_image} />
              </Grid>
            );
          })
        ) : (
          <p>loading</p>
        )}
      </Grid>
    </main>
  );
}

export default Home;
