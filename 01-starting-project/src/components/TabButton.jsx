export function TabButton({children})  {
    function handleClick() {
        console.log("Hello Ujeb");
    }

    return (
        <li>
            <button onClick={handleClick}>{children}</button>
        </li>
    );
}