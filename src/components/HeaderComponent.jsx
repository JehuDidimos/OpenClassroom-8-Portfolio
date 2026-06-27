import "../styles/components/HeaderStyles.scss";
//import logo from "../assets/LOGO.png"

function HeaderComponent() {
  return (
    <div className="header-container">
      <div className="icon-container"></div>

      <div className="nav-buttons">
        <div>
          <a href="#welcome">Home</a>
        </div>
        <div>
          <a href="#projects">Projects</a>
        </div>
        <div>
          <a href="#school">School</a>
        </div>
        <div>
          <a href="#work">Work</a>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
