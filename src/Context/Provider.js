import React, { Component, createContext } from 'react';
const Context = createContext();

class Provider extends Component {
  constructor() {
    super();

    this.state = { cars: [], car: '' };
  }

  handlecarInput = e => {
    this.setState({ car: e.target.value });
  };

  handleAddCar = () => {
    const state = { ...this.state };
    state.cars.push(this.state.car);
    this.setState({ ...state });
  };
  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          handlecarInput: this.handlecarInput,
          handleAddCar: this.handleAddCar
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
export { Provider, Context };
