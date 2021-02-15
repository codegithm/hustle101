import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Page2 from "./pages/Page2/FreelancerSignup";
import Gallery from "./pages/Gallery/Gallery";
import Login from "./pages/Login/Login";
import Hustle from "./pages/Hustle/Hustle";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Hustle} />
          <Route path="/gallery/freelancer" exact component={Gallery} />
          <Route path="/freelance/signp" exact component={Page2} />
          <Route path="/main/freelancer" exact component={Main} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
