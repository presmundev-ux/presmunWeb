import "../styles/logoMarquee.css";

export default function LogoMarquee() {
  const sponsors = [
    { src: "/images/sponsor1.png", height: 100 },
    { src: "/images/sponsor2.png", height: 40 },
    { src: "/images/sponsor3.jpeg", height: 120 },
    { src: "/images/sponsor4.png", height: 40 },
    { src: "/images/sponsor5.jpeg", height: 40 },
  ];

  const partners = [
    { src: "/images/partner1.jpeg", height: 90 },
    { src: "/images/partner2.png", height: 40 },
    { src: "/images/partner3.png", height: 70 },
    { src: "/images/partner4.jpeg", height: 80 },
    { src: "/images/partner5.png", height: 110 },
    { src: "/images/partner6.png", height: 90 },
    { src: "/images/partner7.png", height: 90 },
    { src: "/images/partner8.PNG", height: 90 },
    { src: "/images/partner9.png", height: 110 },
    { src: "/images/partner10.png", height: 110 },
    { src: "/images/partner11.jpg", height: 110 },
    { src: "/images/partner12.png", height: 100 },
    { src: "/images/partner13.png", height: 90 },
    { src: "/images/partner14.png", height: 90 },
    { src: "/images/partner15.png", height: 90 },
    { src: "/images/partner16.jpg", height: 70 },
    { src: "/images/partner17.jpg", height: 90 },
    { src: "/images/partner18.jpeg", height: 90 },
    { src: "/images/partner19.jpg", height: 90 },
    { src: "/images/partner20.jpg", height: 90 },
    { src: "/images/partner21.png", height: 90 },
    { src: "/images/partner22.png", height: 70 },
    { src: "/images/partner23.png", height: 120 },
    { src: "/images/partner24.jpg", height: 90 },
    { src: "/images/partner25.png", height: 90 },
    { src: "/images/partner26.jpg", height: 90 },
  ];

  return (
    <section className="logo-marquee-section">

      <div className="logo-group">
        <p className="logo-group-label">Sponsors</p>
        <div className="logo-marquee">
          <div className="logo-track">
            {sponsors.map((logo, i) => (
              <img
                key={`s-a-${i}`}
                src={logo.src}
                alt={`Sponsor logo ${i + 1}`}
                className="marquee-logo"
                style={{ height: `${logo.height}px` }}
              />
            ))}
            {sponsors.map((logo, i) => (
              <img
                key={`s-b-${i}`}
                src={logo.src}
                alt={`Sponsor logo ${i + 1}`}
                className="marquee-logo"
                style={{ height: `${logo.height}px` }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="logo-group">
        <p className="logo-group-label">Partners</p>
        <div className="logo-marquee">
          <div className="logo-track logo-track-reverse">
            {partners.map((logo, i) => (
              <img
                key={`p-a-${i}`}
                src={logo.src}
                alt={`Partner logo ${i + 1}`}
                className="marquee-logo"
                style={{ height: `${logo.height}px` }}
              />
            ))}
            {partners.map((logo, i) => (
              <img
                key={`p-b-${i}`}
                src={logo.src}
                alt={`Partner logo ${i + 1}`}
                className="marquee-logo"
                style={{ height: `${logo.height}px` }}
              />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}