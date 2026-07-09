import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerSection from "../components/BannerSection";
import "../styles/about.css"; 
import LogoMarquee from "../components/LogoMarquee";

export default function AboutPresMUN() {
  return (
    <>
      <Header />

     <BannerSection
             title="About PresMUN"
             variant="solid"
             height="40vh" 
             style={{ backgroundColor: '#320000' }} 
           />

    <section className="history-section">
       
        
        
         <img src="/images/lmao.png " alt="PresMUN Event" className="about-hero-img" />

        <div className="history-content">
          <p>
            President International Model United Nations (PresMUN) is an annual international-level Model United Nations conference organized at President University. Established as an initiative of PUMUN, PresMUN was created to provide a platform for young delegates to engage in meaningful dialogue on global issues.
          </p>
          
          <p>
            Over the years, PresMUN has grown into a prominent conference, welcoming participants from diverse educational and cultural backgrounds. It aims to simulate the dynamics of international institutions, inviting delegates to collaborate across differences to create well-reasoned solutions to contemporary challenges. </p>
            

            <p>  
             
In recognition of its continued growth and impact, PresMUN is now officially recognized as a university-level activity under the International Relations Study Program of President University. The conference is formally overseen by the Head of the Diplomacy Laboratory, while remaining student-led through the leadership of the Secretary-General and the organizing committee.</p>

        </div>
      </section>
      <LogoMarquee />
      <Footer />
    </>
  );
}