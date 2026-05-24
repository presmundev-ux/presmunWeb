import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerSection from "../components/BannerSection";
import "../styles/home.css";

export default function Home() {
  return (
    <>
      <Header />

      
      <BannerSection
        title="PRESIDENT INTERNATIONAL MODEL UNITED NATIONS"
        subtitle="The Thirteenth Session"
        date="July 11–12, 2026"
        buttonText="REGISTER"
        buttonLink={"https://forms.gle/rAPHW3nB4Pf4WYZw9"}
        backgroundImage="/images/lmao.png"
        height="100vh"
      />

      
      <BannerSection
        title="The Committees"
        buttonText="LEARN MORE"
        buttonLink="/committees"
        variant="solid-light"
        height="820px"
        style={{ backgroundColor: '#ecf0f4'}}
      />  

      
<BannerSection
        title="About us"
        buttonText="LEARN MORE"
        buttonLink="/about-pumun" 
        backgroundImage="/images/PUpict.jpeg"
        variant="light" 
        height="820px"
        style={{ backgroundColor: '#ecf0f4' }}
      />

      





      <Footer />
    </>
  );
}