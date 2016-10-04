/* jshint esversion:6 */

import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Navigation extends Component {
  render() {
    return(
      <div>
        <ul>
          <li><Link to="Dashboard">Dashboard</Link></li>
          <li><Link to="login">Login</Link></li>
        </ul>
      </div>
    );
  }
}
