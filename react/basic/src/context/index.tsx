import React from 'react';

import Child1 from './Child1';
import MyContext from './MyContext';

export default () => {
    const [value, setValue] = React.useState('');
    return (
        <div>
            <input 
                onInput={(e: React.FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value)} 
                placeholder="여기에 입력"
            />
            <MyContext.Provider value={{value, setValue}}>
                <Child1 />
            </MyContext.Provider>
            

        </div>        
    )
}