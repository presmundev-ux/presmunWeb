import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerSection from "../components/BannerSection";


export default function PresidentUniversity() {
  return (
    <>
      <Header />

      <BannerSection
        title="President University"
        variant="solid"
        height="40vh"
        style={{ backgroundColor: '#320000' }} 
      />

      <section style={{ maxWidth: '900px', margin: '60px auto', padding: '0 20px' }}>
        
        <img 
          src="/images/PUpict.jpeg" 
          alt="President University Campus" 
          style={{ 
            width: '100%', 
            maxHeight: '500px', 
            objectFit: 'cover', 
            borderRadius: '8px', 
            marginBottom: '40px' 
          }} 
        />

    
        <div style={{ fontSize: '18px', lineHeight: '1.8', color: '#333' }}>
          <p>
            President University is a private higher education institution in Indonesia established with the vision of developing future leaders equipped with a global mindset and strong professional competence. Founded in 2001 as the Cikarang School of Engineering and officially recognized as a university in 2004, it has grown steadily into a dynamic academic institution offering a diverse range of programs across multiple disciplines. With a multicultural student body from Indonesia and abroad, the university fosters an environment that emphasizes academic excellence and international perspective.
          </p>
          <br></br>
          <p>
            Located in the Jababeka Education Park within one of Southeast Asia’s largest industrial estates, President University offers a distinctive learning environment closely connected to industry and real-world practice. Surrounded by numerous national and multinational companies, the university integrates practical exposure with academic learning while promoting research, innovation, and community engagement. As one of the most international universities in the country, President University continues to prepare graduates who are adaptable, forward-thinking, and ready to contribute in a globalized world.
          </p>
        </div>

        
        <div style={{ textAlign: 'left', marginTop: '40px' }}>
          <a 
            href="https://president.ac.id" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              backgroundColor: '#ae2c2d', 
              color: '#ffffff',
              padding: '14px 28px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '16px',
              borderRadius: '4px',
              transition: 'background-color 0.3s ease'
            }}
          >
            LEARN MORE
          </a>
        </div>

      </section>
      
      <Footer />
    </>
  );
}