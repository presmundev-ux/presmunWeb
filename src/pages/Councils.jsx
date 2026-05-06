import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerSection from "../components/BannerSection";
import { Link } from "react-router-dom";
import "../styles/councils.css";

const councilsData = [
  { id: "UNGA", title: "UNGA", subtitle: "THIRD COMMITTEE ", img: "/images/Unemblem.svg" },
  { id: "UNHRC", title: "UNHRC", subtitle: "UPR", img: "/images/Humanrightscouncils.svg" },
  { id: "IPC", title: "PRESS CORPS", subtitle: "", img: "/images/IntPress.png" }
];

export default function Councils() {
  return (
    <>
      <Header />

      <BannerSection
        title="Committees"
        variant="solid"
        height="40vh"
        style={{ backgroundColor: '#320000' }} 
      />

      <section className="councils-wrapper">
        <div className="councils-container">
          
          {councilsData.map((council) => (
            <Link 
              to={`/committees/${council.id}`} 
              className="council-card" 
              key={council.id}
              
            >

              <div className="council-img" style={{ backgroundImage: `url(${council.img})` }}></div>

              <div className="council-info">
                <h2>{council.title}</h2>
                <p className="council-brief">{council.subtitle}</p>
                <span className="read-more">Explore Topic &rarr;</span>
              </div>
            </Link>
          ))}
          
        </div>
      </section>

      <Footer />
    </>
  );
}