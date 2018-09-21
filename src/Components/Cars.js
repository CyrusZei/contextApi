import React, { Component, createContext } from 'react';
import { Context } from './../Context/Provider';

class Cars extends Component {
  render() {
    return (
      <Context.Consumer>
        {context => (
          <div>
            <div>
              <div>
                {context.state.cars.map(car => {
                  return <p>{car}</p>;
                })}
              </div>
            </div>
            <input type="text" onChange={e => context.handlecarInput(e)} />
            <button onClick={context.handleAddCar}>Add car</button>
          </div>
        )}
      </Context.Consumer>
    );
  }
}

export default Cars;
