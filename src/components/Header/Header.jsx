import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Input from "../Input/Input";
import {
  AppBar,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from "@mui/material";
import theme from '../theme/theme'
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch } from "react-redux";
import { actionGames } from "../../store/actions/gameAction";

function Header() {
  const dispatch = useDispatch()

  const [search, setSearch] = useState(null)

  const handleOnSearchChange = (e) => {
    if (search) {
      dispatch(actionGames.getGamesSearch(search))
    }
    setSearch(e.target.value)
  }

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="static"
        sx={{
          bgcolor: "background.paper",
          color: "text",
          mb: "20px",
        }}
      >
        <Toolbar>
          <Link to={'/'}>
            <Typography variant="h5" component="span">
              RAWG
            </Typography>
          </Link>
          <Input onSearchChange={handleOnSearchChange} />
          <IconButton>
            <AccountCircleIcon color="item" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
