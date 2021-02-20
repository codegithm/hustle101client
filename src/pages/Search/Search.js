import React, { useEffect } from "react";
import { Container, Box, makeStyles } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { grey } from "@material-ui/core/colors";
import Results from "../../components/Results/Results";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles({
  container: {
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  search: {
    display: "flex",
    position: "fixed",
    alignItems: "center",
    top: 0,
    height: "70px",
    justifyItems: "center",
    backgroundColor: "#fff",
    zIndex: 1,
  },
  input: {
    width: "100%",
    padding: "7px",
    borderStyle: "none",
    borderRadius: "20px",
    outline: "none",
    backgroundColor: grey[200],
  },
  results: {
    width: "100%",
    position: "relative",
    top: "80px",
  },
});

const SearchComponent = () => {
  const classes = useStyles();
  let history = useHistory();
  let data = localStorage.getItem("search");
  const dataObj = JSON.parse(data);

  const objArr = () => {
    let arr;
    if (dataObj != null) {
      arr = dataObj.data;
      return [arr];
    }
  };
  useEffect(() => {
    if (data == null) {
      history.push("/search");
    } else {
      console.log(dataObj);
    }
  }, []);

  return (
    <Container className={classes.container}>
      <Box className={classes.search}>
        <Search />
        <input
          variant="outlined"
          className={classes.input}
          type="text"
          placeholder="Search"
        />
      </Box>
      <Box className={classes.results}>
        {data !== null
          ? objArr().map((info) => {
              return (
                <Results
                  profession={info.data.profession}
                  name={info.data.name}
                  number={info.data.cellnumber}
                />
              );
            })
          : "No Freelancers found"}
      </Box>
    </Container>
  );
};

export default SearchComponent;
