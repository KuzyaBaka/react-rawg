import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionGames } from "../../store/actions/gameAction";
import GameCard from "../../components/Card/GameCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Container, Pagination } from "@mui/material";

function Home() {
  const { loading, games } = useSelector((state) => state.games);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGames.getGames(page));
  }, [page]);

  const handlePage = (e) => {
    setPage(e.target.textContent);
  };

  return (
    <Container>
      <Grid container spacing={2} justifyContent="right">
        {!loading ? (
          games.map((i) => {
            return <GameCard key={i.id} name={i.name} img={i.background_image} />;
          })
        ) : (
          <p>loading</p>
        )}
      </Grid>
      <Pagination
        onChange={(page) => {
          handlePage(page);
        }}
        count={1000}
        variant="outlined"
        shape="rounded"
        size="large"
      />
    </Container>
  );
}

export default Home;
