import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import TeamDetails from "./components/TeamDetails/TeamDetails";

function App() {

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/team/:teamId">
          <TeamDetails />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
