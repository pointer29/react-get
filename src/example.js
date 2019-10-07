import React from "react";
import GetPost from './pages/getpost';
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
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
  
        <Route path="/getpost" component={GetPost} />
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



