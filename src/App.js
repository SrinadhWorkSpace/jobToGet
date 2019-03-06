import React, { Component } from 'react';
import './App.css';
import SampleTest from './Sampletest.js';

class App extends Component {
  render() {
    return (
      <div className="AppOfAll">
        <SampleTest/>
        <table>
          <tr><td id="UserNameToFetch">UserName: <input type ="text" /></td></tr>
          <tr><td id="IdToFetch">Password: <input type ="password" /></td></tr>
          <tr>
            <td><button onClick="{this.validatingData}">Submit</button>&nbsp;&nbsp;&nbsp;&nbsp;<button>Reset</button></td>
          </tr>
        </table>
      </div>
    );
  }
}

export default App;
