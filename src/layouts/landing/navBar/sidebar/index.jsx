import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

// internal imports
import SIDE_BAR_ITEMS from '../../../../config/side-bar-items';
import { DrawerHeader } from './elements';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    justifyContent: 'flex-end',
    // "&:hover": {
    //   backgroundColor: "inherit !important;"
    // }
  },

  drawer: {
    width: ({ drawerWidth }) => drawerWidth
  }
}));

const SideBar = (props) => {
  const { open, onClose, onOpen, drawerWidth } = props;
  const classes = useStyles({ drawerWidth: drawerWidth });

  return (
    <Drawer open={open} onClose={onClose} variant="persistent">
      <DrawerHeader>
        <div />
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
      </DrawerHeader>
      <List disablePadding className={classes.drawer}>
        {
          SIDE_BAR_ITEMS.map((item) => {
            const { id, title, path, icon } = item;
            return (
              <Fragment key={id}>
                <ListItem
                  button
                  to={path}
                  component={Link}
                >
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={title} />
                </ListItem>
              </Fragment>
            );

          })
        }

      </List>
    </Drawer>
  )
}

SideBar.propTypes = {}
SideBar.defaultProps = {};
export default SideBar;
