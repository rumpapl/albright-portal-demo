import React, { useState } from "react";
import {
    CssBaseline
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import SideBar from "./navBar/sidebar";
import TopBar from "./navBar/topBar";

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
    content: {
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: drawerWidth
    }
}));

const LandingLayout = ({ children }) => {
    const classes = useStyles({ drawerWidth: drawerWidth });
    const [open, setOpen] = useState(true);

    function onClose() {
        setOpen(false);
    }
    function onOpen() {
        setOpen(!open)
    }

    return (
        <div>
            <CssBaseline />
            <TopBar
                open={open}
                onOpen={onOpen}
                drawerWidth={drawerWidth}
            />
            <SideBar
                open={open}
                onClose={onClose}
                onOpen={onOpen}
                drawerWidth={drawerWidth}
            />
            <main
                className={classNames(classes.content, {
                    [classes.contentShift]: open
                })}
            >
                {children}
            </main>
        </div>
    );
};

export default LandingLayout;
