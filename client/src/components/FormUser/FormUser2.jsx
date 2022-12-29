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

import Stack from '@mui/material/Stack';
import { Card, CardContent, Divider } from '@mui/material'

import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import Alert from '@mui/material/Alert';


import NavBar from '../NavBar/NavBar'
import { saveUser, eraseUser, userActive } from '../../actions/index'
import logo from '../NavBar/BurgerLogo.png'
import axios from 'axios'
import { recUser } from '../../actions/index'
import { useRadioGroup } from '@mui/material';


export default function FormUser2(props) {

    const userN = useSelector((state) => state.user);

    const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>
            <NavBar />
            <Grid container component="main" sx={{ height: '20vh'}}>
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

                        <Box component="form" noValidate sx={{ mt: 1 }}>
                            <Grid sx={{ marginTop: 5 }}>
                                <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "auto" }} sx={{ border: 1, borderColor: 'coral' }}>
                                    <Stack direction="row" spacing={3} sx={{ marginLeft: 2 }}>
                                        <img src="https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=80" alt="1" />
                                        {/*   <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
                                        <Typography gutterBottom variant="h3" align="center">
                                            Mc Burguer
                                        </Typography>
                                    </Stack>
                                    <br />
                                    <Divider />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5">
                                            Contact User: <b>{userN.name}</b>
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                                            Please, complete your data.
                                        </Typography>
                                        <form>
                                            <Grid container spacing={1} >
                                                <Grid xs={12} sm={6} item>
                                                    <TextField
                                                        placeholder="Enter first name"
                                                        label="First Name"
                                                        variant="outlined"
                                                        fullWidth
                                                        required />
                                                </Grid>
                                                <Grid xs={12} sm={6} item>
                                                    <TextField
                                                        placeholder="Enter last name"
                                                        label="Last Name"
                                                        variant="outlined"
                                                        fullWidth
                                                        required
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
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        type="number"
                                                        placeholder="Enter phone number"
                                                        label="Phone"
                                                        variant="outlined"
                                                        fullWidth required />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        placeholder="Address"
                                                        label="Address"
                                                        variant="outlined"
                                                        fullWidth
                                                        required />
                                                </Grid>
                                                {/*  <Grid item xs={12}>
                                    <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                                </Grid> */}
                                                <Grid item xs={12}>
                                                    <Button type="submit"
                                                        variant="contained"
                                                        color="primary"
                                                        fullWidth>
                                                        Update user
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </form>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider >
    )
}