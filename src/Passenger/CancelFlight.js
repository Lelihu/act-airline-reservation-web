import React, {useState, useEffect} from 'react';
import {TextField, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import useAxios from 'axios-hooks';
const useStyles = makeStyles(() => ({
    textField: {
        margin: 7,
        width:320,
        height:50
    },
    button: {
        margin: 7,
        width: 100
    }
}));

const CancelFlight = () => {
    const classes = useStyles();
    let history = useHistory();
    const [reservationId, setReservationId] = useState('');
    const [isSubmitClicked, setIsSubmitClicked] = useState(false);
    const [{ data }] = useAxios(`https://act-airline-reservation.herokuapp.com/api/reservation/list`);
    var flag=false;

    useEffect(() => {
        if (isSubmitClicked === true) {
            if (true) {
                {
                    data.map((row) => {
                        if (String(row.id) === (reservationId)) {
                            alert("RESERVATION WITH THE SELECTED FLIGHT IS CANCELED. YOU ARE REFENDED WITH THE AMOUNT DEDUCTED WITH 15% OF THE PRICE FOR THE FLIGHT'S PAYMENT ");
                            flag=true;
                            setIsSubmitClicked(false);
                            history.push('/create');

                        } else {

                        }

                    })
                }

                setIsSubmitClicked(false);
            }

            if (flag===false)
            {
                alert("SORRY, NO SUCH FLIGHT IS FOUND");
                setIsSubmitClicked(false);
                history.push('/create');
            }

        }

    }, [reservationId,isSubmitClicked]);

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '35ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <strong> CANCEL FLIGHT </strong><br/><hr/>

            <TextField
                type={"text"}
                className={classes.textField}
                label={"Reservation Id"}
                placeholder={"Reservation Id"}
                variant={"outlined"}
                value={reservationId}
                onChange={(event) => setReservationId(event.target.value)}/><br/>

<br/><br/>
            <Button
                className={classes.button}
                variant={"contained"}
                color={"Primary"}
                onClick={() => setIsSubmitClicked(true)}>
                CANCEL FLIGHT
            </Button>

        </Box>
    );
}
export default CancelFlight;
