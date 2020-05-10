import React from 'react';

import MyContext from './MyContext';

export default () => {
    return (
        <MyContext.Consumer>
            {({value, setValue}) => (<li>
                {value}
                <button onClick={() => setValue('')}>X</button>
            </li>)}
        </MyContext.Consumer>
    )
}