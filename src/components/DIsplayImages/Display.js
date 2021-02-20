import React, { useEffect, useState } from "react";
import { Container, Box, Typography } from "@material-ui/core";
import axios from "axios";

const Display = () => {
  const [images, setImages] = useState("");
  const id = localStorage.getItem("user_id");
  useEffect(() => {
    axios
      .get(`http://localhost:5000/gallery/images/${id}`)
      .then((res) => {
        console.log(res.data);
        setImages(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Container>
      {images === "" ? (
        <Typography>No Images</Typography>
      ) : (
        images.data.map((image) => {
          return (
            <Box
              style={{
                maxWidth: "250px",
                maxHeight: "250px",
                position: "relative",
              }}
            >
              <img
                style={{
                  maxWidth: "250px",
                  maxHeight: "250px",
                  position: "relative",
                }}
                alt="Freelance work"
                src={image.image}
              />
              <Typography style={{ marginBottom: "10px", zIndex: 2 }}>
                {image.link}
              </Typography>
            </Box>
          );
        })
      )}
    </Container>
  );
};
export default Display;
