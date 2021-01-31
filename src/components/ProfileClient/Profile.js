import React from 'react';
import { Container, makeStyles, Typography, Button } from '@material-ui/core';
import Avatar from "../../components/Avatar/Avatar";
import { green} from "@material-ui/core/colors"


const useStyles = makeStyles((theme)=>({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      
    },
    badge: {
        position: "relative",
        left: "30px",
        bottom: "30px"
    },
    available : { 
        height:"40px",
        width:"100%",
        backgroundColor:green[200],
        borderRadius:"20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: "15px",
        paddingRight: "15px"
    },
    sets: {
        display: "flex",
        marginLeft: "6px",
        marginRight: "6px"
    },
    btn: {
        marginTop: "35px"
    }
        
}))

const Profile = (props) =>{
    const classes = useStyles();
    return(
        <Container className = {classes.container}>
            <Avatar type="circle"/>
            <Typography variant="h4">
                {props.name}
            </Typography>
            <Typography variant="h7">
                {props.number}
            </Typography>
            <Typography variant="h7">
                {props.email}
            </Typography>
            <Button className={classes.btn} variant="contained" color="secondary">Edit profile</Button>
        </Container>
    )
}

export default Profile