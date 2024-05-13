export default function Button({type, children, onClick}) {
    return (
        <button onClick={onClick} className={`${type}`}>{children}</button>
    )
}
