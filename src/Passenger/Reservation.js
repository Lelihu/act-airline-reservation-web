import React, {useState} from 'react';
import {Button} from '@material-ui/core';
import useAxios from 'axios-hooks';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, CircularProgress } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Globals from './Globals';

const useStyles = makeStyles(() => ({
    textField: {
        margin: 2,
    },
    button: {
        margin: 0,
    }
}));


const Reservation = () => {
    const classes = useStyles();
    let history = useHistory();


    const [{ data, loading, error }] = useAxios(`https://act-airline-reservation.herokuapp.com/api/schedule/list`);

    if (loading === true) return <p><CircularProgress /></p>
    if (error) return ("SOMETHING WRONG IS HAPPENINING!")
    return (
        <>
            <strong> FLIGHT SCHEDULE </strong><br/><hr/>
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
                        return (

                            <TableRow key={row.id} >

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
                                        onClick={() =>
                                            [Globals.y=row.id,
                                            history.push('/reserve')
                                        ]}>
                                        Buy Ticket
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button
                                        className={classes.button}
                                        variant={"contained"}
                                        color={"Primary"}
                                        onClick={() => history.push('/gmap')}>
                                        Route Map
                                    </Button>
                                    </TableCell>
                                 </TableRow>

                        );
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
                onClick={() => history.push('/search')}>
                SEARCH FLIGHT
            </Button>
            <nbsp>{" "}</nbsp>

            <Button
                className={classes.button}
                variant={"contained"}
                color={"Primary"}
                onClick={() => history.push('/cancel')}>
                CANCEL FLIGHT
            </Button>
            <nbsp>{" "}</nbsp>

            <Button
                className={classes.button}
                variant={"contained"}
                color={"Primary"}
                onClick={() => history.push('/')}>
                CANCEL
            </Button>
            <nbsp>{" "}</nbsp>
            <Button
                className={classes.button}
                variant={"contained"}
                color={"Primary"}
                onClick={() => history.push('/')}>
                SIGNOUT
            </Button>
            <hr/>
        </>

    )
}

export default Reservation;