import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Sidebar from "./Sidebar";

const Header = () => {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    navigate('/')
    handleMenuClose();
  };

  return (
    <AppBar position="static" sx={{ background: "  #9c27b0" }}>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit">
          <Sidebar />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
MN ENGINEERING SOLUTIONS TASK        </Typography>

        <IconButton
          size="large"
          edge="end"
          color="inherit"
          onClick={handleMenuClick}
        >
          <AccountCircleIcon />
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
