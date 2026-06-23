import ButtonComponent from "../components/ButtonComponent";
import "../styles/pages/WelcomePageStyles.scss";

export default function WelcomePage() {
  return (
    <section className="welcome-panel" aria-labelledby="welcome-title">
      <p className="eyebrow">Jehu Didimos Portfolio</p>
      <h1 id="welcome-title">Fullstack Portfolio</h1>
      <p className="intro">
        Welcome, I’m Jehu Didimos, a software developer focused on creating responsive, user-friendly, and well-structured web applications. This portfolio showcases my experience across front-end and back-end development, including projects built with React, JavaScript, Node.js, Express, MongoDB, HTML, CSS, and Sass.
      </p>
      <div className="actions">
        <ButtonComponent></ButtonComponent>
      </div>
    </section>
  );
}
