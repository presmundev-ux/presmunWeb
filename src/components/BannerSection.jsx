import { Link } from "react-router-dom";


export default function BannerSection({
  title,
  subtitle,
  date,
  buttonText,
  buttonLink,
  backgroundImage,
  variant = "hero", 
  height = "100vh",
  style: customStyle,
  ...rest
}) {
  return (
    <section
      className={`banner ${variant}`}
      {...rest}
      style={{
        height: height,
        ...(backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}),
       ...customStyle 
      }}
    >
      <div className="banner-overlay"></div>

      <div className="banner-content">
        <h1>{title}</h1>
        {subtitle && <p className="subtitle">{subtitle}</p>}
        {date && <p className="banner-date">{date}</p>}
        
        {buttonText && buttonLink ? (
          <Link to={buttonLink}>
            <button>{buttonText}</button>
          </Link>
        ) : buttonText ? (
          <button>{buttonText}</button>
        ) : null}
      </div>
    </section>
  );
}