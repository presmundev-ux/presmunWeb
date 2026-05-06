import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerSection from "../components/BannerSection";
import { articlesData } from "../data/articlesData"; 

export default function Article() {
  const { id } = useParams();
  const article = articlesData.find(item => item.id === id);

  if (!article) return <div>Not Found</div>; 

  return (
    <>
      <Header />

      
      <BannerSection
        title={article.title} 
        variant="solid"
        height="40vh"
        style={{ backgroundColor: '#320000' }} 
      />

      <section className="article-content" style={{ maxWidth: '900px', margin: '60px auto', padding: '0 20px' }}>
        
        <div style={{ marginBottom: '25px', borderBottom: '2px solid #eaeaea', paddingBottom: '15px' }}>
          <span style={{ color: '#320000', fontWeight: 'bold', fontSize: '18px', display: 'block', marginBottom: '5px' }}>
            {article.channel}
          </span>
          <span style={{ color: '#666', fontSize: '16px' }}>
            By {article.author} | {article.date}
          </span>
        </div>

       {article.image && (
          <div style={{ marginBottom: '40px' }}> 
            <img 
              src={article.image} 
              alt={article.title} 
              style={{ 
                width: '100%', 
                maxHeight: '600px', 
                objectFit: 'cover', 
                borderRadius: '8px', 
                marginBottom: '10px' 
              }} 
            />
            
            {article.imageCaption && (
              <p style={{ 
                fontSize: '15px', 
                color: '#666666', 
                textAlign: 'left', 
                marginTop: '0' 
              }}>
                {article.imageCaption}
              </p>
            )}
          </div>
        )}

        <div style={{ fontSize: '22px', lineHeight: '1.8', whiteSpace: "pre-line", color: '#333' }}>
          <p>{article.body}</p>
        </div>
        
      </section>

      <Footer />
    </>
  );
}