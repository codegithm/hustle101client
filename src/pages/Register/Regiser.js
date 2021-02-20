import React, { useContext, useState } from "react";
import {
  FormControl,
  Container,
  Typography,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Badge } from "@material-ui/core";
import Avatar from "../../components/Avatar/Avatar";
import { Person, AddAPhoto } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: "30px",
    fontWeight: "bold",
    position: "relative",
    color: "white",
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
    top: 0,
    backgroundColor: "#325340",
    width: "100%",
    height: "auto",
  },
  sub: {
    color: "white",
  },
}));

const Register = () => {
  const [exist, setExist] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const client = {
    name: name,
    surname: surname,
    cellphone: cellphone,
    email: email,
    password: password,
    picture: "",
  };
  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeSurname = (e) => {
    setSurname(e.target.value);
  };
  const changeCellphone = (e) => {
    setCellphone(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const history = useHistory();
  const submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/client/register", client)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        if (res.status === 201) {
          localStorage.setItem("client", JSON.stringify(res.data));
          history.push("/login");
        }
      })
      .catch((e) => {
        console.log(e);
        setExist("This email already exists");
      });
  };
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography color="#fff" className={classes.heading}>
        The hustler’s client!
      </Typography>
      <Typography className={classes.sub}>
        LET FREELANCERS KNOW MORE ABOUT YOU - BUILD YOUR PROFILE
      </Typography>
      <Badge
        badgeContent={<AddAPhoto />}
        overlap="circle"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Avatar variant="circular" children={<Person />} />
      </Badge>
      <FormControl>
        <TextField
          onChange={changeName}
          style={{ backgroundColor: "#fff" }}
          className={classes.field}
          id="name"
          label="Name"
          color="secondary"
          variant="outlined"
        />
        <TextField
          onChange={changeSurname}
          style={{ backgroundColor: "#fff" }}
          className={classes.field}
          id="surname"
          label="Surname"
          color="secondary"
          variant="outlined"
        />
        <TextField
          onChange={changeCellphone}
          style={{ backgroundColor: "#fff" }}
          className={classes.field}
          id="cellphone"
          label="Cellphone"
          color="secondary"
          variant="outlined"
        />
        <p style={{ color: "red" }}>{exist}</p>
        <TextField
          onChange={changeEmail}
          style={{ backgroundColor: "#fff" }}
          className={classes.field}
          id="email"
          label="Email"
          color="secondary"
          variant="outlined"
        />
        <TextField
          onChange={changePassword}
          style={{ backgroundColor: "#fff" }}
          className={classes.field}
          id="password"
          label="Password"
          color="secondary"
          variant="outlined"
        />

        <Button
          onClick={submit}
          variant="contained"
          className={classes.field}
          color="secondary"
        >
          Save
        </Button>
      </FormControl>
    </Container>
  );
};

export default Register;
