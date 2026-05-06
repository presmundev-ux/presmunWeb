import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerSection from "../components/BannerSection";
import { Link } from "react-router-dom";

import { articlesData } from "../data/articlesData"; 

import "../styles/press.css";

export default function Press() {
  return (
    <>
      <Header />
      
      <BannerSection
        title="Press articles"
        variant="solid"
        height="40vh" 
        style={{ backgroundColor: '#320000' }} 
      />

      <section className="press-feed">
        {articlesData.map((article) => (
          <Link to={`/press/${article.id}`} className="press-card" key={article.id}>
            
            {article.image ? (
              <img 
                src={article.image} 
                alt={article.title} 
                className="press-img" 
                style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '4px' }} 
              />
            ) : (
              <div className="press-img-placeholder" style={{ height: '300px', backgroundColor: '#eaeaea', borderRadius: '4px' }}></div>
            )}
            
            <div className="press-card-content" style={{ padding: '15px 0', textAlign: 'left', width: '100%' }}>
              <h2 style={{ fontSize: '20px', marginTop: '0', marginBottom: '8px', textAlign:"left"}}>
                {article.title}
              </h2>
             <p style={{ color: '#666', fontSize: '14px', margin: '0' }}>
                {article.date}
              </p>
            </div>

          </Link>
        ))}
      </section>

      <Footer />
    </>
  );
}