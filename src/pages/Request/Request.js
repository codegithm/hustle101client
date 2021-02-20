import React, { useState } from "react";
import {
  Container,
  FormControl,
  TextField,
  makeStyles,
  Button,
  Typography,
  Box,
} from "@material-ui/core";
import axios from "axios";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
  },
  bttons: {
    margin: "10px",
  },
  fields: {
    margin: "7px",
  },
});
const Request = () => {
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const classes = useStyles();

  const changePrice = (e) => {
    setPrice(e.target.value);
  };
  const changeDuration = (e) => {
    setDuration(e.target.value);
  };
  const changeDescription = (e) => {
    setDescription(e.target.value);
  };
  const data = localStorage.getItem("client");
  const user = localStorage.getItem("search");
  const parsedUser = JSON.parse(user);
  const parsed = JSON.parse(data);
  const userId = parsedUser.data.data._id;
  console.log(parsed._id);
  const request = {
    budget: price,
    duration: duration,
    description: description,
    status: "Pending",
    client_id: parsed.data._id,
    user_id: userId,
  };
  const history = useHistory();
  const submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/requests", request)
      .then((res) => {
        console.log(res);
        history.push("/main");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const cancel = () => {
    history.push("/main");
  };
  const goToGallery = () => {
    history.push("/gallery");
  };
  return (
    <Container className={classes.container}>
      <Typography style={{ fontWeight: "bold", fontSize: "20px" }}>
        {parsedUser.data.data.name}
      </Typography>
      <Button
        style={{ marginBottom: "15px" }}
        variant="contained"
        color="secondary"
        onClick={goToGallery}
      >
        See Projects
      </Button>
      <Typography>
        Describe the project, set the price and when you expect it
      </Typography>
      <FormControl>
        <TextField
          onChange={changePrice}
          className={classes.fields}
          color="secondary"
          label="Price"
          variant="outlined"
        />
        <TextField
          onChange={changeDuration}
          className={classes.fields}
          color="secondary"
          label="Duration"
          variant="outlined"
        />
        <TextField
          className={changeDescription}
          color="secondary"
          label="Description"
          variant="outlined"
        />
      </FormControl>
      <Box>
        <Button
          onClick={submit}
          className={classes.bttons}
          variant="contained"
          color="secondary"
        >
          Send
        </Button>
        <Button
          onClick={cancel}
          className={classes.bttons}
          variant="contained"
          color="primary"
        >
          Cancel
        </Button>
      </Box>
    </Container>
  );
};

export default Request;
