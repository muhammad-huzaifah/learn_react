import React from 'react';

import Input from './Input';

export const userData = {
    name: '',
    email: '',
};

export function App() {
    const name = React.useRef();
    const email = React.useRef();

    function handleSaveData() {
        const enterdName = name.current.value;
        const enterdEmail = email.current.value;

        userData.name = enterdName;
        userData.email = email.current.value;

        console.log(userData);
    }

    return (
        <div id="app">
            <Input type="text" label="Your Name" ref={name}/>
            <Input type="email" label="Your E-Mail" ref={email}/>
            <p id="actions">
                <button onClick={handleSaveData}>Save Data</button>
            </p>
        </div>
    );
}

