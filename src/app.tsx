import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Test from './Test';

function render() {
  ReactDOM.render(
  <div>
    <Test/>
    <h2>Hello from React!</h2>
  </div>
  ,document.body);
}

render();