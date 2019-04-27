import React from 'react';

const Header = (props) => {
    return (
        <nav className='navbar navbar-default'>
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand" href="/">Outspoke.io</a>
                </div>

                <ul className='nav navbar-nav'>
                    <li><a href="/">{props.homeLink}</a></li>
                    <li><a href="/">Profile</a></li>
                </ul>
            </div>
        </nav>
    );
  }
  
  export default Header;
  