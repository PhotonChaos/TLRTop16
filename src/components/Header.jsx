import './Header.css'

export default function Header() {
    return (
        <div className="bg-amber-200 flex p-4 gap-5 ">
            <div className="p-1">
                <h1 className="text-4xl">TLRTop16</h1>
            </div>
            <div className="p-1">
                <a className="text-2xl" href="#">Leaders</a>
            </div>
            <div className="p-1">
                <a className="text-2xl" href="#">Tournaments</a>
            </div>
        </div>
    )
}