import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return (
        <div className="body bg-white text-dark">
          <header className="container-fluid">
            <nav className="navbar fixed-top navbar-white">
              <div className="navbar-brand">
                Kotoba
              </div>
              <menu className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="index.html">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="play.html">
                    Play
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">
                    About
                  </a>
                </li>
              </menu>
            </nav>
          </header>
    
          <main>App components go here</main>
    
          <footer className="bg-white text-dark-50">
            <div className="container-fluid">
              <span className="text-reset">Author Name(s)</span>
              <a className="text-reset" href="https://github.com/Kaladin1221/startup">
                Source
              </a>
            </div>
          </footer>
        </div>
      );
    
}
