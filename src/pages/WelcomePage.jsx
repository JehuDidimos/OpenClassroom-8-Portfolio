import ButtonComponent from "../components/ButtonComponent";
import "../styles/pages/WelcomePageStyles.scss";

export default function WelcomePage() {
  return (
    <section className="welcome-panel" aria-labelledby="welcome-title">
      <p className="eyebrow">Jehu Didimos Portfolio</p>
      <h1 id="welcome-title">Fullstack Portfolio</h1>
      <p className="intro">
        This starter page is ready for your portfolio projects, case studies,
        and class work. Build from here and make it yours.
      </p>
      <div className="actions">
        <ButtonComponent></ButtonComponent>
      </div>
    </section>
  );
}
