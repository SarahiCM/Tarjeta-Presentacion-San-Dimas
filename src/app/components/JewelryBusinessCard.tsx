import React, { useState } from 'react';
import { MessageCircle, MapPin, Phone, RefreshCw, Navigation } from 'lucide-react';
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

// ─── FRONT ────────────────────────────────────────────────────────────────────
function CardFront({ brand, category, owner, role, phone, address }: BusinessCardProps) {
  return (
    <div style={{
      position: 'absolute', inset: 0,
      display: 'grid',
      gridTemplateColumns: '42% 28px 1fr',
      borderRadius: 20,
      overflow: 'hidden',
      background: '#f8f6f1',
      border: '1px solid rgba(226,193,111,.45)',
      boxShadow: '0 28px 80px rgba(0,0,0,.45)',
      backfaceVisibility: 'hidden',
      WebkitBackfaceVisibility: 'hidden',
    }}>
      {/* Black panel */}
      <div style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #050505, #151515)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '28px 28px',
        textAlign: 'center',
      }}>
        {/* Top gold line */}
        <div style={{ position: 'absolute', top: 32, left: '50%', transform: 'translateX(-50%)', width: 100, height: 1, background: '#c99a38', opacity: 0.75 }} />
        {/* Bottom gold line */}
        <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', width: 100, height: 1, background: '#c99a38', opacity: 0.75 }} />

        <div style={{ marginBottom: 14, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={logo} alt="San Dimas" style={{ width: 72, height: 72, objectFit: 'contain' }} />
        </div>
        <h2 style={{
          fontFamily: '"Cinzel", serif', color: '#c99a38',
          letterSpacing: '0.2em', fontSize: 'clamp(20px, 3vw, 36px)',
          margin: 0,
        }}>{brand}</h2>
        <p style={{
          margin: '6px 0 0', color: '#e2c16f',
          fontFamily: '"Cinzel", serif', fontSize: 'clamp(14px, 2vw, 20px)',
          fontStyle: 'italic',
        }}>{category}</p>
      </div>

      {/* Gold cut divider */}
      <div style={{
        background: 'linear-gradient(135deg, transparent 0 30%, #c99a38 31% 60%, #7a5520 61% 100%)',
      }} />

      {/* White panel */}
      <div style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '32px 36px',
        color: '#080808',
      }}>
        <h3 style={{
          fontFamily: '"Cinzel", serif',
          fontSize: 'clamp(18px, 2.5vw, 32px)',
          letterSpacing: '0.11em', margin: 0,
        }}>{owner}</h3>
        <p style={{
          color: '#836022', textTransform: 'uppercase',
          letterSpacing: '0.12em', fontWeight: 600, marginTop: 6, marginBottom: 0,
          fontSize: 'clamp(10px, 1.2vw, 14px)',
        }}>{role}</p>

        <div style={{ display: 'grid', gap: 14, marginTop: 24 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
            <span style={{ color: '#c99a38', fontSize: 22, lineHeight: 1 }}>☎</span>
            <p style={{ margin: 0, fontSize: 'clamp(13px, 1.6vw, 18px)', lineHeight: 1.4 }}>{phone}</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
            <span style={{ color: '#c99a38', fontSize: 22, lineHeight: 1 }}>⌖</span>
            <p style={{ margin: 0, fontSize: 'clamp(11px, 1.3vw, 15px)', lineHeight: 1.5 }}>
              {address.map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < address.length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── BACK ─────────────────────────────────────────────────────────────────────
function CardBack({ phone, services, whatsapp, address }: BusinessCardProps) {
  return (
    <div style={{
      position: 'absolute', inset: 0,
      display: 'flex', flexDirection: 'column',
      borderRadius: 20, overflow: 'hidden',
      background: 'linear-gradient(145deg, #fbfaf7, #f0ece4)',
      border: '1px solid rgba(201,154,56,.45)',
      boxShadow: '0 28px 80px rgba(0,0,0,.45)',
      padding: '28px 32px 24px',
      boxSizing: 'border-box',
      backfaceVisibility: 'hidden',
      WebkitBackfaceVisibility: 'hidden',
      transform: 'rotateY(180deg)',
    }}>
      {/* Title */}
      <h2 style={{
        fontFamily: '"Cinzel", serif', color: '#9a6d23',
        textAlign: 'center', margin: '0 0 8px',
        fontSize: 'clamp(16px, 2.2vw, 28px)', letterSpacing: '0.18em',
      }}>Nuestros Servicios</h2>

      {/* Ornament line */}
      <div style={{
        width: 200, height: 1,
        background: 'linear-gradient(90deg, transparent, #c99a38, transparent)',
        margin: '0 auto 20px',
      }} />

      {/* Services grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '12px 10px',
        flex: 1,
        minHeight: 0,
      }}>
        {services.map((service) => (
          <div key={service.title} style={{
            border: '1px solid rgba(201,154,56,.35)',
            borderRadius: 14,
            padding: '14px 8px',
            textAlign: 'center',
            background: 'rgba(255,255,255,.68)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            gap: 8,
          }}>
            <div style={{
              width: 42, height: 42,
              borderRadius: '50%',
              background: '#080808', color: '#c99a38',
              display: 'grid', placeItems: 'center',
              fontSize: 20, flexShrink: 0,
            }}>{service.icon}</div>
            <p style={{
              margin: 0, fontSize: 'clamp(8px, 1vw, 11px)',
              textTransform: 'uppercase', lineHeight: 1.3,
              fontWeight: 700, whiteSpace: 'pre-line',
              color: '#080808',
            }}>{service.title}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTop: '1px solid rgba(201,154,56,.45)',
        marginTop: 16, paddingTop: 14,
        gap: 16,
      }}>
        {/* Phone info */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#c99a38', flexShrink: 0 }}>
          <Phone size={18} />
          <div>
            <strong style={{ display: 'block', color: '#9a6d23', fontSize: 'clamp(14px, 1.8vw, 20px)', fontFamily: '"Cinzel", serif' }}>{phone}</strong>
            <span style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#7a5520', fontWeight: 700 }}>Atención 24/7</span>
          </div>
        </div>

        {/* Action buttons */}
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          <a
            href={`https://wa.me/${whatsapp.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', gap: 7,
              padding: '9px 16px', borderRadius: 999,
              background: 'linear-gradient(135deg, #25D366, #128C7E)',
              color: '#fff', textDecoration: 'none',
              fontWeight: 600, fontSize: 'clamp(10px, 1.2vw, 13px)',
              whiteSpace: 'nowrap',
            }}
          >
            <MessageCircle size={14} />
            WhatsApp
          </a>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address.join(' '))}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', gap: 7,
              padding: '9px 16px', borderRadius: 999,
              background: 'linear-gradient(135deg, #c99a38, #9a6d23)',
              color: '#fff', textDecoration: 'none',
              fontWeight: 600, fontSize: 'clamp(10px, 1.2vw, 13px)',
              whiteSpace: 'nowrap',
            }}
          >
            <Navigation size={14} />
            Cómo llegar
          </a>
        </div>
      </div>
    </div>
  )
}

// ─── FLIPPABLE ────────────────────────────────────────────────────────────────
// Standard business card ratio: 3.5" × 2" = 1.75:1
const CARD_W = 680
const CARD_H = 388

function FlippableCard(props: BusinessCardProps) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18, width: '100%' }}>

      {/* Side labels */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <span style={{
          fontFamily: '"Cinzel", serif', fontSize: 9, letterSpacing: '0.24em',
          textTransform: 'uppercase', color: flipped ? '#555' : '#e2c16f',
          transition: 'color 0.35s',
        }}>Frente</span>
        <span style={{ color: '#555', fontSize: 12 }}>⟷</span>
        <span style={{
          fontFamily: '"Cinzel", serif', fontSize: 9, letterSpacing: '0.24em',
          textTransform: 'uppercase', color: flipped ? '#e2c16f' : '#555',
          transition: 'color 0.35s',
        }}>Reverso</span>
      </div>

      {/* Card — fixed aspect ratio via padding trick */}
      <div style={{ width: '100%', maxWidth: CARD_W }}>
        <div
          onClick={() => setFlipped(f => !f)}
          style={{
            width: '100%',
            paddingBottom: `${(CARD_H / CARD_W) * 100}%`,
            position: 'relative',
            perspective: 1200,
            cursor: 'pointer',
          }}
        >
          <div style={{
            position: 'absolute', inset: 0,
            transformStyle: 'preserve-3d',
            transition: 'transform 0.75s cubic-bezier(0.4,0.2,0.2,1)',
            transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}>
            <CardFront {...props} />
            <CardBack {...props} />
          </div>
        </div>
      </div>

      {/* Flip button */}
      <button
        onClick={() => setFlipped(f => !f)}
        style={{
          display: 'flex', alignItems: 'center', gap: 8,
          background: 'transparent',
          border: '1px solid rgba(201,154,56,0.5)',
          borderRadius: 999, padding: '9px 24px',
          color: '#e2c16f', fontFamily: '"Cinzel", serif',
          fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase',
          cursor: 'pointer',
        }}
      >
        <RefreshCw size={12} strokeWidth={1.8} />
        {flipped ? 'Ver frente' : 'Ver reverso'}
      </button>
      <p style={{
        fontFamily: '"Cinzel", serif', fontSize: 8, letterSpacing: '0.14em',
        color: '#333', textTransform: 'uppercase', margin: 0,
      }}>
        También puedes hacer clic en la tarjeta
      </p>

      {/* External action buttons */}
      <div style={{ display: 'flex', gap: 12, marginTop: 4 }}>
        <a
          href={`https://wa.me/${props.whatsapp.replace(/\D/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex', alignItems: 'center', gap: 8,
            background: '#111',
            border: '1px solid rgba(37,211,102,0.5)',
            borderRadius: 999, padding: '10px 22px',
            color: '#25d366', fontFamily: '"Cinzel", serif',
            fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase',
            textDecoration: 'none', cursor: 'pointer',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(37,211,102,0.1)' }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#111' }}
        >
          <MessageCircle size={13} strokeWidth={1.8} />
          WhatsApp
        </a>

        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(props.address.join(' '))}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex', alignItems: 'center', gap: 8,
            background: '#111',
            border: '1px solid rgba(66,133,244,0.5)',
            borderRadius: 999, padding: '10px 22px',
            color: '#4285f4', fontFamily: '"Cinzel", serif',
            fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase',
            textDecoration: 'none', cursor: 'pointer',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(66,133,244,0.1)' }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#111' }}
        >
          <Navigation size={13} strokeWidth={1.8} />
          Cómo llegar
        </a>
      </div>
    </div>
  )
}

// ─── EXPORT ───────────────────────────────────────────────────────────────────
export function JewelryBusinessCard(props: BusinessCardProps) {
  return (
    <main style={{
      minHeight: '100vh',
      padding: '48px 24px',
      background: `
        radial-gradient(circle at top left, rgba(201,154,56,.18), transparent 32%),
        linear-gradient(135deg, #080808 0%, #181818 100%)
      `,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <section style={{ width: 'min(720px, 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <header style={{ textAlign: 'center', marginBottom: 36 }}>
          <p style={{ color: '#e2c16f', letterSpacing: '0.22em', textTransform: 'uppercase', fontSize: 12, margin: 0 }}>
            {props.category}
          </p>
          <h1 style={{
            margin: '8px 0',
            fontFamily: '"Cinzel", serif',
            fontSize: 'clamp(28px, 5vw, 52px)',
            letterSpacing: '0.14em', color: '#f8f6f1',
          }}>{props.brand}</h1>
          <span style={{ color: '#e2c16f', letterSpacing: '0.22em', textTransform: 'uppercase', fontSize: 12 }}>
            {props.subtitle}
          </span>
        </header>

        <FlippableCard {...props} />
      </section>
    </main>
  )
}

export default JewelryBusinessCard