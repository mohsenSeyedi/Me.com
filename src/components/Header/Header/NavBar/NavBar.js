import "./NavBar.css"


export default function NavBar () {
    return (
        <div className="nav-bar">
            <div className="container-nav-bar">
                <div className="nav-bar-logo">
                    <a href="#">MOHSEN</a>
                </div>
                <ul className="items-nav-bar">
                    <li><a href="#" className="active">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Resume</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Project</a></li>
                    <li><a href="#">My Blog</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}