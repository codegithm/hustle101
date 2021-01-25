import React from 'react';
import { Avatar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        marginTop : "20px",
        marginBottom : "20px"
    }
   
}))
const Avata = (props) =>{
    const classes = useStyles()
    return(
        <Avatar className={classes.large} variant={props.type} />
    )
}

export default Avata