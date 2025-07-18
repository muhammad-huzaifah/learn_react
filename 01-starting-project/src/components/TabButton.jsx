export function TabButton({children, onSelect, isSelected})  {
    console.log('TABBUTTON COMPONENT EXECUTED');

    return (
        <li>
            <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
        </li>
    );
}