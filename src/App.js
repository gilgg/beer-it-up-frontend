import "./App.scss";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BeerPage from "./pages/BeerPage";
import BeersPage from "./pages/BeersPage";
import { useState } from "react";

const App = () => {
  const [selectedBeer, setSelectedBeer] = useState(null);

  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/beers" exact>
          <BeersPage setSelectedBeer={setSelectedBeer} />
        </Route>
        <Route path="/beers/:id">
          <BeerPage beer={selectedBeer} />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
