import './page1.css';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
  header : {
    fontSize : '40px'
  },
  button : {
    margin: "10px"
  }
})

function Page1() {
  const classes = useStyle()
  return (
    <div className="App">
      <Typography className={classes.header} variant="h1">What are you?</Typography>
      <img alt="freelancer" src="/images/bro.jpg" />
     <Button className={classes.button} color="secondary" variant = "contained">a Freelancer</Button>
     <img alt="client" src="/images/pana.jpg" />
     <Button className={classes.button} color="secondary" variant = "contained">a Client</Button>
    </div>
  );
}

export default Page1;