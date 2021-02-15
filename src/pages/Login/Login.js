import React, { useState } from "react";
import {
  Container,
  FormControl,
  TextField,
  Box,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import axios from "axios";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  login: {
    position: "fixed",
    top: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: "30px",
    margin: "10px",
  },
  form: {
    margin: "6px",
  },
});
export default function Login() {
  const classes = useStyles();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [wrong, setWrong] = useState();

  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const login = {
    email: email,
    password: password,
  };

  const history = useHistory();
  const submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/users/login", login)
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          history.push("/main/freelancer");
          localStorage.setItem("user", JSON.stringify(res));
        } else if (res.status === 404) {
          setWrong("Incorrect credentials");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <Container className={classes.container}>
      <Box className={classes.login}>
        <Typography variant="h1" className={classes.text}>
          Login
        </Typography>
        <svg
          width="38"
          height="31"
          viewBox="0 0 138 131"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M86.25 88.8929C86.25 91.4778 84.3202 93.5714 81.9375 93.5714H56.0625C53.6798 93.5714 51.75 91.4778 51.75 88.8929V74.8571H0V116.964C0 124.45 6.0375 131 12.9375 131H125.062C131.963 131 138 124.45 138 116.964V74.8571H86.25V88.8929ZM125.062 28.0714H103.5V14.0357C103.5 6.55 97.4625 0 90.5625 0H47.4375C40.5375 0 34.5 6.55 34.5 14.0357V28.0714H12.9375C6.0375 28.0714 0 34.6214 0 42.1071V65.5H138V42.1071C138 34.6214 131.963 28.0714 125.062 28.0714ZM86.25 28.0714H51.75V18.7143H86.25V28.0714Z"
            fill="#325340"
          />
        </svg>
      </Box>

      <FormControl>
        <p>{wrong}</p>
        <TextField
          onChange={changeEmail}
          className={classes.form}
          id="email"
          label="Email"
          color="secondary"
          variant="outlined"
        />
        <TextField
          onChange={changePassword}
          className={classes.form}
          id="password"
          label="Password"
          color="secondary"
          variant="outlined"
        />
        <Button
          onClick={submit}
          className={classes.form}
          variant="contained"
          color="secondary"
        >
          Login
        </Button>
      </FormControl>
    </Container>
  );
}
