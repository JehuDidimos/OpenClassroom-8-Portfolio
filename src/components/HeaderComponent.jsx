import "../styles/components/HeaderStyles.scss";
//import logo from "../assets/LOGO.png"

function HeaderComponent() {
    return ( 

        <div className="header-container">
            
            <div className="icon-container">
            </div>

            <div className="nav-buttons">
                {/* Temporary Routing */}
                <div><a href="/Projects">Projects</a></div>
                <div><a href="/School">School</a></div>
                <div><a href="/Work">Work Experience</a></div>
            </div>
        </div>
     );
}

export default HeaderComponent;