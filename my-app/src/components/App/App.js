import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Main from "../../pages/Main";
import News from "../../pages/News";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/news/:id" component={News} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
