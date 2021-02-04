import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/login";
import Register from "./pages/register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ApplicationCard from "./components/applicationCard";
import { AllApplications } from "./pages/allApplications";
const applicationData = {
  id: 1,
  userId: 1,
  companyId: 1,
  statusId: 3,
  position: "aaa",
  linkToPosting: "aa",
  linkToCV: "aa",
  linkToLetter: "aaa",
  notes: "srdgf21231drx",
  CreatedAt: "2021-02-03T22:00:32.507Z",
  UpdatedAt: "2021-02-04T11:41:11.205Z",
  Status: {
    name: "not submited",
  },
  company: {
    name: "wix",
    homepage: "www.wix-home.com",
    logo: null,
  },
};

function App() {
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
          <Route path="/appc">
            <AllApplications />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
