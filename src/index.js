/* eslint-disable no-console */
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
  render () {
    return (
      <div>Yo</div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);
