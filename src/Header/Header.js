import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FlightIcon from '@material-ui/icons/Flight';

import { useHistory } from 'react-router-dom';

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

const Header = () => {
    const classes = useStyles();
    let history = useHistory();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <FlightIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <h4>ACT AIRLINE RESERVATION SYSTEM  </h4>
                    </Typography>
                    <Button color="inherit" onClick={() => history.push('/')}>FLIGHT-SCHEDULE</Button>
                    <Button color="inherit" onClick={() => history.push('/')}>LOGIN</Button>
                    <Button color="inherit" onClick={() => history.push('/')}>REGISTER</Button>
                    <Button color="inherit" onClick={() => history.push('/')}>ADMIN</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;
