import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerSection from "../components/BannerSection";
import { achievementsData } from "../data/achievementsData";
import "../styles/achievement.css";

export default function Achievement() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredAchievements =
    selectedCategory === "all"
      ? achievementsData
      : achievementsData.filter((item) => item.category === selectedCategory);

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
        <div className="achievement-container">
          <div className="achievement-intro">
            <h2 className="achievement-intro-title">Diplomatic Excellence &amp; Accolades</h2>
            <p className="achievement-intro-desc">
              Since 2011, President University Model United Nations (PUMUN) has represented President University on premier national and international stages, securing top delegations and individual distinctions.
            </p>
          </div>

          <div className="achievement-stats-grid">
            <div className="achievement-stat-card">
              <div className="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                  <path d="M4 22h16" />
                  <path d="M10 14.66V17c0 .55-.45 1-1 1H7c-.55 0-1 .45-1 1v1h12v-1c0-.55-.45-1-1-1h-2c-.55 0-1-.45-1-1v-2.34" />
                  <path d="M6 4h12v6a6 6 0 0 1-12 0V4Z" />
                </svg>
              </div>
              <div className="stat-number">50+</div>
              <div className="stat-label">Accolades &amp; Awards</div>
            </div>

            <div className="achievement-stat-card">
              <div className="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="stat-number">30+</div>
              <div className="stat-label">Delegations Dispatched</div>
            </div>

            <div className="achievement-stat-card">
              <div className="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <div className="stat-number">15+</div>
              <div className="stat-label">International Conferences</div>
            </div>

            <div className="achievement-stat-card">
              <div className="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <div className="stat-number">2011</div>
              <div className="stat-label">Established Legacy</div>
            </div>
          </div>

          <div className="achievement-filter-bar">
            <button
              type="button"
              className={`filter-pill-btn ${selectedCategory === "all" ? "active" : ""}`}
              onClick={() => setSelectedCategory("all")}
            >
              All Achievements
            </button>
            <button
              type="button"
              className={`filter-pill-btn ${selectedCategory === "international" ? "active" : ""}`}
              onClick={() => setSelectedCategory("international")}
            >
              International MUN
            </button>
            <button
              type="button"
              className={`filter-pill-btn ${selectedCategory === "national" ? "active" : ""}`}
              onClick={() => setSelectedCategory("national")}
            >
              National MUN
            </button>
            <button
              type="button"
              className={`filter-pill-btn ${selectedCategory === "institutional" ? "active" : ""}`}
              onClick={() => setSelectedCategory("institutional")}
            >
              Institutional Honors
            </button>
          </div>

          <div className="achievement-grid">
            {filteredAchievements.map((item) => (
              <div className="achievement-card" key={item.id}>
                <div className="achievement-card-top">
                  <span className="achievement-category-tag">{item.categoryLabel}</span>
                  <span className="achievement-card-year">{item.year}</span>
                </div>

                <div className="achievement-award-badge">
                  <svg className="award-badge-icon" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <span className="award-badge-name">{item.award}</span>
                </div>

                <h3 className="achievement-card-conference">{item.conference}</h3>
                <p className="achievement-card-committee">
                  <strong>Council:</strong> {item.committee} ({item.country})
                </p>
                <p className="achievement-card-committee">{item.description}</p>

                <div className="achievement-card-footer">
                  <span className="achievement-delegate-name">{item.delegate}</span>
                  <span className="achievement-delegation-tag">President University</span>
                </div>
              </div>
            ))}
          </div>

          <div className="achievement-cta-card">
            <h3 className="achievement-cta-title">Aspire for Global Leadership</h3>
            <p className="achievement-cta-desc">
              PUMUN conducts comprehensive diplomatic clinics, speech workshops, and simulated international summits to prepare students to compete at world-class MUN conferences.
            </p>
            <a
              href="https://forms.gle/rAPHW3nB4Pf4WYZw9"
              target="_blank"
              rel="noopener noreferrer"
              className="achievement-cta-btn"
            >
              Register for PresMUN 2026 &rarr;
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
