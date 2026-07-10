import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerSection from "../components/BannerSection";
import SecretariatCard from "../components/SecretariatCard";
import "../styles/secretariat.css";


export default function Secretariat() {
  
  const fashaDescription = (
    <>
      Prasetya is an undergraduate student of International Relations at President University and currently serves as the Secretary-General of President University Model United Nations (PUMUN). 
      He was part of PUMUN’s Delegation Department, tasked on representing President University in various Model UN conferences and bringing diplomatic excellence to the forefront.
      <br></br>
      <br></br>
      He is particularly passionate about human rights issues, with a focus on freedom of religion and belief. Through his leadership, he is committed to advancing a platform, enabling the encouragement of principled dialogue and engagement among delegates.
    <br></br>
    <br></br>
    If you wish to discuss anything, feel free to reach him out at  <a href="mailto:fasha.prasetya@student.president.ac.id">fasha.prasetya@student.president.ac.id</a>{"."}


    </>
  );


  const oliviaDescription = (
    <>
Olivia is an undergraduate student of International Relations at President University and currently serves as the Under-Secretary-General for Conference Affairs of PUMUN. In this capacity, she assumes the role of the Secretary-General of PresMUN 2026.
      <br /><br />
With prior experience as part of the PUMUN delegation, Olivia brings both practical and organizational insights to the conference. She is dedicated to ensuring a well-structured and impactful experience for all participants.    
    <br></br>
    <br></br>
    If you would like to discuss anything further, feel free to contact her at  <a href="mailto:olivia.thenu@student.president.ac.id.

">olivia.thenu@student.president.ac.id

</a>{"."}
    </>
  );


   const AnyaDescription = (
    <>
Ranya is an undergraduate student of International Relations at President University and currently serves as the Deputy Secretary-General of PresMUN 2026. She is also an active member of PUMUN’s Human Resource Department.
      <br /><br />
      
      She has a strong interest in human rights, inclusive education, and community development, as demonstrated by her past experiences in leading various projects and initiatives. In her current role, she strives to build an inclusive and supportive environment while encouraging delegates to grow into globally aware individuals.
    </>
  );

   const GuidoDescription = (
    <>
Mr. Guido Benny is a faculty member at the University of Indonesia, where he has been serving as a full-time lecturer since 2006. He earned both his Bachelor’s degree in Business Administration and Master of Science in Management from the University of Indonesia, graduating cum laude from both programs. His academic work focuses on management, strategy, and marketing, and he has consistently contributed to research and teaching in business education.
      <br /><br />
      
     As Director of PresMUN, Mr. Benny provides institutional oversight and ensures the conference’s alignment with academic standards and the broader vision of President University. In this capacity, he supports the development of PresMUN as a professional and internationally oriented Model United Nations conference, while the Secretariat manages its day-to-day execution.
    </>
  );

  return (
    <>
      <Header />

      <BannerSection
        title="Executive Secretariat"
        variant="solid"
        height="40vh" 
        style={{ backgroundColor: '#320000' }} 
      />

      <section className="secretariat-list">

         <SecretariatCard
          name="Dr. Guido Benny"
          position="Head of PresMUN"
          description={GuidoDescription}
          image="/images/Mr. Guido Benny.png"
        />

          <hr className="divider" />
        
        <SecretariatCard
          name="Fasha Yoga Prasetya"
          position="Secretary-General of PUMUN"
          description={fashaDescription}
          image="/images/FASHA.png"
        />
        
        <hr className="divider" />
        
        <SecretariatCard
          name="Olivia Victoria Thenu"
          position="Secretary-General of PresMUN 2026"
          description={oliviaDescription} 
          image="/images/OLIVIA PIC.jpeg"
        />

        <hr className="divider"/>

        <SecretariatCard
          name="Ranya Kayla"
          position="Deputy Secretary-General of PresMUN 2026"
          description={AnyaDescription}
          image="/images/RANYA PIC.jpeg"
        />
        
      </section>
      
      <Footer />
    </>
  );
}