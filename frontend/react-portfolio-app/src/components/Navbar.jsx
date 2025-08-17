import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBAR position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Button color="inherit" component={Link} to="/">
            Portfolio{" "}
          </Button>
        </Typography>

        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
        <Button color="inherit" component={Link} to="/projects">
          Projects
        </Button>
      </Toolbar>
    </AppBAR>
  );
};

export default Navbar;
