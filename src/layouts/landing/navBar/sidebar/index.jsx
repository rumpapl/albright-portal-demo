import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    Typography,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
  } from "@material-ui/core";
  import { makeStyles } from "@material-ui/core/styles";
  import MenuIcon from "@material-ui/icons/Menu";

  const useStyles = makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      marginRight: "auto"
    },
    drawer: {
      width: ({drawerWidth})=>drawerWidth
    }
  }));

const SideBar = (props) => {
    const{ open, onClose, onOpen, drawerWidth} = props;
    const classes = useStyles({ drawerWidth: drawerWidth });

    return (
        <Drawer open={open} onClose={onClose} variant="persistent">
        
        {open && (
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            onClick={onOpen}
          >
            <MenuIcon />
          </IconButton>
        )}
        <List disablePadding className={classes.drawer}>
          <ListItem button>
            <ListItemText primary="First Item" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Second Item" />
          </ListItem>
        </List>
      </Drawer>
    )
}

SideBar.propTypes = {}
SideBar.defaultProps = {};
export default SideBar;
