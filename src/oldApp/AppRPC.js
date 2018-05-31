import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

import Toggle from './components/ToggleRPC';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <Toggle>
      {// on and toggle are arguments to the children prop that will be returned from the toggle component
      ({ on, toggle }) => (
        <Fragment>
          {on && <h1>Show Me</h1>}
          <button onClick={toggle}>Show/Hide</button>
        </Fragment>
      )}
    </Toggle>
    {/*  <Toggle
             The prop render is an arrow function that takes the argument "greeting"
            render={greeting => (
              <Fragment>
                <h1>{greeting}</h1>
                <button>Show/Hide</button>
              </Fragment>
            )}
          /> */}
  </div>
);

export default App;
