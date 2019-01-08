import React, { Component } from 'react';
import './App.scss';
import './Components/mainContent';
import MainContent from './Components/mainContent';
import PatientInfoBanner from './Components/patientInfoBanner';

class App extends Component {
  render() {
    return (
      <div className="b-roster">
        <div className="b-roster__container"> 
          <PatientInfoBanner/>
          <MainContent/>
        </div>
      </div>      

    );
  }
}

export default App;
