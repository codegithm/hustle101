import React from 'react';
import { FormControl, Container, Typography, TextField } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { Button , Badge } from "@material-ui/core";
import Avatar from '../../../components/Avatar/Avatar';
import { Person, AddAPhoto } from '@material-ui/icons'

const useStyles = makeStyles((theme)=>({
    heading: {
        fontSize: "30px",
        fontWeight: "bold",
        position: "relative",
        color: "white"
    },
    field: {
        marginTop: "10px",
        width: "100%",
        marginBottom: "10px",
        
    },
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        position: "absolute",
        top: 0,
        backgroundColor: "#325340"
    },
    badge : {
        margin: theme.spacing(0)
    },
    sub: {
        color: "white"
    }
}))

const Register = () =>{
    
    const classes = useStyles();
    return(
        <Container className={classes.container}>
            <Typography color="#fff" className={classes.heading}>
                The hustler’s client!
            </Typography>
            <Typography className={classes.sub}>
                LET FREELANCERS KNOW MORE ABOUT YOU - BUILD YOUR PROFILE
            </Typography>
            <Badge badgeContent={<AddAPhoto />} overlap="circle" anchorOrigin={ {vertical: 'bottom', horizontal: 'right'} } >
                <Avatar type ="circle" children={<Person/>}  />
            </Badge>
            <FormControl>
                <TextField style={{backgroundColor: "#fff"}} className={classes.field} id="name" label="Name" color="secondary" variant="outlined" />
                <TextField style={{backgroundColor: "#fff"}} className={classes.field} id="surname" label="Surname" color="secondary" variant="outlined" />
                <TextField style={{backgroundColor: "#fff"}} className={classes.field} id="cellphone" label="Cellphone" color="secondary" variant="outlined" />
                <TextField style={{backgroundColor: "#fff"}} className={classes.field} id="email" label="Email" color="secondary" variant="outlined" />
            
                <Button variant="contained" className={classes.field} color='secondary'>Save</Button>
            </FormControl>
        </Container>
    )
}

export default Register