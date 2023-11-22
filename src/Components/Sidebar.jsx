import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <IconButton color="inherit" onClick={toggleSidebar}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>

      <Drawer anchor="left" open={isOpen} onClose={toggleSidebar}>
        <List>
          <CloseIcon
            style={{ float: "right", cursor: "pointer" }}
            onClick={toggleSidebar}
          />

          <ListItem>
            <ListItemIcon>
              <AccountCircleIcon fontSize="large" />
              {/* <Avatar alt="User" src="/path/to/dummy-profile-picture.jpg" /> */}
            </ListItemIcon>
            <ListItemText primary="Ranjith kumar" secondary="ranjith@gmail.com" />
          </ListItem>
          <ListItem>
            <ListItemText primary="WEATHER" secondary="Rainy"></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText primary="Contact"></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText primary="Address"></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText primary="Phone No"></ListItemText>
          </ListItem>
          {/* Add other sidebar items as needed */}
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
