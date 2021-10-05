import React, {useState, useEffect} from 'react';
import {TextField, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Globals from './Globals';

const min=1;
const max=200;
const rand=min+Math.random()*(max-min);

const useStyles = makeStyles(() => ({
    textField: {
        margin: 7,
        width:320,
        height:50
    },
    button: {
        margin: 7,
        width: 150
    }
}));

const CreateReservation = () => {

    const classes = useStyles();
    let history = useHistory();
    const [customerId, setCustomerId] = useState(Globals.x);
    const [scheduleId, setScheduleId] = useState(Globals.y);
    const [seatNo, setSeatNo] = useState(rand);
    const [isSubmitClicked, setIsSubmitClicked] = useState(false);
  
    useEffect(() => {

        if (isSubmitClicked === true) {
            if (true) {
                axios.post("https://act-airline-reservation.herokuapp.com/api/reservation/create",
                    //axios.post("https://act-airline-reservation.herokuapp.com/api/passenger/create",

                    {
                        "customerId": customerId,
                        "scheduleId": scheduleId,
                        "seatNo": seatNo,
                    }
                )
                    .then((response) => {
                            console.log(response.data);
                        alert(

                               "YOU HAVE RESERVED A FLIGHT SUCCESSFULLY:  WE THANK YOU  FOR USING OUR AIRLINE : YOUR RESERVATION ID IS - " + response.data.id + " - PLEASE KEEP YOUR RESERVATION ID SAFE"

                        );
                        setIsSubmitClicked(false);
                        history.push('/create');

                                }
                    )
                    .catch((error) => {
                        console.log(error);
                        alert("SOMETHING WRONG IS HAPPENING, PLEASE LOGOUT, LOGIN AND TRY AGAIN!");
                        history.push('/');
                        setIsSubmitClicked(false);
                    })
                setIsSubmitClicked(false);
            } else {
                alert("SOMETHING WRONG IS HAPPENING, PLEASE LOGIN AND TRY AGAIN!");
                history.push('/');
                setIsSubmitClicked(false);

            }
        }

    }, [customerId, scheduleId, seatNo, isSubmitClicked]);

    return (
        <Box>
            <strong> FLIGHT BOOKING </strong><br/><hr/>
            <TextField
                type={"text"}
               // autoFocus={true}
                className={classes.textField}
                label={"Customer Id"}
                placeholder={"Customer Id"}
                variant={"outlined"}
                value={Globals.x}
                onChange={(event) => setCustomerId(event.target.value)}/><br/>
            <TextField
                type={"text"}
                className={classes.textField}
                label={"Schedule Id"}
                placeholder={"Schedule Id"}
                variant={"outlined"}
                value={Globals.y}
                onChange={(event) => setScheduleId(event.target.value)}/> <br/>
            <TextField
                type={"text"}
                className={classes.textField}
                label={"Seat No"}
                placeholder={"Seat No"}
                variant={"outlined"}
                value={Math.round(rand)}
                onChange={(event) => setSeatNo(event.target.value)}/><br/>
             <Button
                className={classes.button}
                variant={"contained"}
                color={"Primary"}
                onClick={() => setIsSubmitClicked(true)}>
                BUY TICKET
            </Button>
            <Button
                className={classes.button}
                variant={"contained"}
                color={"Primary"}
                onClick={() => history.push('/create')}>
                RETURN BACK
            </Button>
        </Box>
    );
}
export default CreateReservation;