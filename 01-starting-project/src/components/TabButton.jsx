export default function TabButton({children, isSelected, ...props}) {
    console.log('TabButton Component Executing');
    return (
    <li>
        <button className={isSelected ? 'active' : undefined}  {...props}>{children}
        </button>
    </li>
    );
}