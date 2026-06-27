import "../styles/components/HeaderStyles.scss";
//import logo from "../assets/LOGO.png"

function HeaderComponent() {
  return (
    <div className="header-container">
      <div className="icon-container"></div>

      <div className="nav-buttons">
        <div>
          <a href="/OpenClassroom-8-Portfolio/#welcome">Home</a>
        </div>
        <div>
          <a href="/OpenClassroom-8-Portfolio/#projects">Projects</a>
        </div>
        <div>
          <a href="/OpenClassroom-8-Portfolio/#school">School</a>
        </div>
        <div>
          <a href="/OpenClassroom-8-Portfolio/#work">Work</a>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
