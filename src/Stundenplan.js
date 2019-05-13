import React, { Component } from 'react';
//import './App.css';
import Table from "./components/table";
import FachSelect from './fachselect';


class Stundenplan extends Component {
  state = {
    feacher: [


     ["Stunde", "Zeit", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"],
     ["1", "Keine", "Ahnung", "", "Informatik", "ITS"],
     ["2", "Ahnung", "Keine", "", "", "ITS"],
     ["3", "ITS", "ITS", "Informatik", "Informatik", "ITS"],
     ["4", "ITS", "ITS", "Informatik", "Informatik", "ITS"],
     ["5", "Test", "Test", "Test", "Test", "Test", "Test"],
     ["6", "Test", "Test", "Test", "Test", "Test", "Test"],
     ["7", "Test", "Test", "Test", "Test", "Test", "Test"],
     ["8", "Test", "Test", "Test", "Test", "Test", "Test"],
     ["9", "Test", "Test", "Test", "Test", "Test", "Test"],
     ["10", "Test", "Test", "Test", "Test", "Test", "Test"],
     ["11", "Test", "Test", "Test", "Test", "Test", "Test"],
     ["12", "Test", "Test", "Test", "Test", "Test", "Test"]
    ]
  };

  handleInsert = (hour, day, modul) => {
    var feacher = this.state.feacher
    feacher[hour].splice(day, 1, modul);
    this.setState({feacher: feacher})
  };

  handleClear = (hour, day) => {
    var feacher = this.state.feacher
    feacher[hour].splice(day, 1, "");
    this.setState({feacher: feacher})
  };

  render(){

    return (
      <React.Fragment>
        <Table 
          feacher={this.state.feacher}
        />
        <FachSelect 
          onInsert= {this.handleInsert}
          onClear = {this.handleClear}
        />
      </React.Fragment>
    );
  }
}

export default Stundenplan;