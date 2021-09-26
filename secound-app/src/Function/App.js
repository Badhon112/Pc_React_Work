import From from "./navbar";
import Accor from "./According";
import Navbar from "./navbar";
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
