import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerSection from "../components/BannerSection";
import "../styles/about.css";

export default function AboutPUMUN() {
  return (
    <>
      <Header />

      <BannerSection
        title="About PUMUN"
        variant="solid"
        height="40vh" 
        style={{ backgroundColor: '#320000' }} 
      />


      
      <section className="letter-section">
        <div className="letter-header">
          <h2>Message from PUMUN</h2>
        </div>
        
        <div className="letter-body">
          <p>Dear Esteemed Delegates,</p>
          
          <p>It is our honor and pleasure to welcome you to President International Model United Nations (PresMUN) 2026.</p>
          
          <p>PresMUN—organized by President University Model United Nations (PUMUN)—is dedicated to advance critical thinking, diplomacy, and dialogue among youth. This conference brings together individuals who seek to not only debate, but to collaborate and create solutions to contemporary issues.</p>
          
          <p>We encourage you to make the most of this experience; step ahead with confidence, speak with grounds, and listen with purpose.</p>
          
          <p>If you have any questions, consider looking through our website pages and social media.</p>
          
          <p>We look forward to seeing your participation.</p>
          
          <p className="signature">
            Sincerely,<br />
            Fasha Yoga Prasetya<br />
            Secretary-General<br />
            President University Model United Nations<br />
            <a href="mailto:fasha.prasetya@student.president.ac.id">fasha.prasetya@student.president.ac.id</a>
          </p>
        </div>
      </section>


      <hr className="divider" />
     

     
      <section className="history-section">
        <h2 className="section-title">History of PUMUN</h2>
        
        <div className="history-content">
          <img src="/images/LOGO PUMUN CIRCULAR.png " alt="PUMUN Logo" className="history-logo" />
          
          <p>President University Model United Nations (PUMUN) was founded in 2011 by a group of International Relations students who shared a common interest in diplomacy and international affairs. Inspired by the growing prominence of Model UN globally, the founders attempted to establish a medium where students of President University could engage actively in international discussions.</p>
          
          <p>Through dedication and support from faculty and peers, PUMUN developed into a recognized student organization. A milestone was achieved on June 24, 2011, when PUMUN successfully held its first official event, an internal MUN, marking its formal establishment within the university.</p>
          
          <p>Since then, PUMUN has continued to grow as a center for aspiring diplomats in the university, promoting critical thinking, public speaking, and a more complex understanding of international relations among its members. The organization has been shaped and guided by distinguished founders and advisors, including H.E. Drs. Sulaiman Abdulmanan, MA; H.E. Drs. Makmur Widodo, MA; and Prof. Anak Banyu Agung Perwita, Ph.D., whose expertise in diplomacy have left an undoubted legacy.</p>
        </div>
      </section>

      <hr className="divider" />
      
      <section className="history-section">
        <h2 className="section-title">PUMUN today</h2>
        
        <div className="history-content">
          <p>Today, President University Model United Nations (PUMUN) serves as a dynamic platform for students to develop their understanding of international relations through a variety of programs and initiatives.</p>
          
          <p>At its core, PUMUN emphasizes continuous learning and practical experience. Members regularly participate in guided training sessions led by experienced MUN practitioners, followed by internal simulations, allowing them to apply the learned knowledge in conferences.</p>
          
          <p>Beyond internal development, PUMUN actively engages the wider university community by organizing open workshops, introducing Model UN to new participants.</p>
          
          <p>Complementing these activities, PUMUN conducts institutional visits to international organizations, embassies, and cultural institutions, which provides members with direct exposure to real-world diplomacy. The organization also maintains connections with other universities through comparative studies.</p>
          
          <p>As its flagship initiative, PUMUN organizes PresMUN, an annual international-level Model UN conference. Originally established as a student-led activity within PUMUN, PresMUN has grown significantly in scale, and is now officially recognized as a university-level activity at President University.</p>
        </div>
      </section>

      <Footer />
    </>
  );
}