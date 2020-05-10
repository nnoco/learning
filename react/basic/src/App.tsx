import React from 'react';
import './App.css';
import {
    BrowserRouter,
    Link,
} from 'react-router-dom';

import Time from './Time';
import Context from './context';

import NavItem from './NavItem';
import Routes from './Routes';

const navItems = [
    new NavItem('/', 'Home'),
    new NavItem('/time', 'Time'),
    new NavItem('/context', 'Context, Context.Provider/Consumer'),
]

function App() {
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    { navItems.map(navItem => 
                        <li key={navItem.path}><Link to={navItem.path}>{navItem.label}</Link></li>) }
                </ul>
            </nav>

            <Routes />
        </BrowserRouter>
    )
}

export default App;
