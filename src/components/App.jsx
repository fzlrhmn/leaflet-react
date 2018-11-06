import React, { Component } from 'react';
import Maps from './map';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <Maps/>
        </div>
      </div>
    );
  }
}

export default App;
