import React from 'react';
import './App.css';
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
} from 'react-router-dom';

import Time from './Time';
import Context from './context';

import NavItem from './NavItem';

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

            <Switch>
                <Route path="/" exact>
                    <h1>Hello World!</h1>
                </Route>
                <Route path="/time">
                    <Time/>
                </Route>
                <Route path="/context">
                    <Context />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
