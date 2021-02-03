import React from 'react';
import { Container, Box, makeStyles, Typography, Button } from '@material-ui/core';
import { MoneyOffOutlined, TimerOutlined } from '@material-ui/icons'

const useStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "20px"
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
        justifyContent: "space-between"
    }
    
})
const Work = (props) =>{
    const classes = useStyles();
    return(
        <Container className={classes.container}>
            <Box className={classes.box} boxShadow={2}>
                <Typography variant="h1" style={{fontSize: "20px", fontWeight: "bold"}}>Looking for a {props.title}</Typography>
                <Typography style={{fontWeight: "bold"}}>{props.client}</Typography>
                <Typography>{props.description}</Typography>
                <Box className={classes.seperate} style={{margin: "10px"}}>
                    <div className={classes.icons}>
                        <MoneyOffOutlined/>{props.price}
                    </div>
                    <div className={classes.icons}>  
                        <TimerOutlined/>{props.time}
                    </div>
                </Box>
                <Box className={classes.seperate}>
                    <Button color="secondary" variant="contained">ACCEPT</Button>
                    <Button color="primary" variant="contained">DECLINE</Button>
                </Box>
            </Box>
        </Container>
    )
}

export default Work