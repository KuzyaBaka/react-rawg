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
    <>
        {!loading ? (
          games.map((i) => {
            return <GameCard name={i.name} img={i.background_image} />;
          })
        ) : (
          <p>loading</p>
        )}
    </>
  );
}

export default Home;
