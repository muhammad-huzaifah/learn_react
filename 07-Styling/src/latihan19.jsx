import React from 'react';

// don't change the Component name "App"
export default function App() {
    const [isRed, setIsRed] = React.useState(false);

    function toggleColor () {
        setIsRed(prev => !prev);
    }
    return (
        <div>
            <p style={{color: isRed ? "red" : "white"}}>Style me!</p>
            <button onClick={toggleColor}>Toggle style</button>
        </div>
    );
}
