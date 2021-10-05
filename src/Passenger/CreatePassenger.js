import React, {useState, useEffect} from 'react';
import {TextField, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Box from '@material-ui/core/Box';
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

const CreatePassenger = () => {

    const classes = useStyles();
    let history = useHistory();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState();
    const [password2, setPassword2] = useState();
    const [creditCardNo, setCreditCardNo] = useState();

     const [isSubmitClicked, setIsSubmitClicked] = useState(false);

    useEffect(() => {

        if (isSubmitClicked === true) {
            if (password === password2) {
                axios.post("https://act-airline-reservation.herokuapp.com/api/passenger/create",
                //axios.post("https://act-airline-reservation.herokuapp.com/api/passenger/create",

                    {
                        "firstName": firstName,
                        "address": address,
                        "lastName": lastName,
                        "phoneNumber": phoneNumber,
                        "email": email,
                        "password": password,
                         "creditCardNo": creditCardNo
                    }
                )
                    .then((response) => {
                            console.log(response.data);
                            alert("PASSENGER IS REGISTERED SUCCESSFULLY:  WE THANK YOU  " + response.data.firstName);
                            history.push('/')
                          }
                    )
                    .catch((error) => {
                        console.log(error);
                        alert("REGISTRATION ABORTED, PLEASE FILL THE REGISTRATION FORM CORRECTLY!");
                        setIsSubmitClicked(false);
                    })
                setIsSubmitClicked(false);
            } else {

            }
        }

    }, [firstName, address, lastName, phoneNumber, email, password, password2, creditCardNo, isSubmitClicked]);

    return (
               <Box>
           <strong> PASSENGER REGISTRATION </strong><br/><hr/>
                <TextField
                type={"text"}
                autoFocus={true}
                className={classes.textField}
                label={"First Name"}
                placeholder={"First Name"}
                variant={"outlined"}
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}/>
            <TextField
                type={"text"}
                className={classes.textField}
                label={"Address"}
                placeholder={"Address"}
                variant={"outlined"}
                value={address}
                onChange={(event) => setAddress(event.target.value)}/> <br/>
            <TextField
                type={"text"}
                className={classes.textField}
                label={"Last Name"}
                placeholder={"Last Name"}
                variant={"outlined"}
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}/>
            <TextField
                type={"text"}
                className={classes.textField}
                label={"Phone Number"}
                placeholder={"Phone Number"}
                variant={"outlined"}
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}/><br/>
            <TextField
                type={"text"}
                className={classes.textField}
                label={"Email"}
                placeholder={"Email"}
                variant={"outlined"}
                value={email}
                onChange={(event) => setEmail(event.target.value)}/>
            <TextField
                type={"text"}
                className={classes.textField}
                label={"Credit Card No"}
                placeholder={"Credit Card No"}
                variant={"outlined"}
                value={creditCardNo}
                onChange={(event) => setCreditCardNo(event.target.value)}/><br/>
            <TextField
                type={"password"}
                className={classes.textField}
                label={"Password"}
                placeholder={"Password"}
                variant={"outlined"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}/>
            <TextField
                type={"password"}
                className={classes.textField}
                label={"Confirm Password"}
                placeholder={"Confirm Password"}
                variant={"outlined"}
                value={password2}
                onChange={(event) =>  setPassword2(event.target.value)}/><br/>
            <Button
                className={classes.button}
                variant={"contained"}
                color={"Primary"}
                onClick={() => setIsSubmitClicked(true)}>
                REGISTER
            </Button>
            <Button
                className={classes.button}
                variant={"contained"}
                color={"Primary"}
                onClick={() => history.push('/')}>
                CANCEL
            </Button>
            </Box>
      );
}
export default CreatePassenger;
