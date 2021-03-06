import React, {useState} from 'react';
import {Button} from '@material-ui/core';
import useAxios from 'axios-hooks';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, CircularProgress } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    textField: {
        margin: 2,
    },
    button: {
        margin: 0,
    }
}));

const FlightDetails = () => {
    const classes = useStyles();
    let history = useHistory();
    const [{ data, loading, error }] = useAxios(`https://act-airline-reservation.herokuapp.com/api/schedule/list`);
    if (loading === true) return <p><CircularProgress /></p>
    if (error) return ("SOMETHING WRONG IS HAPPENINING!")
    return (
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
                        <TableCell>Duration</TableCell>
                        <TableCell>Flight_Name</TableCell>
                        <TableCell>Origin</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Class</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Route Map</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => {
                        return (
                            <TableRow key={row.id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.airline}</TableCell>
                                <TableCell>{row.arrivalTime}</TableCell>
                                <TableCell>{row.availableSeats}</TableCell>
                                <TableCell>{row.departureTime}</TableCell>
                                <TableCell>{row.destination}</TableCell>
                                <TableCell>{row.duration}</TableCell>
                                <TableCell>{row.flightName}</TableCell>
                                <TableCell>{row.origin}</TableCell>
                                <TableCell>{row.price}</TableCell>
                                <TableCell>{row.seatClass}</TableCell>
                                <TableCell>{row.status}</TableCell>
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
    )
}

export default FlightDetails;