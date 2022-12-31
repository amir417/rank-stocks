import React from 'react'
import './home.css'
import logo from '../../assets/rankstocksthumbnail.png';

function home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Rank Stocks is currently in progress!
        </p>
        <p>
          Author: <a target="_blank" className="personal-link" href='https://www.linkedin.com/in/amirrezaaazam/'>Amirreza Aazam</a>
        </p>
        <a
          className="App-link"
          href="https://amirrezaazam.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          checkout my personal portfolio in the meantime
        </a>
      </header>
    </div>
  )
}

export default home