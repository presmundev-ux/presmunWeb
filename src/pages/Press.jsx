import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerSection from "../components/BannerSection";
import { Link } from "react-router-dom";
import { articlesData } from "../data/articlesData";
import "../styles/press.css";

export default function Press() {
  const featuredArticle = articlesData[0];
  const gridArticles = articlesData.slice(1);

  return (
    <>
      <Header />

      <BannerSection
        title="Press articles"
        variant="solid"
        height="40vh"
        style={{ backgroundColor: "#320000" }}
      />

      <div className="press-page-wrapper">
        <div className="press-feed-container">
          {featuredArticle && (
            <div className="press-featured-card-wrapper">
              <Link
                to={`/press/${featuredArticle.id}`}
                className="press-featured-card"
              >
                <div className="press-featured-thumb">
                  {featuredArticle.image ? (
                    <img
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      onError={(e) => {
                        e.target.style.display = "none";
                        const placeholder = e.target.parentElement.querySelector(
                          ".press-thumb-placeholder"
                        );
                        if (placeholder) {
                          placeholder.style.display = "flex";
                        }
                      }}
                    />
                  ) : null}
                  <div
                    className="press-thumb-placeholder"
                    style={{ display: featuredArticle.image ? "none" : "flex" }}
                  >
                    {featuredArticle.channel}
                  </div>
                </div>
                <div className="press-featured-content">
                  <div className="press-card-meta">
                    <span className="press-channel-tag">
                      {featuredArticle.channel}
                    </span>
                    <span className="press-meta-dot">&bull;</span>
                    <span className="press-date-tag">
                      {featuredArticle.date}
                    </span>
                  </div>
                  <h2 className="press-featured-title">
                    {featuredArticle.title}
                  </h2>
                  <p className="press-featured-excerpt">
                    {featuredArticle.body}
                  </p>
                  <div className="press-card-footer">
                    <span className="press-author-name">
                      By {featuredArticle.author}
                    </span>
                    <span className="press-read-badge">
                      Read Full Article &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          )}

          <div className="press-grid">
            {gridArticles.map((article) => (
              <Link
                to={`/press/${article.id}`}
                className="press-grid-card"
                key={article.id}
              >
                <div className="press-grid-thumb">
                  {article.image ? (
                    <img
                      src={article.image}
                      alt={article.title}
                      onError={(e) => {
                        e.target.style.display = "none";
                        const placeholder = e.target.parentElement.querySelector(
                          ".press-thumb-placeholder"
                        );
                        if (placeholder) {
                          placeholder.style.display = "flex";
                        }
                      }}
                    />
                  ) : null}
                  <div
                    className="press-thumb-placeholder"
                    style={{ display: article.image ? "none" : "flex" }}
                  >
                    {article.channel}
                  </div>
                  <span className="press-thumb-channel">{article.channel}</span>
                </div>
                <div className="press-grid-content">
                  <div className="press-grid-meta">
                    <span>{article.date}</span>
                    <span>&bull;</span>
                    <span>By {article.author}</span>
                  </div>
                  <h3 className="press-grid-title">{article.title}</h3>
                  <p className="press-grid-excerpt">{article.body}</p>
                  <span className="press-grid-read-more">
                    Read Article &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}