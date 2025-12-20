export default function Button ({ children, ...props }) {
    return (
        <button className="bg-amber-400 hover:bg-amber-700 px-4 py-2 font-semibold uppercase rounded text-stone-900 " {...props}
        >
         {children}
        </button>
    );
}