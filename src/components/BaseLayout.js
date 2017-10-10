import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';


export default class BaseLayout extends Component {

  render(){
    return(
      <div>
        <ul className="nav">
          <li className="nav-item">
            <Link to={`/`} className="nav-link">
              BankShot
            </Link>
          </li>
          <li className="nav-item">
            <Link to={`/users`} className="nav-link">
              Users
            </Link>
          </li>
        </ul>
        {this.props.children}
      </div>

    )
  }


}
