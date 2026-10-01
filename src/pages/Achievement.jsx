import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerSection from "../components/BannerSection";
import "../styles/achievement.css";

export default function Achievement() {
  return (
    <>
      <Header />

      <BannerSection
        title="Achievement"
        variant="solid"
        height="40vh"
        style={{ backgroundColor: "#320000" }}
      />

      <div className="achievement-page-wrapper">
        <div className="achievement-empty-container">
          <div className="achievement-empty-box">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="empty-trophy-icon"
            >
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
              <path d="M4 22h16" />
              <path d="M10 14.66V17c0 .55-.45 1-1 1H7c-.55 0-1 .45-1 1v1h12v-1c0-.55-.45-1-1-1h-2c-.55 0-1-.45-1-1v-2.34" />
              <path d="M6 4h12v6a6 6 0 0 1-12 0V4Z" />
            </svg>
            <h2 className="achievement-empty-title">Coming Soon</h2>
            <p className="achievement-empty-desc">
              This section is currently being updated. Achievements and delegation honours will be published soon.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
