import React from 'react';

const services = [
  { icon: '✟', title: 'Cremaciones y\ncremaciones directas' },
  { icon: '⚰', title: 'Ataúdes finos\ny económicos' },
  { icon: '✈', title: 'Traslados nacionales\ne internacionales' },
  { icon: '☑', title: 'Planes previsores' },
  { icon: '⚱', title: 'Inhumaciones y\nexhumaciones' },
  { icon: '🐾', title: 'Cremaciones\nde mascotas' },
  { icon: '⚱', title: 'Ventas de urnas\ny relicarios' },
  { icon: '🚘', title: 'Servicios de carroza' },
];

function QRBox() {
  return (
    <div className="qr-box">
      <div className="qr-grid">
        {Array.from({ length: 64 }).map((_, i) => (
          <span key={i} className={(i * 7 + i) % 3 === 0 ? 'black' : ''} />
        ))}
      </div>
    </div>
  );
}

export function SanDimasDisenoDos() {
  return (
    <main className="page-shell">
      <section className="presentation">
        <header className="project-header">
          <p>Proyecto digital</p>
          <h1>San Dimas Funerales</h1>
          <span>Diseño moderno blanco / negro / dorado</span>
        </header>

        <div className="cards-wrapper">
          <article className="card front-card">
            <div className="black-panel">
              <div className="gold-line top" />
              <div className="brand-mark">✟</div>
              <h2>SAN DIMAS</h2>
              <p>Funerales</p>
              <div className="gold-line bottom" />
            </div>

            <div className="gold-cut" />

            <div className="white-panel">
              <h3>Rosy Salazar</h3>
              <p className="role">Directora / Logística</p>

              <div className="contact-list">
                <div>
                  <span>☎</span>
                  <p>618 138 4790</p>
                </div>
                <div>
                  <span>⌖</span>
                  <p>Calle Canis Mayor 117<br />Villa del Guadiana, Dgo.</p>
                </div>
              </div>
            </div>
          </article>

          <article className="card back-card">
            <h2>Nuestros Servicios</h2>
            <div className="ornament" />

            <div className="services-grid">
              {services.map((service) => (
                <div className="service-item" key={service.title}>
                  <div className="service-icon">{service.icon}</div>
                  <p>{service.title}</p>
                </div>
              ))}
            </div>

            <footer className="back-footer">
              <p>Servicio digno y humano</p>
              <div>
                <span>☎</span>
                <strong>618 138 4790</strong>
              </div>
              <QRBox />
            </footer>
          </article>
        </div>
      </section>
    </main>
  );
}
