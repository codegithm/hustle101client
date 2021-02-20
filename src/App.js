import "./App.css";
import Main from "./pages/Main/Main";
import Register from "./pages/Register/Regiser";
import Hustle from "./pages/Hustle/Hustle";
import Login from "./pages/Login/Login";
import Gallery from "./pages/Gallery/Gallery";
import Search from "./pages/Search/Search";
import Request from "./pages/Request/Request";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Hustle} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/request" component={Request} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
