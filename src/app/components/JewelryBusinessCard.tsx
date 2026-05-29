import React from 'react';
import { MessageCircle, MapPin, Phone } from 'lucide-react';
import logo from '../../assets/images/FunerariaLogo.png';
type Service = {
  icon: string;
  title: string;
};

type BusinessCardProps = {
  brand: string;
  category: string;
  subtitle: string;

  owner: string;
  role: string;

  phone: string;
  whatsapp: string;

  address: string[];

  services: Service[];
};



export function JewelryBusinessCard({
  brand,
  category,
  subtitle,
  owner,
  role,
  phone,
  whatsapp,
  address,
  services,
}: BusinessCardProps) {
  return (
    <main className="page-shell">
      <section className="presentation">
        <header className="project-header">
          <p>{category}</p>
          <h1>{brand}</h1>
          <span>{subtitle}</span>
        </header>

        <div className="cards-wrapper">
          <article className="card front-card">
            <div className="black-panel">
              <div className="gold-line top" />

              <div className="brand-mark">
                  <img
            src={logo}
            alt="San Dimas"
            className="brand-logo"
          />
        </div>
              <h2>{brand}</h2>
              <p>{category}</p>

              <div className="gold-line bottom" />
            </div>

            <div className="gold-cut" />

            <div className="white-panel">
              <h3>{owner}</h3>

              <p className="role">{role}</p>

              <div className="contact-list">
                <div>
                  <span>☎</span>
                  <p>{phone}</p>
                </div>

                <div>
                  <span>⌖</span>

                  <p>
                    {address.map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        {index < address.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="card back-card">
            <h2>Nuestros Servicios</h2>

            <div className="ornament" />

            <div className="services-grid">
              {services.map((service) => (
                <div
                  className="service-item"
                  key={service.title}
                >
                  <div className="service-icon">
                    {service.icon}
                  </div>

                  <p>{service.title}</p>
                </div>
              ))}
            </div>
<footer className="back-footer">
  <div className="contact-summary">
    <Phone size={20} />

    <div>
  
      <strong>Atención 24/7</strong>
    </div>
  </div>

  <div className="action-buttons">
    <a
      href={`https://wa.me/${whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="action-btn whatsapp-btn"
    >
      <MessageCircle size={18} />
      Contactar
    </a>

    <a
      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        address.join(' ')
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="action-btn maps-btn"
    >
      <MapPin size={18} />
      Cómo llegar
    </a>
  </div>
</footer>
          </article>
        </div>
      </section>
    </main>
  );
}