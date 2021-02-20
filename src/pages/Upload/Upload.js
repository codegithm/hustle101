import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    height: "auto",
    marginTop: "70px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "7px",
  },
  input: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
  },
  link: {
    padding: "5px",
    margin: "6px",
  },
  preview: {
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
  },
});
const Upload = () => {
  const classes = useStyles();
  const history = useHistory();
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");

  const picture = {
    image: image,
    link: link,
    user_id: localStorage.getItem("user_id"),
  };

  const save = () => {
    history.push("/gallery/freelancer");
    localStorage.setItem("image", JSON.stringify(picture));
  };
  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "hustle");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/codegithm/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setImage(file.secure_url);
  };
  const addLink = (e) => {
    setLink(e.target.value);
  };
  return (
    <Container className={classes.container}>
      <Box>
        <Typography className={classes.title} variant="h1">
          Upload Image
        </Typography>
      </Box>
      <Box className={classes.input}>
        <input
          onChange={uploadImage}
          type="file"
          name="file"
          placeholder="upload an image"
        />
        <TextField
          className={classes.link}
          variant="outlined"
          color="secondary"
          label="Link"
          placeholder="Enter the link"
          required
          onChange={addLink}
        />
      </Box>
      <Button onClick={save} variant="contained" color="secondary">
        Upload
      </Button>
      {image === "" ? (
        "No Images"
      ) : (
        <Box className={classes.preview}>
          <Typography>Preview</Typography>
          <img alt="Fetching" src={image} style={{ width: "300px" }} />
          <Typography>Link: {link}</Typography>
        </Box>
      )}
    </Container>
  );
};

export default Upload;
