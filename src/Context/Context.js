import React, { Component, createContext } from 'react';

const myContext = createContext();

class Context extends Component {
  render() {
    return <div>context</div>;
  }
}

export default Context;
