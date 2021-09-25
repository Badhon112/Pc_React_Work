// import logo from './logo.svg';
import Navbar from "./navbar";
import From from "./From";
import Accor from "./According";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/From">
          <From />
        </Route>
        <Route exact path="/According">
          <Accor />
        </Route>
        {/* <Route path="/">
          <Home />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
