import * as React from "react";
import "../styling/Headerbutton.css";

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";

export default function Header(props) {
  return (
    <AppBar position="static" sx={{ bgcolor: "#00000088" }}>
      <Toolbar>
        {/*Inside the IconButton, we
		can render various icons*/}
        {
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => props.activePageHandler("Main")}
          >
            <HomeIcon />
          </IconButton>
        }
        {/* The Typography component applies
		default font weights and sizes */}

        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        ></Typography>
        <button
          className="headerbutton"
          onClick={() => props.activePageHandler("Ruter")}
        >
          Ruter
        </button>
        <button className="headerbutton">CV</button>
      </Toolbar>
    </AppBar>
  );
}
