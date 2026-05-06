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
        buttonLink={"https://docs.google.com/forms/d/e/1FAIpQLSdV__jiAyYNKmWk45ps7Uh22V4qe65r2GnUrf9M1ZjEh1vMWw/viewform"}
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