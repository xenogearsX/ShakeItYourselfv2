import About from "./screen/About";
import Condition from "./screen/Condition";
import Footer from "./components/Footer";
import Form from "./screen/Form";
import Header from "./components/Header";
import Home from "./screen/Home";
import HowTo from "./screen/HowTo";
import Legal from "./screen/Legal";
import Nav from "./components/Nav";
import Politic from "./screen/Politic";
import Recipe from "./screen/Recipe";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import RecipesList from "./screen/RecipesList";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cocktails/:id" component={Recipe} />
        <Route path="/form" component={Form} />
        <Route path="/about" component={About} />
        <Route path="/howto" component={HowTo} />
        <Route path="/legal" component={Legal} />
        <Route path="/condition" component={Condition} />
        <Route path="/politic" component={Politic} />
        <Route path="/recipes" component={RecipesList} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
