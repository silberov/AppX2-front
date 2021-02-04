import "./App.css";
import Login from "./pages/login";
import Register from "./pages/register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AllApplications } from "./pages/allApplications";
import AddApplication1 from "./pages/addApplication";
import AddApplication2 from "./pages/addApplication2";
import { useState } from "react";

function App() {
  const [application, setApplication] = useState(null);
  console.log(application);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/all">
            <AllApplications />
          </Route>
          <Route path="/add/1">
            <AddApplication1 getApp={(app) => setApplication(app)} />
          </Route>
          <Route path="/add/2">
            <AddApplication2 application={application} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
