import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerSection from "../components/BannerSection";
import "../styles/about.css"; 

export default function CouncilTemplate({ councilName, description, subtitle }) {
  return (
    <>
      <Header />

      <BannerSection
        title={`${councilName}`}
        subtitle={`${subtitle}`}
        variant="solid" 
        height="40vh"
        style={{ backgroundColor: '#320000' }} 
      />

      <section className="history-section">
        
        <div className="history-content">
          
          <p>{description}</p>
          
        </div>
      </section>

      <Footer />
    </>
  );
}