import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { UserSignupAction } from "redux/Action/UserAction";
import { useDispatch } from "react-redux";

function Copyright(props: any) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <Link color="inherit" href="#">
                Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const theme = createTheme();

export default function SignUp() {
    const dispatch = useDispatch()
    const isEmail = (email:string) => {
        // Regular expression to check if the entered email is a valid email address
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {        
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const mailAddress = data.get("email") as string
        if(!isEmail(mailAddress)){
            alert("Please enter a valid email address")
        }
        const userData = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            email: data.get("email"),
            password: data.get("password"),
            address : data.get("address"),
            state : data.get("state"),
            district : data.get("district"),
            po : data.get("po"),
            pin : data.get("pin"),
            contact: data.get("contact")
        }
        if(userData){
            dispatch(UserSignupAction(userData))
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box
                        component="form"
                        noValidate
                        onSubmit={handleSubmit}
                        sx={{ mt: 3 }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    type="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="contact"
                                    label="ContactNumber"
                                    name="contact"
                                    autoComplete="contact"
                                    type="number"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="address"
                                    label="Full Address"
                                    name="address"
                                    autoComplete="address"
                                    type="text"
                                />
                            </Grid><Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="state"
                                    label="State"
                                    name="state"
                                    autoComplete="state"
                                    type="text"
                                />
                            </Grid><Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="district"
                                    label="District"
                                    name="district"
                                    autoComplete="district"
                                    type="text"
                                />
                            </Grid>                            
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="po"
                                    label="PO"
                                    name="po"
                                    autoComplete="po"
                                    type="text"
                                />
                            </Grid><Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="pin"
                                    label="Pin Number"
                                    name="pin"
                                    autoComplete="pin"
                                    type="text"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox value="allowExtraEmails" color="primary" />
                                    }
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}