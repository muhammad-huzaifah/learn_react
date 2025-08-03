export function TabButton({children, isSelected, ...props})  {
    console.log('TABBUTTON COMPONENT EXECUTED');

    return (
        <li>
            <button className={isSelected ? 'active' : undefined} {...props}>
                {children}
            </button>
        </li>
    );
}