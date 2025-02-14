import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { About } from './about/about';

export default function App() {
    return (
        <BrowserRouter>
            <div className="body bg-white text-dark">
            <header className="container-fluid">
                <nav className="navbar fixed-top navbar-white">
                <div className="navbar-brand">
                    Kotoba
                </div>
                <menu className="navbar-nav">
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                        Home
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="play">
                        Play
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="about">
                        About
                    </NavLink>
                    </li>
                </menu>
                </nav>
            </header>
        
            <Routes>
                <Route path='/' element={<Login />} exact />
                <Route path='/play' element={<Play />} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        
            <footer className="bg-white text-dark-50">
                <div className="container-fluid">
                <span className="text-reset">Author Name(s)</span>
                <a className="text-reset" href="https://github.com/Kaladin1221/startup">
                    Source
                </a>
                </div>
            </footer>
            </div>
        </BrowserRouter>
      );
    
}

function NotFound() {
    return <main className='container-fluid bg-dark text-center text-white'>404: Return to sender. Address unknown.</main>
}
