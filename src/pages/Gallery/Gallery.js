import React from "react";
import { Container, Typography, makeStyles, Box } from "@material-ui/core";
import { CloudOutlined, ImageOutlined, AddAPhoto } from "@material-ui/icons"


const useStyles = makeStyles((theme)=>({
    container : {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh"
    },
    cloud: {
        marginRight: "10px"
    },
    upload: {
        display:"flex",
        justifyContent: "center",
        fontSize: "20px"
    },
    save: {
        borderStyle: "dashed",
        borderWidth: "3px",
        borderColor: "#325340",
        borderRadius: "20px",
        width: "100%",
        height: "101px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "30px"
        
    },
    size: {
        fontSize: "15px"
    },
    gallery: {
        marginBottom: "30px",
        marginTop: "30px"
    }
}))
const Gallery = () =>{
    const classes = useStyles()
    return(
        <Container className={classes.container}>
            <Typography className={classes.gallery} variant="h3">Gallery</Typography>
            <Typography className={classes.upload}><CloudOutlined className={classes.cloud}/>Upload your work</Typography>
            <div className={classes.save}>
                <Typography className={classes.size}>Drop your image here or browse</Typography>
                <Box style={{width:"100%", height:"40%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <ImageOutlined style={{fontSize:"40px"}}/><AddAPhoto style={{fontSize:"40px",color:"#325340" }} />
                </Box>
                <Typography>jpeg,pneg,gif</Typography>
            </div>
            <Typography>Add link</Typography>
        </Container>
    )
}

export default Gallery