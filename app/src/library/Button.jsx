export default function Button({ type, children, onClick, className = '' }) {

    return <button
        type={type}
        className={`w-[15em] h-16 bg-blue-800 text-white text-lg font-medium py-2 px-6 m-3 max-w-96 rounded-full border-2 border-blue-950 hover:bg-blue-400 transition-all duration-200 cursor-pointer ${className}`}
        onClick={onClick}>{children}</button>
}