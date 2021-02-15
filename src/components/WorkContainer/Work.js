import React, { useEffect } from "react";
import { Container, makeStyles } from "@material-ui/core";
import Works from "../Work/Work";
import axios from "axios";

const useStyles = makeStyles({
  container: {
    position: "absolute",
    top: 170,
  },
});

const Work = () => {
  const [found, setFound] = React.useState("");
  const data = JSON.parse(localStorage.getItem("user"));
  let id = "";
  if (data != null) {
    id = data.data.data._id;
  }
  console.log(id);
  console.log(data);
  const getRequests = () => {
    axios
      .get(`http://localhost:5000/requests/freelancerRequests/${id}`)
      .then((res) => {
        console.log(res);
        localStorage.setItem("request", JSON.stringify(res));
      })
      .catch((e) => {
        console.log(e);
        setFound("No requests found");
      });
  };

  useEffect(() => {
    getRequests();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getRequests()]);

  const requests = JSON.parse(localStorage.getItem("request"));
  const arr = [requests];
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      {found === "No requests found"
        ? "No requests found"
        : arr[0].data.data[0] !== []
        ? arr[0].data.data.map((req) => {
            return (
              <Works
                price={req.budget}
                description={req.description}
                title={data.data.data.profession}
                time={req.duration}
              />
            );
          })
        : "..."}
    </Container>
  );
};

export default Work;
