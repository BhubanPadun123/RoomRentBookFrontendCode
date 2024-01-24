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
import { useDispatch } from "react-redux";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { RoomImgUploadAction,RoomRegisterAction } from "redux/Action/RoomAction";

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

export default function RoomRegister() {
    const [state, setState] = React.useState({
        email: "",
        image: "",
        room:"",
        amount:""
    })
    const dispatch = useDispatch()
    const isEmail = (email: string) => {
        // Regular expression to check if the entered email is a valid email address
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const mailAddress = data.get("email") as string
        if (!isEmail(mailAddress)) {
            alert("Please enter a valid email address")
        }
        const userData = {
            email: data.get("email"),
            address: data.get("address"),
            state: data.get("state"),
            district: data.get("district"),
            po: data.get("po"),
            pin: data.get("pin"),
            room: data.get("room"),
            amount: data.get("amount")
        }
        if(userData){
            dispatch(RoomRegisterAction(userData))
        }
    };
    const handleImgUpload = (event: any) => {
        const file = event.target.files[0];
        setState((prevState) => ({
            ...prevState,
            image: file
        }))
        const formData = new FormData();
        formData.append('image', file);
        const imageData = [{
            owner: state.email,
            formData: event.target.files[0]
        }]
        dispatch(RoomImgUploadAction(formData,state.email))
    }
    const handleEmailChange = (e: any) => {
        setState((prevState) => ({
            ...prevState,
            email: e.target.value
        }))
    }

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
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    type="email"
                                    onChange={(e) => { handleEmailChange(e) }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="address"
                                    label="Full Address with House-No"
                                    name="address"
                                    autoComplete="address"
                                    type="text"
                                />
                            </Grid>
                            <Grid item xs={12}>
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
                            </Grid>
                            <Grid item xs={12}>
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
                                <FormControl fullWidth>
                                    <InputLabel>Select from Size</InputLabel>
                                    <Select
                                        label="Select from Size"
                                        required
                                        id="room"
                                        name="room"
                                        autoComplete="room"
                                        value={state.room}
                                        onChange={(e)=>{
                                            setState((prevState) => ({...prevState,room:e.target.value}))
                                        }}
                                    >
                                        {
                                            ["Single-Room", "Double-Room", "1BHK", "2BHK", "3BHK"].map((item, idx) => {
                                                return (
                                                    <MenuItem key={idx} value={item} >{item}</MenuItem>
                                                )
                                            })
                                        }
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel>Rent/Month</InputLabel>
                                    <Select
                                        label="Rent/Month"
                                        required
                                        id="amount"
                                        name="amount"
                                        autoComplete="amount"
                                        value={state.amount}
                                        onChange={(e) => {
                                            setState((prevState) => ({...prevState,amount:e.target.value}))
                                        }}
                                    >
                                        {
                                            ["1K", "1.5K", "2K", "2.5K", "3K", "3.5K", "4K", "4.5K"].map((item, idx) => {
                                                return (
                                                    <MenuItem key={idx} value={item} >{item}</MenuItem>
                                                )
                                            })
                                        }
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <input type="file" name="image" accept="image/*" required id="img" autoComplete="img" onChange={(e) => handleImgUpload(e)} />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Post
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}