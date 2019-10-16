import React from "react";
import GetPost from './pages/getpost';
import ListUser from './pages/listuser';
import DynamicBank from './pages/dynamicbank';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
   
          <li>
            <Link to="/getpost">Manipulate Element</Link>
          </li>
          <li>
            <Link to="/listuser">List User</Link>
          </li>
          <li>
            <Link to="/dynamicbank">Dynamic Bank</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/getpost" component={GetPost} />
        <Route path="/listuser" component={ListUser} />
        <Route path="/dynamicbank" component={DynamicBank} />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}



