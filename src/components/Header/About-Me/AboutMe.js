import "./AboutMe.css"

export default function AboutMe () {
    return (
        <div className="aboutMe-section">
            <div className="aboutMe-container">
                <div className="section-img">
                    <img src="./img/me/msg317320486-21967_prev_ui.png" alt="" />
                </div>
                <div className="section-text">
                    <h4 className="section-text-head">About Me</h4>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    <ul className="about-info">
                        <li className="about-item">
                            <span>Name:</span>
                            <span>Mohsen Seyedi</span>
                        </li>
                        <li className="about-item">
                            <span>Date of birth:</span>
                            <span>January 01, 1987</span>
                        </li>
                        <li className="about-item">
                            <span>Address:</span>
                            <span>Iran-Tabriz</span>
                        </li>
                        <li className="about-item">
                            <span>Zip code:</span>
                            <span>1000</span>
                        </li>
                        <li className="about-item">
                            <span>Email:</span>
                            <span>mohsenseyedi@gmail.com</span>
                        </li>
                        <li className="about-item">
                            <span>Phone:</span>
                            <span>09305859071</span>
                        </li>
                    </ul>
                    <h4 className="section-text-project"><span>20</span>Project complete</h4>
                    <a href="#" className="section-text-btn">Download cv</a>
                </div>
            </div>
        </div>
    )
}