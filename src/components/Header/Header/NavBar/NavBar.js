import "./NavBar.css"


export default function NavBar () {
    return (
        <div id="nav-bar" className="w-full h-[80px] text-white bg-black flex items-center justify-center">
            <div id="container-nav-bar" className="w-[95%] flex items-center">
                <div className="nav-bar-logo">
                    <a href="#" className="text-5xl font-bold font-sans">MOHSEN</a>
                </div>
                <ul id="items-nav-bar" className="w-[95%] pl-40 flex justify-evenly">
                    <li><a href="#" className="item-nav-bar-link active opacity-90 text-3xl font-semibold relative">Home</a></li>
                    <li><a href="#" className="item-nav-bar-link opacity-90 text-3xl font-semibold relative">About</a></li>
                    <li><a href="#" className="item-nav-bar-link opacity-90 text-3xl font-semibold relative">Resume</a></li>
                    <li><a href="#" className="item-nav-bar-link opacity-90 text-3xl font-semibold relative">Services</a></li>
                    <li><a href="#" className="item-nav-bar-link opacity-90 text-3xl font-semibold relative">Skills</a></li>
                    <li><a href="#" className="item-nav-bar-link opacity-90 text-3xl font-semibold relative">Project</a></li>
                    <li><a href="#" className="item-nav-bar-link opacity-90 text-3xl font-semibold relative">My Blog</a></li>
                    <li><a href="#" className="item-nav-bar-link opacity-90 text-3xl font-semibold relative">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}