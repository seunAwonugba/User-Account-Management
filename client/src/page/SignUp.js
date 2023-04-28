import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Grid, Paper, Typography } from "@mui/material";

export default function SignUp() {
    const paperStyle = { padding: "30px 20px", width: 500 };
    const marginStyle = { marginTop: "15px" };
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align="center">
                    <h2>Sign Up</h2>
                    <Typography variant="caption">
                        Complete this form to sign up!
                    </Typography>
                </Grid>

                <form>
                    <TextField
                        id="outlined-basic"
                        label="First name"
                        variant="outlined"
                        placeholder="First name"
                        style={marginStyle}
                        fullWidth
                    />
                    <TextField
                        id="outlined-basic"
                        label="Last name"
                        variant="outlined"
                        placeholder="Last name"
                        style={marginStyle}
                        fullWidth
                    />
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        placeholder="Email"
                        style={marginStyle}
                        fullWidth
                    />
                    <TextField
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        placeholder="Password"
                        style={marginStyle}
                        fullWidth
                    />
                    <TextField
                        id="outlined-basic"
                        label="Confirm password"
                        variant="outlined"
                        placeholder="Confirm password"
                        style={marginStyle}
                        fullWidth
                    />
                    <div className="button-div">
                        <div></div>

                        <Button
                            variant="contained"
                            style={{
                                backgroundColor: "#222222",
                                marginTop: "15px",
                            }}
                            type="submit"
                        >
                            Sign Up
                        </Button>
                    </div>
                </form>
            </Paper>
        </Grid>
    );
}
