import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerSection from "../components/BannerSection";
import { articlesData } from "../data/articlesData";
import "../styles/press.css";

export default function Article() {
  const { id } = useParams();
  const article = articlesData.find((item) => item.id === id);

  const [isShareOpen, setIsShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const shareRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (shareRef.current && !shareRef.current.contains(e.target)) {
        setIsShareOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!article) {
    return (
      <>
        <Header />
        <BannerSection
          title="Article Not Found"
          variant="solid"
          height="35vh"
          style={{ backgroundColor: "#200406" }}
        />
        <div className="article-not-found">
          <p>The requested article could not be found.</p>
          <Link to="/press" className="back-to-press-btn">
            Back to Press Articles
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const otherArticles = articlesData.filter((item) => item.id !== id);
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: `Read "${article.title}" on PresMUN Press`,
          url: currentUrl,
        });
        setIsShareOpen(false);
      } catch (err) {
        if (err.name !== "AbortError") {
          handleCopyLink();
        }
      }
    } else {
      handleCopyLink();
    }
  };

  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    article.title + " " + currentUrl
  )}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    article.title
  )}&url=${encodeURIComponent(currentUrl)}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    currentUrl
  )}`;

  return (
    <>
      <Header />

      <BannerSection
        title="Press articles"
        variant="solid"
        height="35vh"
        style={{ backgroundColor: "#320000" }}
      />

      <div className="article-page-wrapper">
        <div className="article-layout-container">
          <main className="article-main-body">
            <div className="article-top-meta">
              <div className="article-meta-left">
                <span className="article-channel-badge">{article.channel}</span>
                <span className="article-meta-divider">&bull;</span>
                <span className="article-meta-date">{article.date}</span>
                <span className="article-meta-divider">&bull;</span>
                <span className="article-meta-author">By {article.author}</span>
              </div>

              <div className="share-menu-container" ref={shareRef}>
                <button
                  type="button"
                  className={`share-dots-btn ${isShareOpen ? "active" : ""}`}
                  onClick={() => setIsShareOpen(!isShareOpen)}
                  aria-label="Share article"
                  title="Share options"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="5" r="2.2" />
                    <circle cx="12" cy="12" r="2.2" />
                    <circle cx="12" cy="19" r="2.2" />
                  </svg>
                </button>

                {isShareOpen && (
                  <div className="share-dropdown-card">
                    <div className="share-dropdown-header">
                      <span>Share this article</span>
                    </div>

                    <button
                      type="button"
                      onClick={handleCopyLink}
                      className="share-dropdown-item"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                      </svg>
                      <span>{copied ? "Link Copied!" : "Copy Link"}</span>
                    </button>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="share-dropdown-item"
                      onClick={() => setIsShareOpen(false)}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.188 8.188 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.76-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.14.17-.25.25-.42.08-.17.04-.32-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.32-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.59.21-1.09.15-1.19-.06-.09-.23-.15-.48-.27" />
                      </svg>
                      <span>Share to WhatsApp</span>
                    </a>

                    <a
                      href={twitterUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="share-dropdown-item"
                      onClick={() => setIsShareOpen(false)}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                      <span>Share on X</span>
                    </a>

                    <a
                      href={linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="share-dropdown-item"
                      onClick={() => setIsShareOpen(false)}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.27a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
                      </svg>
                      <span>Share on LinkedIn</span>
                    </a>

                    {typeof navigator !== "undefined" && navigator.share && (
                      <button
                        type="button"
                        onClick={handleNativeShare}
                        className="share-dropdown-item share-native-option"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="18" cy="5" r="3" />
                          <circle cx="6" cy="12" r="3" />
                          <circle cx="18" cy="19" r="3" />
                          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                        </svg>
                        <span>More Options...</span>
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>

            <h1 className="article-main-title">{article.title}</h1>

            {article.image && (
              <figure className="article-figure">
                <div className="article-figure-box">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="article-img-display"
                    onError={(e) => {
                      const fig = e.target.closest("figure");
                      if (fig) {
                        fig.style.display = "none";
                      }
                    }}
                  />
                </div>
                {article.imageCaption && (
                  <figcaption className="article-caption-text">
                    {article.imageCaption}
                  </figcaption>
                )}
              </figure>
            )}

            <div className="article-text-content">
              {article.body.split("\n\n").map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="article-share-strip">
              <span className="share-strip-label">Share this article:</span>
              <div className="share-strip-actions">
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="share-strip-btn"
                  title="Copy Link"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                  <span>{copied ? "Copied!" : "Copy Link"}</span>
                </button>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-strip-btn whatsapp"
                  title="Share to WhatsApp"
                >
                  WhatsApp
                </a>
                <a
                  href={twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-strip-btn twitter"
                  title="Share on X"
                >
                  X
                </a>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-strip-btn linkedin"
                  title="Share on LinkedIn"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </main>

          <aside className="article-sidebar">
            <div className="sidebar-sticky-inner">
              <div className="sidebar-header-row">
                <h3 className="sidebar-heading">Other Articles</h3>
                <span className="sidebar-count">{otherArticles.length} stories</span>
              </div>
              <div className="sidebar-articles-list">
                {otherArticles.map((item) => (
                  <Link
                    to={`/press/${item.id}`}
                    key={item.id}
                    className="sidebar-article-card"
                  >
                    <div className="sidebar-card-thumb">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.title}
                          onError={(e) => {
                            e.target.style.display = "none";
                            const placeholder = e.target.parentElement.querySelector(
                              ".sidebar-thumb-placeholder"
                            );
                            if (placeholder) {
                              placeholder.style.display = "flex";
                            }
                          }}
                        />
                      ) : null}
                      <div
                        className="sidebar-thumb-placeholder"
                        style={{ display: item.image ? "none" : "flex" }}
                      >
                        <span>{item.channel}</span>
                      </div>
                    </div>
                    <div className="sidebar-card-content">
                      <span className="sidebar-card-channel">{item.channel}</span>
                      <h4 className="sidebar-card-title">{item.title}</h4>
                      <span className="sidebar-card-date">{item.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </>
  );
}