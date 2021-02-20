import React from "react";
import {
  Container,
  Box,
  makeStyles,
  Typography,
  Avatar,
  Button,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  container: {
    width: "100%",
    minWidth: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  box: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "8px",
    borderRadius: "20px",
    marginBottom: "7px",
  },
  prof: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  info: {
    marginLeft: "10px",
  },
}));
const Results = (props) => {
  const history = useHistory();
  const classes = useStyles();

  const request = () => {
    history.push("/request");
  };
  return (
    <Container className={classes.container}>
      <Box className={classes.box} boxShadow={3}>
        <Box>
          <Avatar className={classes.small} />
        </Box>
        <Box className={classes.info}>
          <Typography className={classes.prof} variant="h1">
            {props.profession}
          </Typography>
          <Typography>{props.name}</Typography>
          <Typography>{props.number}</Typography>
        </Box>
      </Box>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={request} variant="contained" color="secondary">
          Request
        </Button>
      </Box>
    </Container>
  );
};

export default Results;
