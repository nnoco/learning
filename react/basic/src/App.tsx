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

function App() {
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li>
                        <Link to="/">/</Link>
                    </li>
                    <li>
                        <Link to="/time">Time(useEffect Clean Up)</Link>
                    </li>
                    <li>
                        <Link to="/context">Context</Link>
                    </li>
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
