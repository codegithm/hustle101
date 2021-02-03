import React ,{ useContext, useState} from 'react';
import { FormControl, Container, Typography, TextField } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { Button , Badge } from "@material-ui/core";
import Avatar from '../../../components/Avatar/Avatar';
import { Person, AddAPhoto } from '@material-ui/icons';
import { ProfileContext } from '../../../components/Context/ProfileContext/ProfileContext';
import { Link } from 'react-router-dom';
 

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
    sub: {
        color: "white"
    }
}))

const Register = () =>{
    
    const [profile, setProfile] = useContext(ProfileContext)
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [cellphone, setCellphone] = useState('');
    const [email, setEmail] = useState('');

    const changeName = (e) =>{
        setName(e.target.value)
    }
    const changeSurname = (e) =>{
        setSurname(e.target.value)
    }
    const changeCellphone = (e) =>{
        setCellphone(e.target.value)
    }
    const changeEmail = (e) =>{
        setEmail(e.target.value)
    }
    const submit = (e) =>{
       setProfile(prevProfile => 
        [...prevProfile,{name: name,
                        surname: surname,
                        cellphone: cellphone,
                        email: email}])
    }
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
                <Avatar variant ="circular" children={<Person/>}  />
            </Badge>
            <FormControl>
                <TextField onChange={changeName} style={{backgroundColor: "#fff"}} className={classes.field} id="name" label="Name" color="secondary" variant="outlined" />
                <TextField onChange={changeSurname} style={{backgroundColor: "#fff"}} className={classes.field} id="surname" label="Surname" color="secondary" variant="outlined" />
                <TextField onChange={changeCellphone} style={{backgroundColor: "#fff"}} className={classes.field} id="cellphone" label="Cellphone" color="secondary" variant="outlined" />
                <TextField onChange={changeEmail} style={{backgroundColor: "#fff"}} className={classes.field} id="email" label="Email" color="secondary" variant="outlined" />
                <Link to='/main/client'>
                    <Button onClick={submit} variant="contained" className={classes.field} color='secondary'>Save</Button>
                </Link>
            </FormControl>
        </Container>
        
    )
}


export default Register