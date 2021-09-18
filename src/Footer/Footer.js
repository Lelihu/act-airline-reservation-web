import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FlightIcon from '@material-ui/icons/Flight';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <FlightIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <h6>2021 - ACT AIRLINE RESERVATION SYSTEM</h6>
                    </Typography>
                    <Button color="inherit">CONTACTS</Button>
                    <Button color="inherit">COMMENT-US</Button>
                    <Button color="inherit">RULES</Button>
                    <Button color="inherit">ABOUT-US</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Footer;
