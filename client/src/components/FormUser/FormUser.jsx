import * as React from 'react';
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid, Card, CardContent, Typography, Divider, TextField } from '@mui/material'
import '../FormUser/FormUser.css'

export default function FormUser(props) {

    const userN = useSelector((state) => state.user);

    const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>

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
        </ThemeProvider >
    )
}