import React, { Component } from 'react';
//import './App.css';
//import Table from "./components/table";
//import FachSelect from './fachselect';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import {Lernreaume} from './Lernreaume';
import {ProfBereich} from './ProfBereich';
import {Ausfall} from './Ausfall';
import {YourLevel} from './YourLevel';
import Stundenplan from './Stundenplan';


function FirstButton() {
  return <Stundenplan />;
}
function SecondButton() {
  return /*<Lernreaume />*/;
}
function ThirdButton() {
  return /*<ProfBereich />*/;
}
function ForthButton() {
  return /*<Ausfall />*/;
}
function FifthButton() {
  return /*<YourLevel />*/;
}


function App() {
  return (
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Stundenplan/"><button>Stundenplan</button></Link>
            </li>
            <li>
              <Link to="/Lernreaume/"><button>Lernräume</button></Link>
            </li>
            <li>
              <Link to="/ProfBereich/"><button>Prof Bereich</button></Link>
            </li>
            <li>
              <Link to="/Ausfall/"><button>Ausfall</button></Link>
            </li>
            <li>
              <Link to="/YourLevel/"><button>YourLevel</button></Link>
            </li>
          </ul>
        </nav>

        <Route path="/Stundenplan/" component={FirstButton} />
        <Route path="/Lernreaume/" component={SecondButton} />
        <Route path="/ProfBereich/" component={ThirdButton} />
        <Route path="/Ausfall/" component={ForthButton} />
        <Route path="/YourLevel/" component={FifthButton} />
      </div>
    </Router>
  );
}

export default App;