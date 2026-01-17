function Header() {
    return (
        <div className="flex justify-between px-24 py-4 border-b border-gray-300">
            <div className="text-3xl font-extrabold italic">
                PacePH
            </div>
            <div className="flex gap-12 justify-center items-center text-lg">
                <h1>HOME</h1>
                <h1>UPCOMING RACES</h1>
                <h1>LOCATIONS</h1>
                <h1>CONTACT</h1>
            </div>
        </div>
    )
}

export default Header