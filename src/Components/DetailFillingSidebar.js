import React from "react";
import { useEffect, useState } from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import "../Styles/DetailsFillingSideBar.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import StarsRoundedIcon from "@mui/icons-material/StarsRounded";
import WorkHistoryRoundedIcon from "@mui/icons-material/WorkHistoryRounded";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box } from "@mui/system";

const ITEM_HEIGHT = 50;

// The primary functional component that accepts a props object as an argument. It leverages React's useState and useEffect hooks.
const DetailFillingSidebar = (props) => {
  const getWindowSize = () => { //This function returns the browser windows current inner width and height.
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  };

  // this line declares the state variable anchorEl and the updater method setAnchorEl. The state is initialised to null. This variable stores the anchor element reference for the dropdown menu on smaller screens.
  const [anchorEl, setAnchorEl] = React.useState(null);
  //this line declares the state variable windowSize and associated updater func, setWindowSize. The state is initialised using the value returned by the getWindowSize method. This state stores the current window size. 
  const [windowSize, setWindowSize] = useState(getWindowSize());
  //This line declares a variable the dropdown menu is open or not based on the anchorEl value's truthiness.
  const open = Boolean(anchorEl);

  //An event handler func that changes the anchorEl state to the event's current target, so displaying the dropdown menu.
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  //An event handler func that toggles the anchorEl state to null, essentially shutting the dropdown menu.
  const handleClose = () => {
    setAnchorEl(null);
  };

  //A react hook that adds an event listener to the window-resize event. When the window size changes,the handleWindowResize method is invoked, which updates the windowSize property.
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div>
      {windowSize.innerWidth > 850 ? (
        <Box
          sx={{
            width: "100%",
            maxWidth: 360,
            boxShadow: "0px 0px 4px 0px rgb(225, 225, 225)",
            height: "fit-content",
          }}>
          <List disablePadding>
            <ListItem disablePadding>
              <ListItemButton
                component="a"
                sx={
                  props.tab === 0
                    ? { borderLeft: "3px solid rgb(0, 125, 265)" }
                    : null
                }>
                <AccountCircleOutlinedIcon
                  color={props.tab === 0 ? "info" : "disabled"}
                />
                <ListItemText
                  className="IcoSpace"
                  primary="Personal Info"
                  sx={
                    props.tab === 0
                      ? { color: "rgb(0,  125, 265)", paddingLeft: "8px" }
                      : null
                  }
                />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton
                component="a"
                sx={
                  props.tab === 1
                    ? { borderLeft: "3px solid rgb(0,  125, 265)" }
                    : null
                }>
                <WorkHistoryRoundedIcon
                  color={props.tab === 1 ? "info" : "disabled"}
                />
                <ListItemText
                  className="IcoSpace"
                  primary="Work Experience"
                  sx={
                    props.tab === 1
                      ? { color: "rgb(0, 125, 265)", paddingLeft: "8px" }
                      : null
                  }
                />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton
                component="a"
                sx={
                  props.tab === 2
                    ? { borderLeft: "3px solid rgb(0,  125, 265)" }
                    : null
                }>
                <SchoolRoundedIcon
                  color={props.tab === 2 ? "info" : "disabled"}
                />
                <ListItemText
                  className="IcoSpace"
                  primary="Education"
                  sx={
                    props.tab === 2
                      ? { color: "rgb(0, 125, 265)", paddingLeft: "8px" }
                      : null
                  }
                />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton
                component="a"
                sx={
                  props.tab === 3
                    ? { borderLeft: "3px solid rgb(0,  125, 265)" }
                    : null
                }>
                <StarsRoundedIcon
                  color={props.tab === 3 ? "info" : "disabled"}
                />
                <ListItemText
                  className="IcoSpace"
                  primary="Key Skills"
                  sx={
                    props.tab === 3
                      ? { color: "rgb(0, 125, 265)", paddingLeft: "8px" }
                      : null
                  }
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      ) : (
        <div>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: "20ch",
              },
            }}>
            <MenuItem
              sx={props.tab === 0 ? { color: "rgb(0, 125, 265)" } : null}
              onClick={() => {
                handleClose();
              }}>
              <AccountCircleOutlinedIcon
                color={props.tab === 0 ? "info" : "disabled"}
              />
              <ListItemText
                className="IcoSpace"
                primary="Personal Info"
                sx={
                  props.tab === 0
                    ? { color: "rgb(0, 125, 265)", paddingLeft: "8px" }
                    : null
                }
              />
            </MenuItem>
            <Divider />
            <MenuItem
              sx={props.tab === 1 ? { color: "rgb(0,  125, 265)" } : null}
              onClick={() => {
                handleClose();
              }}>
              <WorkHistoryRoundedIcon
                color={props.tab === 1 ? "info" : "disabled"}
              />
              <ListItemText
                className="IcoSpace"
                primary="Work Experience"
                sx={
                  props.tab === 1
                    ? { color: "rgb(0, 125, 265)", paddingLeft: "8px" }
                    : null
                }
              />
            </MenuItem>
            <Divider />
            <MenuItem
              sx={props.tab === 2 ? { color: "rgb(0, 125, 265)" } : null}
              onClick={() => {
                handleClose();
              }}>
              <SchoolRoundedIcon
                color={props.tab === 2 ? "info" : "disabled"}
              />
              <ListItemText
                className="IcoSpace"
                primary="Education"
                sx={
                  props.tab === 2
                    ? { color: "rgb(0, 125, 265)", paddingLeft: "8px" }
                    : null
                }
              />
            </MenuItem>
            <Divider />
            <MenuItem
              sx={props.tab === 3 ? { color: "rgb(0, 125, 265)" } : null}
              onClick={() => {
                handleClose();
              }}>
              <StarsRoundedIcon color={props.tab === 3 ? "info" : "disabled"} />
              <ListItemText
                className="IcoSpace"
                primary="Key Skills"
                sx={
                  props.tab === 3
                    ? { color: "rgb(0, 125, 265)", paddingLeft: "8px" }
                    : null
                }
              />
            </MenuItem>
          </Menu>
        </div>
      )}
    </div>
  );
};

export default DetailFillingSidebar;
