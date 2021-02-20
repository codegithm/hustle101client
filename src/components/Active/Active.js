import React, { useEffect, useState } from "react";
import { Container, makeStyles } from "@material-ui/core";
import ActiveClient from "../ActiveClient/Active";
import axios from "axios";

const useStyles = makeStyles({
  container: {
    position: "absolute",
    top: 120,
  },
});

const Active = () => {
  const data = JSON.parse(localStorage.getItem("client"));
  const request = JSON.parse(localStorage.getItem("request"));
  const [found, setFound] = useState("");
  let id = "";
  if (data != null) {
    id = data.data._id;
  }
  console.log(id);
  const getRequests = () => {
    axios
      .get(`http://localhost:5000/requests/clientRequests/${id}`)
      .then((res) => {
        console.log(res);
        localStorage.setItem("request", JSON.stringify(res));
      })
      .catch((e) => {
        console.log(e);
        setFound("No requests");
      });
  };

  useEffect(() => {
    getRequests();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getRequests()]);

  const classes = useStyles();
  return (
    <Container className={classes.container}>
      {found !== "No requests"
        ? request.data.data.map((request) => {
            return (
              <ActiveClient
                name={request.profession}
                price={request.budget}
                time={request.duration}
                status={request.status}
              />
            );
          })
        : "No requests"}
    </Container>
  );
};

export default Active;
