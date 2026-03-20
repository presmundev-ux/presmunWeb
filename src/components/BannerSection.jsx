export default function BannerSection({
  title,
  subtitle,
  buttonText,
  backgroundImage,
  variant = "hero", 
  height = "100vh"
}) {
  return (
    <section
      className={`banner ${variant}`}
      style={{
        height: height,
        ...(backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {})
      }}
    >
      <div className="banner-overlay"></div>

      <div className="banner-content">
        <h1>{title}</h1>
        {subtitle && <p className="subtitle">{subtitle}</p>}
        {buttonText && <button>{buttonText}</button>}
      </div>
    </section>
  );
}