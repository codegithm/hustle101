import React, { useContext } from "react";
import {
  FormControl,
  Container,
  Typography,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Select, MenuItem, Button, Badge } from "@material-ui/core";
import Avatar from "../../components/Avatar/Avatar";
import { Person, AddAPhoto } from "@material-ui/icons";
import axios from "axios";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: "30px",
    fontWeight: "bold",
    position: "relative",
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
  },
  badge: {
    margin: theme.spacing(0),
  },
}));

const Signup = () => {
  const [title, selectTitle] = React.useState("");
  const [profession, setProfession] = React.useState("");
  const [name, setName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [idNo, setIdNo] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [city, setCity] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [profile, setProfile] = React.useState("")
  const [lable, setLable] = React.useState("");
  const changeTitle = (e) => {
    selectTitle(e.target.value);
    setProfession(e.target.value);
  };
  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeSurname = (e) => {
    setSurname(e.target.value);
  };
  const changeNumber = (e) => {
    setNumber(e.target.value);
  };
  const changeIdNumber = (e) => {
    setIdNo(e.target.value);
  };
  const changeCity = (e) => {
    setCity(e.target.value);
  };
  const changeCountry = (e) => {
    setCountry(e.target.value);
  };
  const changeImage = (e) => {
    setProfile(e.target.value);
  };
  const changeGender = (e) => {
    setGender(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const history = useHistory();

  const updateProfile = (e) => {
    const user = {
      name: name,
      surname: surname,
      cellnumber: number,
      gender: gender,
      email: email,
      password: password,
      profession: profession,
      idnumber: idNo,
      picture: "",
      city: city,
      country: country,
    };

    e.preventDefault();
    axios
      .post("http://localhost:5000/users/register", user)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        if (res.status === 201) {
          history.push("/login");
        }
      })
      .catch((e) => {
        console.log(e);
        setLable("Email Already Exists");
      });
  };
  const classes = useStyles();
  return (
    <Container className={classes.container} maxWidth="sm">
      <Typography className={classes.heading}>
        a Freelancer? a Hustler!
      </Typography>
      <Typography>BUILD YOUR PROFILE</Typography>
      <Badge
        badgeContent={<AddAPhoto />}
        overlap="circle"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Avatar type="circle" children={<Person />} />
      </Badge>
      <FormControl>
        <TextField
          onChange={changeName}
          className={classes.field}
          id="name"
          label="Name"
          color="secondary"
          variant="outlined"
        />
        <TextField
          onChange={changeSurname}
          className={classes.field}
          id="surname"
          label="Surname"
          color="secondary"
          variant="outlined"
        />
        <TextField
          onChange={changeNumber}
          className={classes.field}
          id="cellphone"
          label="Cellphone"
          color="secondary"
          variant="outlined"
        />
        <TextField
          onChange={changeIdNumber}
          className={classes.field}
          id="idnumber"
          label="ID Number"
          color="secondary"
          variant="outlined"
        />
        <TextField
          onChange={changeCity}
          className={classes.field}
          id="city"
          label="City"
          color="secondary"
          variant="outlined"
        />
        <TextField
          onChange={changeCountry}
          className={classes.field}
          id="Country"
          label="Country"
          color="secondary"
          variant="outlined"
        />
        <TextField
          onChange={changeGender}
          className={classes.field}
          id="gender"
          label="Gender"
          color="secondary"
          variant="outlined"
        />
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
          <MenuItem value={"Full stack dev"}>Full stack developer</MenuItem>
          <MenuItem value={"Frontend dev"}>Frontend developer</MenuItem>
          <MenuItem value={"Backend dev"}>Backend developer</MenuItem>
          <MenuItem value={"Game dev"}>Game developer</MenuItem>
          <MenuItem value={"Native dev"}>Native developer</MenuItem>
        </Select>
        <p style={{ color: "red" }}>{lable}</p>
        <TextField
          onChange={changeEmail}
          className={classes.field}
          id="email"
          label="Email"
          color="secondary"
          variant="outlined"
        />
        <TextField
          onChange={changePassword}
          className={classes.field}
          id="password"
          label="Password"
          color="secondary"
          variant="outlined"
        />
        <Button
          onClick={updateProfile}
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

export default Signup;
