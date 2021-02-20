import React from "react";
import {
  Container,
  Typography,
  makeStyles,
  Box,
  Button,
} from "@material-ui/core";
import { CloudOutlined, ImageOutlined, AddAPhoto } from "@material-ui/icons";
import { green } from "@material-ui/core/colors";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Display from "../../components/DIsplayImages/Display";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "auto",
  },
  cloud: {
    marginRight: "10px",
  },
  upload: {
    display: "flex",
    justifyContent: "center",
    fontSize: "20px",
  },
  save: {
    borderStyle: "dashed",
    borderWidth: "3px",
    borderColor: "#325340",
    borderRadius: "20px",
    width: "70%",
    height: "101px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "30px",
  },
  size: {
    fontSize: "15px",
  },
  gallery: {
    marginBottom: "30px",
    marginTop: "30px",
  },
  line: {
    width: "100%",
    height: "3px",
    backgroundColor: green[100],
    marginTop: "7px",
  },
  fixed: {
    position: "fixed",
    zIndex: 2,
    background: "white",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    position: "relative",
    top: "360px",
  },
}));
const Gallery = () => {
  const classes = useStyles();
  const history = useHistory();
  const goToUpload = () => {
    history.push("/upload");
  };
  const image = JSON.parse(localStorage.getItem("image"));
  const saveToDatabase = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/gallery", image)
      .then((res) => {
        console.log(res.status);
      })
      .catch((err) => {
        console.log(err);
        console.log(image);
      });
  };
  return (
    <Container className={classes.container}>
      <Box className={classes.fixed}>
        <Typography className={classes.gallery} variant="h3">
          Gallery
        </Typography>
        <Typography className={classes.upload}>
          <CloudOutlined className={classes.cloud} />
          Upload your work
        </Typography>
        <div className={classes.save}>
          <Typography className={classes.size}>
            Drop your image here or browse
          </Typography>
          <Box
            style={{
              width: "100%",
              height: "40%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ImageOutlined onClick={goToUpload} style={{ fontSize: "40px" }} />
            <AddAPhoto style={{ fontSize: "40px", color: "#325340" }} />
          </Box>
          <Typography>jpeg,pneg,gif</Typography>
        </div>

        <Button
          style={{ margin: "7px" }}
          onClick={saveToDatabase}
          variant="contained"
          color="secondary"
        >
          Save
        </Button>
        <Box className={classes.line}></Box>
      </Box>
      <Box className={classes.image}>
        <Display />
      </Box>
    </Container>
  );
};

export default Gallery;
