import * as React from "react";
import TextField from "@mui/material/TextField";
import {
    Avatar,
    Button,
    FormControl,
    Grid,
    InputLabel,
    OutlinedInput,
    Paper,
    Typography,
} from "@mui/material";
import baseUrl from "../base_url/base-url";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Profile() {
    const navigate = useNavigate();

    const paperStyle = { padding: "30px 20px", width: 550 };
    const marginStyle = { marginTop: "15px" };

    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [isLoading, setIsLoading] = React.useState("");

    const signUp = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const userResponse = {
            firstName,
            lastName,
            email,
            password,
            repeat_password: confirmPassword,
        };

        try {
            const response = await baseUrl.post(
                "/auth/create-user",
                userResponse
            );
            setIsLoading(false);

            if (response.data.success === true) {
                navigate("/email-confirmation-sent");
            } else {
                setIsLoading(false);
                toast.error(response.data.data);
            }
        } catch (error) {
            setIsLoading(false);

            toast.error(error.response.data.data);
        }
    };
    return isLoading ? (
        <body>
            <h4>Loading...</h4>
        </body>
    ) : (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align="center">
                    <Grid>
                        <Avatar></Avatar>

                        <h2>Profile Page</h2>
                        <Typography variant="caption">
                            Complete this form to sign up!
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
}
