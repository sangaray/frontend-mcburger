import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import Alert from '@mui/material/Alert';


import NavBar from '../NavBar/NavBar'
import { saveUser, eraseUser, userActive } from '../../actions/index'
import logo from '../NavBar/BurgerLogo.png'
import axios from 'axios'
import { recUser } from '../../actions/index'
import { useRadioGroup } from '@mui/material';

//dialog
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
//


function Login(props) {
    return (

        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>

    );
}

const theme = createTheme();

export default function SignInSide() {

    const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();
    //console.log(JSON.stringify(user) + 'OKAOKA');

    const activeUser = useSelector((state) => state.activeUser);

    const [buttonGoogle, setButtonGoogle] = useState(false)

    const dispatch = useDispatch();

    let stateButtonBbdd;
    (isAuthenticated) ? stateButtonBbdd = true : stateButtonBbdd = false // que quilombo con disabled....

    let stateButtonGoogle;

    // -------- LOGIN CON USUARIO Y PASSWORD A BBDD INTERNA --------------
    // Genera la cookie en base a la rpta de la ruta /user/login
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        //console.log(logUser + ' <==');
        let dat = {
            email: data.get('email'),
            password: data.get('password'),
        }
        let json = await axios.post("http://localhost:3001/user/login", dat);
        console.log(json);
        if (json.data.token !== null) {
            document.cookie = `token=${json.data.token}; max-age=${60 * 1}; path=/; samesite=strict`
            setButtonGoogle(true);
            dispatch(saveUser(json.data));
            dispatch(userActive(true));
            handleClickOpen();
            //    console.log(stateButtonGoogle + ' state button google');
        } else {
            document.cookie = `token=''; max-age=${60 * 0}; path=/; samesite=strict`;

        }
    };
    // -----------------------------------------------------------------

    // ----------------- AUTENTICACION CON GOOGLE ----------------------

    const handleGoogle = (e) => {
        e.preventDefault();
        //console.log('hiciste click');
        loginWithRedirect();
    }
    //(isAuthenticated) ? isLogin() : isLogout()
    const isLogin = () => {

        if (isAuthenticated) {
            return (
                <>
                    <Button
                        color="error"
                        fullWidth
                        variant="contained"
                        onClick={() => {
                            logout();
                        }}
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Log out Google
                    </Button>
                </>
            )
        }
    }

    const isLogout = () => {
        let a = activeUser;
        return (
            <>
                <Button
                    color="error"
                    fullWidth
                    variant="contained"
                    onClick={() => {
                        loginWithRedirect();
                    }}
                    sx={{ mt: 3, mb: 2 }}
                    disabled={a}
                >
                    Sign In with Google
                </Button>
            </>
        )
    }

    //------------------------------------------------------------

    //---------------------- LOG EN BBDD -------------------------

    const logoutBbdd = (e) => {
        e.preventDefault();
        dispatch(eraseUser());
        setButtonGoogle(false)
        dispatch(userActive(false));
    }

    const isLoginBD = () => {

        if (isAuthenticated) {
            let a = true;
            return (
                <>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        disabled={a}
                    >
                        Sign In
                    </Button>
                </>
            )
        } else if (buttonGoogle || activeUser) {
            return (
                <>
                    <Button
                        type=""
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={logoutBbdd}
                    >
                        Sign out
                    </Button>
                </>
            )
        } else {
            return (
                <>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                </>
            )
        }
    }


    /*     const autenticated = async () => {
    
            if (isAuthenticated) {
                //console.log('eeeeeeeeeeeeeeeeeeeeee');
                let dat = {
                    email: user.email,
                    name: user.name,
                    picture: user.picture,
                }
    
                let json = await axios.post("http://localhost:3001/user", dat);
                console.log(json.data); // porque no lo alcanzo a ver
            }
        } */

    // const a = Navigate();
    const goRoute = useHistory();
    useEffect(() => {
        const autenticated = async () => {

            if (isAuthenticated) {
                let dat = {
                    email: user.email,
                    name: user.name,
                    picture: user.picture,
                }
                let json = await axios.post("http://localhost:3001/user", dat);
                console.log(json.data); // porque no lo alcanzo a ver
                dispatch(saveUser(json.data));
                //goRoute.push('/')
            }
        }
        autenticated();
    }, [isAuthenticated])

    // ------------------------------------------------------------

    //dialog
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        goRoute.push('/')
    };

    //--------



    return (
        <ThemeProvider theme={theme}>
            <NavBar />
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://media.istockphoto.com/id/511484502/es/foto/hamburguesa-con-queso-y-tocino-con-queso-y.jpg?s=612x612&w=0&k=20&c=QHjjrvjpkfB_9Lsxhn5wC_JcZKJ4b_4blmA5bWgT-40=)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'black', width: 100, height: 100 }} src={logo}>
                            {/*  <LockOutlinedIcon /> */}
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Mc Burguer
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            {/* <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            /> */}
                            {/* <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                disabled={stateButtonBbdd}
                            >
                                Sign In
                            </Button> */}
                            {
                                isLoginBD()
                            }

                        </Box>
                        {
                            (isAuthenticated) ? isLogin() : isLogout()
                        }
                    </Box>
                </Grid>
            </Grid>
            {/* DIALOG MESSAGE */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Usuario logueado con éxito!"}
                </DialogTitle>
                <DialogContent>
                   {/*  <DialogContentText id="alert-dialog-description">
                        Dale 'OK' para redirigir...
                    </DialogContentText> */}
                      <Alert severity="success">Click 'OK' for redirect...!</Alert>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>OK</Button>
                   {/*  <Button onClick={handleClose} autoFocus>Agree</Button> */}
                </DialogActions>
            </Dialog>
        </ThemeProvider>
    );
}

