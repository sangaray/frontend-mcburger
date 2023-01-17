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

import { Card, CardContent, Divider, Stack } from '@mui/material'
import logo1 from './login-picture.png'
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
    //https://test-deploy-production-3b4b.up.railway.app

    const { loginWithRedirect, user, isAuthenticated, logout, isLoading } = useAuth0();
    //console.log(JSON.stringify(user) + 'OKAOKA');

    //#######################################################################
    //#################  GEO - LOCALIZACION #################################
    var lat, long;
    const geoOk = async (pos) => {
        //Obtenemos latitud y longitud
        lat = pos.coords.latitude;
        long = pos.coords.longitude;


        const coordinates = (lat + ' ' + long);
        // console.log(coordinates + ' <<===');
        /* let data = {
            email: user.email,
            currentLocation: coordinates
        } */
        // await axios.put('http://localhost:3001/user/location', data);

    }

    function geoErr(err) {
        console.warn(err.message);
        let msg;
        switch (err.code) {
            case err.PERMISSION_DENIED:
                msg = "No nos has dado permiso para obtener tu posición";
                break;
            case err.POSITION_UNAVAILABLE:
                msg = "Tu posición actual no está disponible";
                break;
            case err.TIMEOUT:
                msg = "No se ha podido obtener tu posición en un tiempo prudencial";
                break;
            default:
                msg = "Error desconocido";
                break;
        }
        console.log(msg);
    }
    function geoLocation() {
        //console.log(userN);

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(geoOk, geoErr);
            //console.log(lat, long);
        }
        else {
            console.log('no se permite geolocalizacion....');
        }

    }
    geoLocation();
    //##########################################################################
    //##########################################################################

    const activeUser = useSelector((state) => state.activeUser);
    const userN = useSelector((state) => state.user);

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
        let json = await axios.post("https://test-deploy-production-3b4b.up.railway.app/user/login", dat);
        console.log(json);
        if (json.data.token !== null) {
            document.cookie = `token=${json.data.token}; max-age=${60 * 1}; path=/; samesite=strict`
            //window.localStorage.setItem('userL', json.data.email)
            setButtonGoogle(true);
            dispatch(saveUser(json.data));
            dispatch(userActive(true));
            handleClickOpen();
            // console.log(stateButtonGoogle + ' state button google');
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

    const isLogin = () => {

        if (isAuthenticated) {

            return (
                <>
                    <Button
                        color="error"
                        fullWidth
                        variant="contained"
                        onClick={() => {
                            dispatch(userActive(false));
                            document.cookie = `token=''; max-age=${60 * 0}; path=/; samesite=strict`;
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
        document.cookie = `token=''; max-age=${60 * 0}; path=/; samesite=strict`;
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

    const goRoute = useHistory();


    useEffect(() => {

        const autenticated = async () => {

            if (isAuthenticated && activeUser == false) {

                let dat = {
                    email: user.email,
                    name: user.name,
                    picture: user.picture,
                    currentLocation: lat + ' ' + long
                }

                let json = await axios.post("https://test-deploy-production-3b4b.up.railway.app/user", dat);
                document.cookie = `token=${json.data.token}; max-age=${60 * 1}; path=/; samesite=strict`
                //console.log(json.data, 'fff'); // porque no lo alcanzo a ver
                //dispatch(saveUser(json.data));

                dispatch(saveUser(json.data));
                dispatch(userActive(true));
                handleClickOpen();
            }
        }
        autenticated();

    }, [isAuthenticated])

    // ------------------------------------------------------------

    // ------------------ DIALOG ---------------------------------------
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = async () => {
        // aca podria cpturar un tipo de dato que ya estaria cargado

        // -------------------- CREACION DE LOCALSTORAGE ---------------------------------
        let userDate = await axios.post("https://test-deploy-production-3b4b.up.railway.app/user/one", { email: userN.email });
        console.log(userDate.data);
        window.localStorage.setItem('userL', JSON.stringify(userDate.data));
        // ACA PODRIA PREGUNTAR A QUE RUTA DIRIGIR SI EL USUARIO ES X UNICAMENTE
        goRoute.push('/')
        setOpen(false);
    };

    //-----------------------------------------------------------------

    // ----- FUNCION QUE USE PARA PROBAR EL TOKEN ---------
    const prueba = async (e) => {
        e.preventDefault();
        //const token1 = document.cookie.replace('token=', '')
        const token = document.cookie;
        let pos = token.lastIndexOf("token")
        let b = token.slice(pos + 6)
        //   console.log(b + '****');
        let dat = {
            email: userN.email,
            token: b
        }


        const test = await axios.post("https://test-deploy-production-3b4b.up.railway.app/user/test", dat);
        //console.log(test.data);
        if (test.data.email) {
            console.log('Token funcionando');
        } else {
            console.log('token expirado..');
        }
    }
    //--------------------------------------------------------

    // ------------ CONTROL DE FORMULARIO -------------------

    const [input, setInput] = useState({
        first_name: '',
        last_name: '',
        password: '',
        phone_number: '',
        address: '',
        email: ''
    })

    const changeHandler = (e) => {
        // console.log(e.target.name);
        const property = e.target.name;
        const value = e.target.value;

        setInput({
            ...input,
            [property]: value,
            email: user.email
        })
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        // Aca envio los datos del formulario cdo es el primer ingreso para completar los datos
        const updateSend = await axios.put('https://test-deploy-production-3b4b.up.railway.app/user', input)
        //sino aca que actualizaria los datos aca hacer una consulta de usuario
        // -------------------- CREACION DE LOCALSTORAGE ---------------------------------
        let userDate = await axios.post("https://test-deploy-production-3b4b.up.railway.app/user/one", { email: user.email });
        window.localStorage.setItem('userL', JSON.stringify(userDate.data));
        console.log(userDate.data);
        goRoute.push('/')
    }


    //-------------------------------------------------------
    const updateUser = () => {
        let state;
        (!userN.first_name || !userN.last_name || !userN.phone || !userN.address) ? state = true : state = false
        if (state === true) {
            return (
                <>
                    <Grid sx={{ marginTop: 0 }}>
                        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "auto" }} sx={{ border: 1, borderColor: 'white' }}>
                            <Stack direction="row" spacing={3} sx={{ marginLeft: 2 }}>
                                <img src={logo1} alt="1" />
                                {/*   <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
                                <Typography gutterBottom variant="h3" align="center">
                                    Mc Burguer
                                </Typography>
                            </Stack>
                            <br />
                            <Divider />
                            <CardContent>
                                <Typography gutterBottom variant="h6">
                                    Please, complete the registration! <b></b>
                                </Typography>

                                <Typography gutterBottom variant="h5">
                                    Contact User: {userN.name}
                                </Typography>
                                {/*  <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                                    Please, complete your data.
                                </Typography> */}
                                <form>
                                    <Grid container spacing={1} >
                                        <Grid xs={12} sm={6} item>
                                            <TextField
                                                placeholder="Enter first name"
                                                label="First Name"
                                                variant="outlined"
                                                fullWidth
                                                required
                                                name='first_name'
                                                onChange={(e) => changeHandler(e)}
                                            />
                                        </Grid>
                                        <Grid xs={12} sm={6} item>
                                            <TextField
                                                placeholder="Enter last name"
                                                label="Last Name"
                                                variant="outlined"
                                                fullWidth
                                                required
                                                name='last_name'
                                                onChange={(e) => changeHandler(e)}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                type="password"
                                                placeholder="Enter password"
                                                label="Password"
                                                variant="outlined"
                                                fullWidth
                                                required
                                                name='password'
                                                onChange={(e) => changeHandler(e)}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                placeholder="Enter phone number"
                                                label="Phone"
                                                variant="outlined"
                                                fullWidth
                                                required
                                                name='phone_number'
                                                onChange={(e) => changeHandler(e)}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                placeholder="Address"
                                                label="Address"
                                                variant="outlined"
                                                fullWidth
                                                required
                                                name='address'
                                                onChange={(e) => changeHandler(e)}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button type="submit"
                                                variant="contained"
                                                color="primary"
                                                fullWidth
                                                onClick={handleUpdate}
                                            >
                                                Update User
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </CardContent>
                        </Card>
                    </Grid>
                </>
            )
        } else {
            return (
                <>
                    <Grid sx={{ marginTop: 0 }}>
                        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "auto" }} sx={{ border: 1, borderColor: 'green' }}>
                            <Stack direction="row" spacing={3} sx={{ marginLeft: 2 }}>
                                <img src={logo1} alt="1" />
                                {/*   <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
                                <Typography gutterBottom variant="h3" align="center">
                                    Mc Burguer
                                </Typography>
                            </Stack>
                            <br />
                            <Divider />
                            <CardContent>
                                <Typography gutterBottom variant="h6">
                                    <b>User registered!</b>
                                </Typography>

                                <Typography gutterBottom variant="h5">
                                    <b>Welcome: </b>{userN.first_name + ' ' + userN.last_name}
                                </Typography>

                                <br />
                                <Grid item xs={12}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        onClick={handleClose}
                                        sx={{ backgroundColor: 'green' }}
                                    >
                                        OK
                                    </Button>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </>
            )
        }
    }



    return (
        <div>
            <NavBar />
            <ThemeProvider theme={theme}>
                {/* <button onClick={() => console.log(userN)}>PROBAR GEOLOCALIZ</button> */}
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
                                {/*  <button onClick={prueba}> PROBAR </button> */}
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

                    <DialogContent>
                        {updateUser()}
                    </DialogContent>
                </Dialog>

            </ThemeProvider>
        </div>
    );
}



