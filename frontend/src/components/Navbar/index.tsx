// Copyright (c) 2022 Paulo Ricardo
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import React from 'react';
import {ReactComponent as GithubIcon} from 'assets/img/github.svg'
import './styles.css'

function NavBar(){

    return (
    <header>
    <nav className="container">
        <div className="dsmovie-nav-content">
            <h1>DSMovie</h1>
            <a href="https://github.com/paulodev88" target="_blank" rel="noreferrer">
                <div className="dsmovie-contact-container">
                    <GithubIcon />
                    <p className="dsmovie-contact-link">/paulodev88</p>
                </div>
            </a>
        </div>
    </nav>
</header>
  );
}

export default NavBar;