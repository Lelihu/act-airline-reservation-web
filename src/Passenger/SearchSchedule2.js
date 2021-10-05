import React, {useState} from 'react';
import {Button} from '@material-ui/core';
import useAxios from 'axios-hooks';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, CircularProgress } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Globals2 from './Globals2';

const useStyles = makeStyles(() => ({
    textField: {
        margin: 2,
    },
    button: {
        margin: 0,
    }
}));


const SearchSchedule2 = () => {
    const classes = useStyles();
    let history = useHistory();
    const [{ data, loading, error }] = useAxios(`https://act-airline-reservation.herokuapp.com/api/schedule/list`);
    if (loading === true) return <p><CircularProgress /></p>
    if (error) return ("SOMETHING WRONG IS HAPPENINING!")
    return (
        <>
            <h5><strong>FLIGHT SEARCH RESULTS</strong></h5>
            <hr/>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Airline</TableCell>
                            <TableCell>Arrival Time</TableCell>
                            <TableCell>Seats</TableCell>
                            <TableCell>Departure Time</TableCell>
                            <TableCell>Destination</TableCell>
                            <TableCell>Flight_Name</TableCell>
                            <TableCell>Origin</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Class</TableCell>
                            <TableCell>Book Ticket</TableCell>
                            <TableCell>Route Map</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => {
                            if ((row.origin === Globals2.x) & (row.destination === Globals2.y)) {
                            return (

                                <TableRow key={row.id}>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.airline}</TableCell>
                                    <TableCell>{row.arrivalTime}</TableCell>
                                    <TableCell>{row.availableSeats}</TableCell>
                                    <TableCell>{row.departureTime}</TableCell>
                                    <TableCell>{row.destination}</TableCell>
                                    <TableCell>{row.flightName}</TableCell>
                                    <TableCell>{row.origin}</TableCell>
                                    <TableCell>{row.price}</TableCell>
                                    <TableCell>{row.seatClass}</TableCell>
                                    <TableCell>
                                        <Button
                                            className={classes.button}
                                            variant={"contained"}
                                            color={"Primary"}
                                            onClick={() => history.push('/reserve')}>
                                            Buy Ticket
                                        </Button>
                                    </TableCell>
                                    <TableCell>
                                        <Button
                                            className={classes.button}
                                            variant={"contained"}
                                            color={"Primary"}
                                            onClick={() => history.push('/')}>
                                            Route Map
                                        </Button>
                                    </TableCell>
                                </TableRow>

                            );
                            }
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <br/>
            <hr/>
            <Button
                className={classes.button}
                variant={"contained"}
                color={"Primary"}
                onClick={() => history.push('/create')}>
                BACK
            </Button>
            <nbsp>{" "}</nbsp>
            <Button
                className={classes.button}
                variant={"contained"}
                color={"Primary"}
                onClick={() => history.push('/')}>
                CANCEL
            </Button>
        </>

    )
}

export default SearchSchedule2;