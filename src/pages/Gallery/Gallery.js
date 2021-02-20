import React, { useEffect, useState } from "react";
import { Container, Box, Typography, makeStyles } from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "auto",
  },
  title: {
    fontWeight: "bold",
    fontSize: "24px",
    display: "flex",
    alignSelf: "center",
    margin: "20px",
  },
  image: {
    display: "flex",
    flexDirection: "center",
    width: "100%",
    height: "auto",
  },
});
const Gallery = () => {
  const classes = useStyles();
  const [image, setImage] = useState("");
  const user_id = JSON.parse(localStorage.getItem("search")).data.data._id;
  console.log(user_id);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/gallery/images/${user_id}`)
      .then((res) => {
        console.log(res.data);
        setImage(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Container className={classes.container}>
      <Typography className={classes.title}>Gallery</Typography>
      <Box className={classes.image}>
        {image.length === 0
          ? "No uploads"
          : image.data.map((images) => {
              return (
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    top: 30,
                  }}
                >
                  <img
                    style={{ width: "150px" }}
                    alt="freelancer uploads"
                    src={images.image}
                  />
                  <Typography>{images.link}</Typography>
                </Box>
              );
            })}
      </Box>
    </Container>
  );
};

export default Gallery;
