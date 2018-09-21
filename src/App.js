import React, { Component } from 'react';
import './App.css';
import { Provider } from './Context/Provider';
import Cars from './Components/Cars';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <h1>Luxury Cars</h1>
          <Cars />
        </div>
      </Provider>
    );
  }
}

export default App;
