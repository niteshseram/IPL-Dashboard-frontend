import "./App.scss";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { TeamPage } from "./pages/TeamPage/TeamPage";
import { MatchPage } from "./pages/MatchPage/MatchPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/teams/:teamName/matches/:year">
              <MatchPage />
            </Route>
            <Route path="/teams/:teamName">
              <TeamPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
