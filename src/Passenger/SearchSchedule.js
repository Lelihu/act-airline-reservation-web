import useAxios from 'axios-hooks';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, CircularProgress } from '@material-ui/core';

import React,{useState, useEffect,Component} from 'react';
import {TextField, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {useHistory,Redirect } from 'react-router-dom';
import axios from 'axios';
import Globals2 from './Globals2';
import Globals from './Globals';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(() => ({
    textField: {
        margin: 7
    },
    button: {
        margin: 7
    }
}));

const SearchSchedule = () => {
    const classes = useStyles();
    let history = useHistory();
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState();


    const [isSubmitClicked, setIsSubmitClicked] = useState(false);

    const [{ data, loading, error }] = useAxios(`https://act-airline-reservation.herokuapp.com/api/schedule/list`);
    var flag=false;

    useEffect(() => {

        if (isSubmitClicked === true) {
                {
                    data.map((row) => {
                        if ((row.origin === origin) & (row.destination === destination)) {
                             Globals2.x=origin;
                             Globals2.y=destination;
                            flag=true;
                            history.push('/search2');
                            setIsSubmitClicked(false);
                        } else {

                        }

                    })
                }
            if (flag===false)
            {
                alert("YOUR SEARCH RESULT IS NEGATIVE, FLIGHT IS NOT FOUND OR INCORRECT PARAMETERS");
                setIsSubmitClicked(false);
            }

        }

    }, [origin, destination,isSubmitClicked]);

    return (
        <form>
            <TableContainer>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell> <strong>SEARCH FLIGHT SCHEDULE</strong>  </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <TextField
                                    type={"text"}
                                    className={classes.textField}
                                    label={"Origin City"}
                                    placeholder={"Origin City"}
                                    variant={"outlined"}
                                    fullWidth
                                    value={origin}
                                    onChange={(event) => setOrigin(event.target.value)}
                                /> <br/>

                                <TextField
                                    type={"text"}
                                    className={classes.textField}
                                    label={"Destination City"}
                                    placeholder={"Destination City"}
                                    variant={"outlined"}
                                    fullWidth
                                    value={destination}
                                    onChange={(event) =>setDestination(event.target.value)}
                                /> <br/>

                                <Button
                                    className={classes.button}
                                    variant={"contained"}
                                    color={"Primary"}
                                    onClick={() => setIsSubmitClicked(true)}
                                >
                                    SEARCH FLIGHT
                                </Button>

                                <Button
                                    className={classes.button}
                                    variant={"contained"}
                                    color={"Primary"}
                                    onClick={() => history.push('/create')}>
                                    RETURN BACK
                                </Button>
                                <br/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </form>
    );

}

export default SearchSchedule;
