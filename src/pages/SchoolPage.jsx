import "../styles/pages/SchoolPageStyles.scss";
import bannerImage from "../images/utd.jpeg";
import BannerComponent from "../components/BannerComponent";

export default function SchoolPage() {
  return (
    <main className="school-page">
      <h2 className="school-title">Education History</h2>
      <section className="school-grid" aria-label="Education History">
        <BannerComponent imageSource={bannerImage} size="large" />
        <div className="school-info">
          <h3 className="school-name">University of Texas at Dallas</h3>
          <p className="school-degree">Bachelor's in Computer Science</p>
        </div>
      </section>
    </main>
  );
}
