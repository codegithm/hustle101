import React from "react";
import { FormControl, Container, Typography, TextField } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { Select, MenuItem, Button , Badge } from "@material-ui/core";
import Avatar from '../../components/Avatar/Avatar';
import { Person, AddAPhoto } from '@material-ui/icons'

const useStyles = makeStyles((theme)=>({
    heading: {
        fontSize: "30px",
        fontWeight: "bold",
        position: "relative",
    },
    field: {
        marginTop: "10px",
        width: "100%",
        marginBottom: "10px"
    },
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        position: "absolute",
        top: 0
    },
    badge : {
        margin: theme.spacing(0)
    }
}))

const Signup = () =>{
    const [ title, selectTitle ] = React.useState("");

    const changeTitle = (e) =>{
        selectTitle(e.target.value);
    }

    const classes = useStyles();
    return(
        <Container className={classes.container} maxWidth="sm">
            <Typography className={classes.heading}>
                a Freelancer? a Hustler!
            </Typography>
            <Typography>
                BUILD YOUR PROFILE
            </Typography>
            <Badge badgeContent={<AddAPhoto />} overlap="circle" anchorOrigin={ {vertical: 'bottom', horizontal: 'right'} } >
                <Avatar type ="circle" children={<Person/>}  />
            </Badge>
            <FormControl>
                <TextField className={classes.field} id="name" label="Name" color="secondary" variant="outlined" />
                <TextField className={classes.field} id="surname" label="Surname" color="secondary" variant="outlined" />
                <TextField className={classes.field} id="cellphone" label="Cellphone" color="secondary" variant="outlined" />
                <TextField className={classes.field} id="idnumber" label="ID Number" color="secondary" variant="outlined" />
                <TextField className={classes.field} id="location" label="Location" color="secondary" variant="outlined" />
                <TextField className={classes.field} id="gender" label="Gender" color="secondary" variant="outlined" />
                <Select onChange={changeTitle} value={title} displayEmpty className={classes.field} color="secondary">
                    <MenuItem value="" disabled>Select Title</MenuItem>
                    <MenuItem value={1}>Full stack developer</MenuItem>
                    <MenuItem value={2}>Frontend developer</MenuItem>
                    <MenuItem value={3}>Backend developer</MenuItem>
                    <MenuItem value={4}>Game developer</MenuItem>
                    <MenuItem value={5}>Native developer</MenuItem>
                </Select>
                <Button variant="contained" className={classes.field} color='secondary'>Save</Button>
            </FormControl>
        </Container>
    )
}

export default Signup;