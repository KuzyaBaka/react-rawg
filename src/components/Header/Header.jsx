import React from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import "./Header.css";
import Input from "../Input/Input";
import { AppBar, IconButton, ThemeProvider, Toolbar, Typography, createTheme } from "@mui/material";

function Header() {
  {
    /* <header>
      <div className="header-wrapper">
        <div className="header-item">
          <Link to={"/"}>
            <p className="item-link">RAWG</p>
          </Link>
        </div>
        <Input />
        <Link to={"/profile"}>
          <div className="header-item header-login">
            <div>
              <CgProfile />
            </div>
            <span>Login</span>
          </div>
        </Link>
      </div>
    </header> */
  }
  const theme = createTheme({
    palette: {
      background: {
        paper: "#292929",
      },
      text: {
        main: "#ffffff",
      },
      item: {
        main: "#ffffff"
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="static"
        sx={{
          bgcolor: "background.paper",
          color: "text.",
        }}
      >
        <Toolbar>
          <Typography>
            RAWG
          </Typography>
          <Input/>
          <IconButton>
            
          </IconButton>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
