const NavBar = () => {
    return (
        <div className="NavBar">
            <div className="logo-container">
                <img className="logo" src="/laptop.gif" alt="Laptop and coffee levitating" />
            </div>
            <div className="btn-container">
                <button className="btn">Home</button>
                <button className="btn">About</button>
                <button className="btn">Skills</button>
                <button className="btn">Projects</button>
                <button className="btn">Contact</button>
            </div>
        </div>
    )
}

export default NavBar
