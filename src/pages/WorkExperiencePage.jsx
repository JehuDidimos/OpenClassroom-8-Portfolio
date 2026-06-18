import "../styles/pages/WorkExperiencePageStyles.scss";
import bannerImage from "../images/pnc.jpg";
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
        </div>
        <BannerComponent imageSource={bannerImage} size="large" />
        <div className="work-info">
          <h3 className="work-name">PNC Bank</h3>
          <p className="work-degree"> Software Engineer 2024 - 2025</p>
        </div>
      </section>
    </main>
  );
}