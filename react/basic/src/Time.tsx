import React, { useEffect } from 'react';

export default () => {
    const [time, setTime] = React.useState(new Date());

    React.useEffect(() => {
        let interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return function clean() {
            clearInterval(interval);
        }
    }, []);

    return (
        <span>{time.toISOString()}</span>
    );
}