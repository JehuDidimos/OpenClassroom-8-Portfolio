import "../styles/pages/WorkExperiencePageStyles.scss";
import bannerImage from "../images/pnc.jpg";
import bannerImage2 from "../images/pnc2.jpg";
import BannerComponent from "../components/BannerComponent";

export default function WorkExperiencePage() {
  return (
    <main className="work-page">
      <h2 className="work-title">Work History</h2>
      <section className="work-grid" aria-label="Education History">
        <BannerComponent imageSource={bannerImage} size="large" />
        <div className="work-info">
          <h3 className="work-name">PNC Bank</h3>
          <p className="work-degree">Intern/Technology Development Program 2021 - 2024</p>
          <p className="description">Software Engineering Intern at PNC Bank, where I gained hands-on experience with Spring Boot backend development, CI/CD workflows, and troubleshooting enterprise deployment tools such as OpenShift and Jenkins. This experience strengthened my understanding of backend systems, production support, and modern software delivery practices.</p>
        </div>
        <BannerComponent imageSource={bannerImage2} size="large" />
        <div className="work-info">
          <h3 className="work-name">PNC Bank</h3>
          <p className="work-degree"> Software Engineer 2024 - Present</p>
          <p className="description">Full-Time Software Engineer at PNC Bank, with experience in frontend development, enterprise web applications, and micro app architecture. I use monitoring and troubleshooting tools such as Dynatrace and LogScale to support application reliability, investigate production issues, and improve system visibility.</p>
        </div>
      </section>
    </main>
  );
}