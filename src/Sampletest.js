import React, { Component } from 'react';

class SampleTest extends Component {
  render(){
    return(
      <div>
        <p> Somthing to start called hope</p>
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

export default SampleTest;
