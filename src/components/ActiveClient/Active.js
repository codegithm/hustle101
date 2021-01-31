import React from 'react';
import { Container, Box, makeStyles, Typography, Button } from '@material-ui/core';
import { MoneyOffOutlined, TimerOutlined } from '@material-ui/icons';

const useStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    head: {
        fontSize: "20px",
        fontWeight: "bold"
    },
    box: {
        maxWidth: "400px",
        width: "100%",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "10px"

    },
    icons: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    seperate: {
        display: "flex",
        justifyContent: "center",
    },
    icon: {
        display: "flex",
        justifyContent: "space-between"
    },
    status: {
        margin: "4px",
        fontWeight: "bold"
    }
    
})

const Active = (props) =>{
    const classes = useStyles();
    
    return(
        <Container className={classes.container}>
            <Box className={classes.box} boxShadow={2}>
            <Typography variant="h1" style={{fontWeight: "bold",fontSize: "20px", display:"flex",justifyContent:"center"}}>{props.name}</Typography>
            <Box className={classes.icon} style={{margin: "10px"}}>
                    <div className={classes.icons}>
                        <MoneyOffOutlined/>{props.price}
                    </div>
                    <div className={classes.icons}>  
                        <TimerOutlined/>{props.time}
                    </div>
                </Box>
                <Typography className={classes.status}>Status: {props.status}</Typography>
                <Box className={classes.seperate}>
                    <Button color="primary" variant="contained">CANCEL</Button>
                </Box>
            </Box>
        </Container>
    )
}

export default Active