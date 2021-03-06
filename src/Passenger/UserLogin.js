import useAxios from 'axios-hooks';
import { TableContainer, Table, TableBody, TableRow, TableCell } from '@material-ui/core';

import React, {useState, useEffect} from 'react';
import {TextField, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom';

import Globals from './Globals';


const useStyles = makeStyles(() => ({
    textField: {
        margin: 7
    },
    button: {
        margin: 7
    }
}));

const UserLogin = () => {
    const classes = useStyles();
    let history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState();


    const [isSubmitClicked, setIsSubmitClicked] = useState(false);

    const [{ data, loading, error }] = useAxios(`https://act-airline-reservation.herokuapp.com/api/passenger/list`);
    var flag=false;
    useEffect(() => {

        if (isSubmitClicked === true) {

                {
                    data.map((row) => {

                        if ((row.email === email) & (row.password === password)) {
                            Globals.x=row.id;
                            flag=true;
                            setIsSubmitClicked(false);
                            history.push('/create');

                        } else {
                        }

                    })
                }
                 if (flag===false)
                 {
                     alert("INCORRECT EMAIL OR PASSWORD");
                     setIsSubmitClicked(false);
                 }
        }

    }, [email, password,isSubmitClicked]);

    return (
        <form>
            <TableContainer>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell> <strong>PASSENGER LOGIN</strong>  </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <TextField
                                    type={"text"}
                                    className={classes.textField}
                                    label={"Enter Email"}
                                    placeholder={"Enter Email"}
                                    variant={"outlined"}
                                    fullWidth
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                /> <br/>

                                <TextField
                                    type={"password"}
                                    className={classes.textField}
                                    label={"Enter Password"}
                                    placeholder={"Enter Password"}
                                    variant={"outlined"}
                                    fullWidth
                                    value={password}
                                    onChange={(event) =>setPassword(event.target.value)}
                                /> <br/>

                                <Button
                                    className={classes.button}
                                    variant={"contained"}
                                    color={"Primary"}
                                    onClick={() => setIsSubmitClicked(true)}
                                >
                                    LOGIN
                                </Button>

                                <Button
                                    className={classes.button}
                                    variant={"contained"}
                                    color={"Primary"}
                                    onClick={() => history.push('/')}>
                                    CANCEL
                                </Button>
                                <br/>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                        </TableRow>
                        <TableRow>
                            <strong>
                                If you are not a registered customer, <br/>
                                please register first in order to login<br/>
                                to the system and make reservation.
                            </strong>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </form>
    );
}

export default UserLogin;



