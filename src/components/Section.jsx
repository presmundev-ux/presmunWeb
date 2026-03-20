export default function Section({ title, text, buttonText }) {
  return (
    <section className="image-section">
      <div className="image-bg">
        <p>Image Placeholder</p>
      </div>

      <div className="image-overlay"></div>

      <div className="image-content">
        <h2>{title}</h2>
        {text && <p>{text}</p>}
        <button>{buttonText}</button>
      </div>
    </section>
  );
}