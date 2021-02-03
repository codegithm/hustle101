import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import MainClient from './pages/clientSide/Main/Main';
import Page1 from './pages/Page1/page1';
import Page2 from './pages/Page2/FreelancerSignup';
import Gallery from './pages/Gallery/Gallery';
import Register from './pages/clientSide/Register/Regiser';
import Search from './pages/clientSide/Search/Search';




function App() {

  return (
    <Router>
      <div className="App">
          <Switch>
            <Route path="/" exact component={Page1} />
            <Route path='/client/signup' exact component={Register} />
            <Route path='/main/client' exact component={MainClient} />
            <Route path='/gallery/freelancer' exact component={Gallery} />
            <Route path="/freelance/signp" exact component={Page2} />
            <Route path='/search' exact component={Search} />
            <Route path='/main/freelancer' exact component={Main} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
