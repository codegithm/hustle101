import './App.css';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Main from './pages/Main/Main';
import Page1 from './pages/Page1/page1';
import Page2 from './pages/Page2/freelancerSignup';
import Gallery from './pages/Gallery/Gallery'



function App() {

  return (
    <div className="App">
      <Gallery />
    </div>
  );
}

export default App;
