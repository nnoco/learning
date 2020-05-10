import React from 'react';

import {
    Switch,
    Route,
    withRouter
} from 'react-router-dom';

import Time from './Time';
import Context from './context';

export default withRouter(({history}) => {
    history.listen((location, action) => {
        console.log(action, location.pathname, location.state);
    });
    
    return (
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
    );
});