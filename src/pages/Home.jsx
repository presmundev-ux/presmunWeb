import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerSection from "../components/BannerSection";
import "../styles/home.css";

export default function Home() {
  return (
    <>
      <Header />

      {/*Hero/Main banner*/}
      <BannerSection
        title="PRESIDENT INTERNATIONAL MODEL UNITED NATIONS"
        subtitle="Advancing Diplomacy For a Sustainable Future"
        buttonText="Register Now"
        backgroundImage="/images/Mainheroimg.JPG"
        height="100vh"
      />

      {/*Message*/}
      <section className="message">
        <h2>Message from the Secretary-General</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>
      </section>

      {/*About*/}
      <BannerSection
        title="About Us"
        buttonText="Learn More"
        backgroundImage="/images/AboutUsPlaceholder.jpg"
        variant="light"
        height="400px"
      />

      {/*Councils*/}
      <BannerSection
        title="The Councils"
        buttonText="Learn More"
        backgroundImage="/images/TheCouncilsPlaceholder.JPG"
        variant="light"
        height="400px"
      />

      <Footer />
    </>
  );
}