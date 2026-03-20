export default function SecretariatCard({ name, position, description }) {
  return (
    <div className="secretariat-card">
      <div className="card-image-placeholder">
        Secre Pict
      </div>
      <div className="card-content">
        <h3>{name}</h3>
        <h4>{position}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}