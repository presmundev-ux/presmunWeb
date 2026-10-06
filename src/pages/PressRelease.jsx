import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerSection from "../components/BannerSection";
import {
  pressReleasesData,
  photoReleasesData,
  mediaAssetsData,
} from "../data/pressReleasesData";
import "../styles/pressRelease.css";

export default function PressRelease() {
  const [activeTab, setActiveTab] = useState("all");

  const featuredRelease = pressReleasesData.find((item) => item.featured) || pressReleasesData[0];
  const gridReleases = pressReleasesData.filter((item) => item.id !== featuredRelease?.id);

  const filteredReleases =
    activeTab === "all"
      ? gridReleases
      : gridReleases.filter((item) => {
          if (activeTab === "statements") return item.category === "official-statement";
          if (activeTab === "reports") return item.category === "event-report";
          return true;
        });

  return (
    <>
      <Header />

      <BannerSection
        title="Press Release"
        variant="solid"
        height="40vh"
        style={{ backgroundColor: "#320000" }}
      />

      <div className="press-release-page">
        <div className="press-release-container">
          <div className="pr-hub-header">
            <h2 className="pr-hub-title">PresMUN Press &amp; Media Centre</h2>
            <p className="pr-hub-desc">
              The official repository for PresMUN press releases, conference communiqués, event photo reports, high-resolution media assets, and press office contacts.
            </p>
          </div>

          <div className="pr-nav-tabs">
            <button
              type="button"
              className={`pr-tab-btn ${activeTab === "all" ? "active" : ""}`}
              onClick={() => setActiveTab("all")}
            >
              All Releases &amp; Media
            </button>
            <button
              type="button"
              className={`pr-tab-btn ${activeTab === "statements" ? "active" : ""}`}
              onClick={() => setActiveTab("statements")}
            >
              Official Communiqués
            </button>
            <button
              type="button"
              className={`pr-tab-btn ${activeTab === "reports" ? "active" : ""}`}
              onClick={() => setActiveTab("reports")}
            >
              Event Reports
            </button>
            <button
              type="button"
              className={`pr-tab-btn ${activeTab === "photos" ? "active" : ""}`}
              onClick={() => setActiveTab("photos")}
            >
              Photo Releases
            </button>
            <button
              type="button"
              className={`pr-tab-btn ${activeTab === "assets" ? "active" : ""}`}
              onClick={() => setActiveTab("assets")}
            >
              Media Assets &amp; Kit
            </button>
          </div>

          {(activeTab === "all" || activeTab === "statements" || activeTab === "reports") && featuredRelease && (
            <div className="pr-featured-release">
              <div className="pr-featured-image">
                <img
                  src={featuredRelease.image}
                  alt={featuredRelease.title}
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
              <div className="pr-featured-content">
                <div className="pr-meta-row">
                  <span className="pr-badge">{featuredRelease.categoryLabel}</span>
                  <span className="pr-meta-dot">&bull;</span>
                  <span className="pr-meta-date">{featuredRelease.date}</span>
                  <span className="pr-meta-dot">&bull;</span>
                  <span className="pr-meta-read">{featuredRelease.readTime}</span>
                </div>
                <h3 className="pr-featured-title">{featuredRelease.title}</h3>
                <p className="pr-featured-excerpt">{featuredRelease.excerpt}</p>
                <div className="pr-featured-actions">
                  <a href="#contact" className="pr-btn-primary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                    <span>Read Full Statement</span>
                  </a>
                  <a
                    href="mailto:secretariat.presmun@gmail.com?subject=Press%20Inquiry%20-%20PresMUN%202026"
                    className="pr-btn-secondary"
                  >
                    Contact Press Office
                  </a>
                </div>
              </div>
            </div>
          )}

          {(activeTab === "all" || activeTab === "statements" || activeTab === "reports") && (
            <section className="pr-releases-section">
              <div className="pr-section-heading-row">
                <h3 className="pr-section-title">Conference Releases &amp; Reports</h3>
                <span className="pr-section-subtitle">{filteredReleases.length + (featuredRelease ? 1 : 0)} Documents</span>
              </div>
              <div className="pr-releases-grid">
                {filteredReleases.map((item) => (
                  <article className="pr-card" key={item.id}>
                    <div className="pr-card-thumb">
                      <img
                        src={item.image}
                        alt={item.title}
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                    </div>
                    <div className="pr-card-body">
                      <div className="pr-meta-row">
                        <span className="pr-badge">{item.categoryLabel}</span>
                        <span className="pr-meta-dot">&bull;</span>
                        <span className="pr-meta-date">{item.date}</span>
                      </div>
                      <h4 className="pr-card-title">{item.title}</h4>
                      <p className="pr-card-excerpt">{item.excerpt}</p>
                      <div className="pr-card-footer">
                        <span className="pr-author-tag">{item.author}</span>
                        <a href="#contact" className="pr-read-link">
                          Read Report &rarr;
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {(activeTab === "all" || activeTab === "photos") && (
            <section className="pr-photos-section">
              <div className="pr-section-heading-row">
                <h3 className="pr-section-title">Official Photo Releases &amp; Highlights</h3>
                <span className="pr-section-subtitle">{photoReleasesData.length} High-Res Releases</span>
              </div>
              <div className="pr-photo-grid">
                {photoReleasesData.map((photo) => (
                  <div className="pr-photo-card" key={photo.id}>
                    <div className="pr-photo-thumb">
                      <img
                        src={photo.image}
                        alt={photo.title}
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                      <span className="pr-photo-category-pill">{photo.category}</span>
                    </div>
                    <div className="pr-photo-body">
                      <h4 className="pr-photo-title">{photo.title}</h4>
                      <div className="pr-photo-meta">
                        <span>{photo.date}</span>
                        <a
                          href={photo.image}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pr-photo-download"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                          </svg>
                          <span>View Full Photo</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {(activeTab === "all" || activeTab === "assets") && (
            <section className="pr-assets-section">
              <div className="pr-section-heading-row">
                <h3 className="pr-section-title">Media Assets &amp; Brand Resources</h3>
                <span className="pr-section-subtitle">Official Press Downloads</span>
              </div>
              <div className="pr-assets-grid">
                {mediaAssetsData.map((asset) => (
                  <div className="pr-asset-card" key={asset.id}>
                    <div className="pr-asset-top">
                      <div className="pr-asset-icon">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                      </div>
                      <div className="pr-asset-info">
                        <h4 className="pr-asset-title">{asset.title}</h4>
                        <span className="pr-asset-sub">{asset.type} &bull; {asset.size}</span>
                      </div>
                    </div>
                    <p className="pr-asset-desc">{asset.description}</p>
                    <a
                      href="mailto:secretariat.presmun@gmail.com?subject=Media%20Asset%20Request"
                      className="pr-asset-download-btn"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      <span>Request Media Pack</span>
                    </a>
                  </div>
                ))}
              </div>
            </section>
          )}

          <div className="pr-contact-card" id="contact">
            <div className="pr-contact-left">
              <h3>Media Relations &amp; Press Office</h3>
              <p>
                For official media accreditation, interview requests with the Secretary-General, press pass inquiries, or broadcast permissions, please contact our Secretariat Press Division.
              </p>
            </div>
            <div className="pr-contact-right">
              <div className="pr-contact-item">
                <svg className="pr-contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <div className="pr-contact-text-box">
                  <span className="pr-contact-label">Press Inquiries Email</span>
                  <a href="mailto:secretariat.presmun@gmail.com" className="pr-contact-value">
                    secretariat.presmun@gmail.com
                  </a>
                </div>
              </div>

              <div className="pr-contact-item">
                <svg className="pr-contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div className="pr-contact-text-box">
                  <span className="pr-contact-label">Conference Secretariat</span>
                  <span className="pr-contact-value">
                    President University, Cikarang, Indonesia
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
