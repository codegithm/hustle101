import React, { useContext } from "react";
import {
  Container,
  makeStyles,
  Badge,
  Typography,
  Box,
  Button,
} from "@material-ui/core";
import Avatar from "../../components/Avatar/Avatar";
import { green, red } from "@material-ui/core/colors";
import { ToggleOn, ToggleOff, ImageOutlined } from "@material-ui/icons";
import { ProfileContext } from "../Context/ProfileContext/ProfileContext";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "auto",
    position: "absolute",
    top: 120,
    marginBottom: "50px",
  },
  badge: {
    position: "relative",
    left: "30px",
    bottom: "30px",
  },
  available: {
    height: "40px",
    width: "100%",
    backgroundColor: green[200],
    borderRadius: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "15px",
    paddingRight: "15px",
  },
  sets: {
    display: "flex",
    marginLeft: "6px",
    marginRight: "6px",
  },
  btn: {
    marginTop: "35px",
  },
}));

const Profile = (props) => {
  const data = localStorage.getItem("user");
  const user = JSON.parse(data);
  const classes = useStyles();
  const toggle = props.toggleState;
  const history = useHistory();

  const gallery = () => {
    history.push("/gallery/freelancer");
  };
  return (
    <Container className={classes.container}>
      <Avatar type="circle" />
      <Badge
        className={classes.badge}
        badgeContent=" "
        overlap="circle"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        color={toggle === "on" ? "secondary" : "primary"}
      ></Badge>
      <Typography style={{ fontSize: "20px", fontWeight: "bold" }} variant="h4">
        {user.data.data.name}
      </Typography>
      <Typography variant="h7">{user.data.data.cellnumber}</Typography>
      <Typography variant="h7">{user.data.data.idnumber}</Typography>
      <Typography variant="h7">{user.data.data.city}</Typography>
      <Typography variant="h7">{user.data.data.gender}</Typography>
      <Typography variant="h7">{user.data.data.profession}</Typography>
      <Box
        style={{
          backgroundColor: toggle === "on" ? green[100] : red[100],
        }}
        className={classes.available}
      >
        <Box className={classes.sets}>
          {toggle === "on" ? (
            <Typography>Available</Typography>
          ) : (
            <Typography>Not Available</Typography>
          )}
          {toggle === "on" ? (
            <ToggleOn onClick={props.toggle} style={{ color: "green" }} />
          ) : (
            <ToggleOff onClick={props.toggle} style={{ color: "red" }} />
          )}
        </Box>

        <Box className={classes.sets}>
          <Typography>Gallery</Typography>
          <Box onClick={gallery}>
            <ImageOutlined />
          </Box>
        </Box>
      </Box>

      <Button className={classes.btn} variant="contained" color="secondary">
        Edit profile
      </Button>
    </Container>
  );
};

export default Profile;
