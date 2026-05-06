// Inside SecretariatCard.jsx
export default function SecretariatCard({ name, position, description, image }) {
  return (
    <div className="secretariat-card">
      
      
      {image && (
        <div className="card-image-container">
          <img src={image} alt={name} className="card-image" />
        </div>
      )}
      
      <div className="card-content">
        <h2>{name}</h2>
        <h3>{position}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}