import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import App from "./components/Post_Login/components/App";
import Login from "./components/Login/Login";
import WhoWeAre from "./components/Login/WhoWeAre/WhoWeAre";
import LayoutBody from "./components/Post_Login/LayoutBody/LayoutBody";
import Dashboard from "./components/Post_Login/components/Dashboard";
import DefinitionList from "./components/Post_Login/components/DefinitionList";
import DefinitionDetail from "./components/Post_Login/components/DefinitionDetail";
import NISTChecklist from "./components/Post_Login/components/NISTChecklist";

library.add(fab);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/about">
          <WhoWeAre />
        </Route>
        <LayoutBody>
          {/* Enter Post Login Components Here */}

          {/* <Route path="/app">
            <App />
          </Route> */}
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/deflist">
            <DefinitionList />
          </Route>
          <Route path="/defdet/:id">
            <DefinitionDetail />
          </Route>
          <Route path="/nistlist">
            <NISTChecklist />
          </Route>
        </LayoutBody>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
