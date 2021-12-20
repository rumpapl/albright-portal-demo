import React from 'react'
import PropTypes from 'prop-types'

import {
    Button,
    AppBar,
    Toolbar,
    IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
    appBar: {
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShift: {
        width: ({ drawerWidth }) =>`calc(100% - ${drawerWidth}px)`,
        marginLeft: ({drawerWidth})=>drawerWidth,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    
}));

const TopBar = (props) => {
    const{ open,  onOpen, drawerWidth} = props;
    const classes = useStyles({ drawerWidth: drawerWidth });
    
    return (
        <AppBar
        position="static"
        color="paper"
        className={classNames(classes.appBar, { [classes.appBarShift]: open })}
    >
        <Toolbar>
            {!open && (
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    onClick={onOpen}
                >
                    <MenuIcon />
                </IconButton>
            )}
            <Button color="inherit">Login</Button>
        </Toolbar>
    </AppBar>
    )
}
 TopBar.propTypes = {

}

export default TopBar
