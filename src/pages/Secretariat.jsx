import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerSection from "../components/BannerSection";
import SecretariatCard from "../components/SecretariatCard";
import "../styles/secretariat.css";

export default function Secretariat() {
  const dummyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  return (
    <>
      <Header />

      
      <BannerSection
        title="The Secretariat"
        subtitle="Lorem Ipsum"
        variant="gradient"
        height="60vh" 
      />

      {/*Secre list, nambah baru pake card*/}
      <section className="secretariat-list">
        <SecretariatCard
          name="Name"
          position="Position"
          description={dummyText}
        />
        
        <hr className="divider" />
        
        <SecretariatCard
          name="Name"
          position="Position"
          description={dummyText}
        />
      </section>

      <Footer />
    </>
  );
}