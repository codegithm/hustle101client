import React, { useEffect } from "react";
import {
  Container,
  makeStyles,
  Typography,
  Button,
  Box,
} from "@material-ui/core";
import Avatar from "../../components/Avatar/Avatar";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "auto",
    position: "absolute",
    top: 170,
  },
  btn: {
    marginTop: "35px",
  },
  names: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  name: {
    marginRight: "5px",
  },
}));

const Profile = () => {
  const data = localStorage.getItem("client");
  const dataObj = JSON.parse(data);
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Avatar variant="circular" />
      <Box className={classes.names}>
        <Typography
          style={{ fontSize: "20px", fontWeight: "bold" }}
          className={classes.name}
          variant="h4"
        >
          {dataObj.data.name}
        </Typography>
        <Typography
          style={{ fontSize: "20px", fontWeight: "bold" }}
          variant="h4"
        >
          {dataObj.data.surname}
        </Typography>
      </Box>
      <Typography variant="h7">{dataObj.data.email}</Typography>
      <Button className={classes.btn} variant="contained" color="secondary">
        Edit profile
      </Button>
    </Container>
  );
};

export default Profile;
