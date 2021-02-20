import React from "react";
import {
  Container,
  FormControl,
  Select,
  MenuItem,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  field: {
    marginTop: "10px",
    width: "100%",
    marginBottom: "10px",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    position: "absolute",
    top: 180,
  },
  badge: {
    margin: theme.spacing(0),
  },
}));

const Search = () => {
  const [title, selectTitle] = React.useState("");
  const history = useHistory();
  const changeTitle = (e) => {
    selectTitle(e.target.value);
  };

  const look = {
    profession: title,
  };
  const clearStorage = () => {
    localStorage.removeItem("search");
  };
  clearStorage();
  const submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/users/search", look)
      .then((res) => {
        console.log(res.data);
        if (res.data.data != null) {
          localStorage.setItem("search", JSON.stringify(res));
          history.push("/search");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography className={classes.heading} variant="h1">
        Dig in! What kind of a freelancer dev are you looking for today?
      </Typography>
      <FormControl>
        <Select
          onChange={changeTitle}
          value={title}
          displayEmpty
          className={classes.field}
          color="secondary"
        >
          <MenuItem value="" disabled>
            Select Title
          </MenuItem>
          <MenuItem value={"Full stack dev"}>Full stack dev</MenuItem>
          <MenuItem value={"Frontend dev"}>Frontend dev</MenuItem>
          <MenuItem value={"Backend dev"}>Backend dev</MenuItem>
          <MenuItem value={"Game dev"}>Game dev</MenuItem>
          <MenuItem value={"Native dev"}>Native dev</MenuItem>
        </Select>

        <Button
          onClick={submit}
          variant="contained"
          className={classes.field}
          color="secondary"
        >
          Search
        </Button>
      </FormControl>
    </Container>
  );
};

export default Search;
