import React from 'react'
import logo from './logo.svg'
import './Header.css'

class Header extends React.Component{
  
  render(){

    return (
        <header className="Header-header">
          <img src={logo} className="Header-logo" alt="logo" />
          <p>
            {this.props.title}
          </p>
          <a
            className="Header-link"
            href={this.props.link}
            target="_blank"
            rel="noopener noreferrer"
           >
           {this.props.action}
           
          </a>
        </header>
    );

  }  
  
}

export default Header
