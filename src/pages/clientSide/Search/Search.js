import React from 'react';
import { Container, Box, makeStyles } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { grey } from '@material-ui/core/colors'

const useStyles = makeStyles({
    container: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    search: {
        display: "flex",
        position: "fixed",
        alignItems: "center",
        top: 0,
        height: "70px",
        justifyItems: "center",
        backgroundColor: "#fff",
        zIndex: 1

    },
    input: {
        width: "100%",
        padding: "7px",
        borderStyle: "none",
        borderRadius: "20px",
        outline: "none",
        backgroundColor: grey[200]
    }
})

const SearchComponent = () =>{
    const classes = useStyles()
    return(
        <Container className={classes.container}>
            <Box className={classes.search}>
                <Search/>
                <input variant="outlined" className={classes.input} type="text" placeholder="Search" />
            </Box>
        </Container>
    )
}

export default SearchComponent