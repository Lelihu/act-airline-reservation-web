import React from 'react';
import { API_URL } from '../Constants';
import useAxios from 'axios-hooks';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, CircularProgress } from '@material-ui/core';

const FlightDetails = () => {

    const [{ data, loading, error }] = useAxios(`${API_URL}/api/schedule/list`);
    if (loading === true) return <p><CircularProgress /></p>
    if (error) return ("SOMETHING WRONG IS HAPPENINING!")
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>id</TableCell>
                        <TableCell>airline</TableCell>
                        <TableCell>arrival_time</TableCell>
                        <TableCell>available_seats</TableCell>
                        <TableCell>departure_time</TableCell>
                        <TableCell>destination</TableCell>
                        <TableCell>destination_lat</TableCell>
                        <TableCell>destination_long</TableCell>
                        <TableCell>duration</TableCell>
                        <TableCell>flight_name</TableCell>
                        <TableCell>flight_num</TableCell>
                        <TableCell>numof_seats</TableCell>
                        <TableCell>origin</TableCell>
                        <TableCell>origin_lat</TableCell>
                        <TableCell>origin_long</TableCell>
                        <TableCell>price</TableCell>
                        <TableCell>seat_class</TableCell>
                        <TableCell>status</TableCell>
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
                                <TableCell>{row.destinationLat}</TableCell>
                                <TableCell>{row.destinationLong}</TableCell>
                                <TableCell>{row.duration}</TableCell>
                                <TableCell>{row.flightName}</TableCell>
                                <TableCell>{row.flightNum}</TableCell>
                                <TableCell>{row.numofSeats}</TableCell>
                                <TableCell>{row.origin}</TableCell>
                                <TableCell>{row.originLat}</TableCell>
                                <TableCell>{row.originLong}</TableCell>
                                <TableCell>{row.price}</TableCell>
                                <TableCell>{row.seatClass}</TableCell>
                                <TableCell>{row.status}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default FlightDetails;