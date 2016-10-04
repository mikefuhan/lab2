/* jshint esversion:6 */

// Importing the react component from the react dependency
import React, { Component } from "react";
import Navigation from './Navigation';

// exporting the Component as a default class with the name App
export default class App extends Component {
  render() {
    return (
      /* // This below is a static text ========
      <div>
        hello world reactJS
      </div>
      */ // ====================================
      <div>
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}
