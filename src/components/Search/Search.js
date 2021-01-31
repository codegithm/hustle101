import React from 'react';
import { Container, FormControl, Select, MenuItem, Typography, makeStyles, Button } from '@material-ui/core'

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


const Search = () =>{
    const [ title, selectTitle ] = React.useState("");

    const changeTitle = (e) =>{
        selectTitle(e.target.value);
    }

    const classes = useStyles();
    return(
        <Container>
            <Typography>
                Dig in!
                What kind of a freelancer dev  are you looking for today?
            </Typography>
            <FormControl>
            <Select onChange={changeTitle} value={title} displayEmpty className={classes.field} color="secondary">
                    <MenuItem value="" disabled>Select Title</MenuItem>
                    <MenuItem value={"Full stack developer"}>Full stack developer</MenuItem>
                    <MenuItem value={"Frontend developer"}>Frontend developer</MenuItem>
                    <MenuItem value={"Backend developer"}>Backend developer</MenuItem>
                    <MenuItem value={"Game developer"}>Game developer</MenuItem>
                    <MenuItem value={"Native developer"}>Native developer</MenuItem>
                </Select>
                <Button variant="contained" className={classes.field} color='secondary'>Search</Button>
            </FormControl>
        </Container>
    )
}

export default Search