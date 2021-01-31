import React from 'react';
import { Container, makeStyles, Badge, Typography, Box, Button } from '@material-ui/core';
import Avatar from "../../components/Avatar/Avatar";
import { green, red } from "@material-ui/core/colors"
import { ToggleOn, ToggleOff, ImageOutlined } from "@material-ui/icons"

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
    const toggle = props.toggleState
    return(
        <Container className = {classes.container}>
           
            <Avatar type="circle"/>
            <Badge className={classes.badge} badgeContent=" " overlap="circle" anchorOrigin= {{vertical: "bottom", horizontal: "right"}}
             color={toggle === "on" ? "secondary" : "primary"} >
            </Badge>
            <Typography variant="h4">
                {props.name}
            </Typography>
            <Typography variant="h7">
                {props.number}
            </Typography>
            <Box 
            style={{
                backgroundColor : toggle === "on" ? green[100] : red[100]
            }}
            className={classes.available} 
            onClick={props.toggle}>
                <Box className={classes.sets}>
                    {
                        toggle === "on" ?  <Typography>Available</Typography> :  <Typography>Not Available</Typography>
                    }
                    {
                        toggle === "on" ?  < ToggleOn style={{color:"green"}} /> :  < ToggleOff style={{color:"red"}} />
                    }
                   
                </Box>

                <Box className={classes.sets}>
                    <Typography >Gallery</Typography>
                    <ImageOutlined />
                </Box>
            </Box>
            <Button className={classes.btn} variant="contained" color="secondary">Edit profile</Button>
        </Container>
    )
}

export default Profile