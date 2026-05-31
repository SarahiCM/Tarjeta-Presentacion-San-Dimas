import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, RefreshCw, Navigation } from 'lucide-react';
import logo from '../../assets/images/FunerariaLogo.png';

type Service = { icon: string; title: string };

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
function CardFront({ brand, category, owner, role, phone, address, isMobile }: BusinessCardProps & { isMobile: boolean }) {
  if (isMobile) {
    // Mobile: stacked vertically
    return (
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column',
        borderRadius: 16, overflow: 'hidden',
        background: '#f8f6f1',
        border: '1px solid rgba(226,193,111,.45)',
        backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
      }}>
        {/* Black top */}
        <div style={{
          position: 'relative',
          background: 'linear-gradient(135deg, #050505, #151515)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          padding: '28px 24px 22px', textAlign: 'center', flex: '0 0 auto',
        }}>
          <div style={{ position: 'absolute', top: 18, left: '50%', transform: 'translateX(-50%)', width: 80, height: 1, background: '#c99a38', opacity: 0.7 }} />
          <div style={{ position: 'absolute', bottom: 18, left: '50%', transform: 'translateX(-50%)', width: 80, height: 1, background: '#c99a38', opacity: 0.7 }} />
          <img src={logo} alt="San Dimas" style={{ width: 60, height: 60, objectFit: 'contain', marginBottom: 10 }} />
          <h2 style={{ fontFamily: '"Cinzel",serif', color: '#c99a38', letterSpacing: '0.2em', fontSize: 26, margin: 0 }}>{brand}</h2>
          <p style={{ margin: '4px 0 0', color: '#e2c16f', fontFamily: '"Cinzel",serif', fontSize: 14, fontStyle: 'italic' }}>{category}</p>
        </div>
        {/* Gold strip */}
        <div style={{ height: 6, background: 'linear-gradient(90deg, transparent, #c99a38, #7a5520, transparent)', flexShrink: 0 }} />
        {/* White bottom */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '18px 24px', color: '#080808', flex: 1 }}>
          <h3 style={{ fontFamily: '"Cinzel",serif', fontSize: 22, letterSpacing: '0.11em', margin: '0 0 4px' }}>{owner}</h3>
          <p style={{ color: '#836022', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600, margin: '0 0 14px', fontSize: 11 }}>{role}</p>
          <div style={{ display: 'grid', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ color: '#c99a38', fontSize: 18 }}>☎</span>
              <p style={{ margin: 0, fontSize: 15 }}>{phone}</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
              <span style={{ color: '#c99a38', fontSize: 18 }}>⌖</span>
              <p style={{ margin: 0, fontSize: 13, lineHeight: 1.5 }}>
                {address.map((line, i) => <React.Fragment key={i}>{line}{i < address.length - 1 && <br />}</React.Fragment>)}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Desktop: side by side
  return (
    <div style={{
      position: 'absolute', inset: 0,
      display: 'grid', gridTemplateColumns: '42% 26px 1fr',
      borderRadius: 18, overflow: 'hidden',
      background: '#f8f6f1',
      border: '1px solid rgba(226,193,111,.45)',
      backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
    }}>
      <div style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #050505, #151515)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '24px', textAlign: 'center',
      }}>
        <div style={{ position: 'absolute', top: 28, left: '50%', transform: 'translateX(-50%)', width: 90, height: 1, background: '#c99a38', opacity: 0.75 }} />
        <div style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)', width: 90, height: 1, background: '#c99a38', opacity: 0.75 }} />
        <img src={logo} alt="San Dimas" style={{ width: 70, height: 70, objectFit: 'contain', marginBottom: 12 }} />
        <h2 style={{ fontFamily: '"Cinzel",serif', color: '#c99a38', letterSpacing: '0.2em', fontSize: 'clamp(18px, 2.5vw, 30px)', margin: 0 }}>{brand}</h2>
        <p style={{ margin: '5px 0 0', color: '#e2c16f', fontFamily: '"Cinzel",serif', fontSize: 'clamp(12px, 1.6vw, 18px)', fontStyle: 'italic' }}>{category}</p>
      </div>
      <div style={{ background: 'linear-gradient(135deg, transparent 0 30%, #c99a38 31% 60%, #7a5520 61% 100%)' }} />
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '24px 28px', color: '#080808' }}>
        <h3 style={{ fontFamily: '"Cinzel",serif', fontSize: 'clamp(16px, 2vw, 26px)', letterSpacing: '0.11em', margin: 0 }}>{owner}</h3>
        <p style={{ color: '#836022', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600, margin: '4px 0 16px', fontSize: 'clamp(9px, 1vw, 12px)' }}>{role}</p>
        <div style={{ display: 'grid', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ color: '#c99a38', fontSize: 18 }}>☎</span>
            <p style={{ margin: 0, fontSize: 'clamp(12px, 1.4vw, 16px)' }}>{phone}</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
            <span style={{ color: '#c99a38', fontSize: 18 }}>⌖</span>
            <p style={{ margin: 0, fontSize: 'clamp(10px, 1.2vw, 14px)', lineHeight: 1.5 }}>
              {address.map((line, i) => <React.Fragment key={i}>{line}{i < address.length - 1 && <br />}</React.Fragment>)}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── BACK ─────────────────────────────────────────────────────────────────────
function CardBack({ phone, services, isMobile }: BusinessCardProps & { isMobile: boolean }) {
  const cols = isMobile ? 2 : 4
  const rows = isMobile ? 4 : 2

  return (
    <div style={{
      position: 'absolute', inset: 0,
      display: 'flex', flexDirection: 'column',
      borderRadius: 16, overflow: 'hidden',
      background: 'linear-gradient(145deg, #fbfaf7, #f0ece4)',
      border: '1px solid rgba(201,154,56,.45)',
      padding: isMobile ? '16px 14px 14px' : '14px 18px 12px',
      boxSizing: 'border-box',
      backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
      transform: 'rotateY(180deg)',
    }}>
      {/* Title */}
      <h2 style={{
        fontFamily: '"Cinzel",serif', color: '#9a6d23',
        textAlign: 'center', margin: '0 0 5px',
        fontSize: isMobile ? 16 : 'clamp(12px, 1.8vw, 20px)',
        letterSpacing: '0.2em',
      }}>Nuestros Servicios</h2>

      {/* Ornament */}
      <div style={{
        width: 140, height: 1,
        background: 'linear-gradient(90deg, transparent, #c99a38, transparent)',
        margin: '0 auto 12px',
      }} />

      {/* Services grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gap: isMobile ? '6px' : '6px',
        flex: 1, minHeight: 0,
      }}>
        {services.map((service) => (
          <div key={service.title} style={{
            border: '1px solid rgba(201,154,56,.3)',
            borderRadius: 10,
            padding: '6px 4px',
            textAlign: 'center',
            background: 'rgba(255,255,255,.7)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            gap: 5,
          }}>
            <div style={{
              width: isMobile ? 34 : 30, height: isMobile ? 34 : 30,
              borderRadius: '50%',
              background: '#080808', color: '#c99a38',
              display: 'grid', placeItems: 'center',
              fontSize: isMobile ? 16 : 15, flexShrink: 0,
            }}>{service.icon}</div>
            <p style={{
              margin: 0,
              fontSize: isMobile ? 8 : 'clamp(6px, 0.8vw, 9px)',
              textTransform: 'uppercase', lineHeight: 1.3,
              fontWeight: 700, color: '#080808',
            }}>{service.title}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        borderTop: '1px solid rgba(201,154,56,.3)',
        marginTop: 10, paddingTop: 8, gap: 8, color: '#c99a38',
        flexShrink: 0,
      }}>
        <Phone size={13} />
        <strong style={{ color: '#9a6d23', fontSize: isMobile ? 15 : 'clamp(12px, 1.5vw, 16px)', fontFamily: '"Cinzel",serif' }}>{phone}</strong>
        <span style={{ fontSize: 8, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#7a5520', fontWeight: 700 }}>· Atención 24/7</span>
      </div>
    </div>
  )
}

// ─── FLIPPABLE ────────────────────────────────────────────────────────────────
function FlippableCard(props: BusinessCardProps) {
  const [flipped, setFlipped] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 600)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // Heights: mobile front taller (stacked), back even taller (4 rows)
  const frontH = isMobile ? 380 : 340
  const backH  = isMobile ? 560 : 340
  const cardH  = flipped ? backH : frontH

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>

      {/* Labels */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        {['Frente', '⟷', 'Reverso'].map((t, i) => (
          <span key={i} style={{
            fontFamily: i === 1 ? undefined : '"Cinzel",serif',
            fontSize: i === 1 ? 12 : 9,
            letterSpacing: i === 1 ? undefined : '0.24em',
            textTransform: i === 1 ? undefined : 'uppercase',
            color: i === 1 ? '#555' : (i === 0 ? (flipped ? '#555' : '#e2c16f') : (flipped ? '#e2c16f' : '#555')),
            transition: 'color 0.35s',
          }}>{t}</span>
        ))}
      </div>

      {/* Card wrapper — height animates between front/back */}
      <div style={{
        width: '100%', maxWidth: 680,
        height: cardH,
        position: 'relative',
        perspective: 1200,
        cursor: 'pointer',
        transition: 'height 0.75s cubic-bezier(0.4,0.2,0.2,1)',
      }} onClick={() => setFlipped(f => !f)}>
        <div style={{
          width: '100%', height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.75s cubic-bezier(0.4,0.2,0.2,1)',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}>
          <CardFront {...props} isMobile={isMobile} />
          <CardBack  {...props} isMobile={isMobile} />
        </div>
      </div>

      {/* Flip button */}
      <button onClick={() => setFlipped(f => !f)} style={{
        display: 'flex', alignItems: 'center', gap: 8,
        background: 'transparent', border: '1px solid rgba(201,154,56,0.5)',
        borderRadius: 999, padding: '9px 24px',
        color: '#e2c16f', fontFamily: '"Cinzel",serif',
        fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer',
      }}>
        <RefreshCw size={12} strokeWidth={1.8} />
        {flipped ? 'Ver frente' : 'Ver reverso'}
      </button>
      <p style={{ fontFamily: '"Cinzel",serif', fontSize: 8, letterSpacing: '0.14em', color: '#333', textTransform: 'uppercase', margin: 0 }}>
        También puedes hacer clic en la tarjeta
      </p>

      {/* Action buttons */}
      <div style={{ display: 'flex', gap: 12, marginTop: 4 }}>
        <a href={`https://wa.me/${props.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer"
          style={{
            display: 'flex', alignItems: 'center', gap: 8,
            background: '#111', border: '1px solid rgba(37,211,102,0.5)',
            borderRadius: 999, padding: '10px 22px',
            color: '#25d366', fontFamily: '"Cinzel",serif',
            fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(37,211,102,0.1)' }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#111' }}
        >
          <MessageCircle size={13} strokeWidth={1.8} />
          WhatsApp
        </a>
        <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(props.address.join(' '))}`} target="_blank" rel="noopener noreferrer"
          style={{
            display: 'flex', alignItems: 'center', gap: 8,
            background: '#111', border: '1px solid rgba(66,133,244,0.5)',
            borderRadius: 999, padding: '10px 22px',
            color: '#4285f4', fontFamily: '"Cinzel",serif',
            fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none',
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
      minHeight: '100vh', padding: '48px 16px',
      background: `radial-gradient(circle at top left, rgba(201,154,56,.18), transparent 32%), linear-gradient(135deg, #080808 0%, #181818 100%)`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <section style={{ width: 'min(720px, 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <header style={{ textAlign: 'center', marginBottom: 32 }}>
          <p style={{ color: '#e2c16f', letterSpacing: '0.22em', textTransform: 'uppercase', fontSize: 11, margin: 0 }}>{props.category}</p>
          <h1 style={{ margin: '8px 0', fontFamily: '"Cinzel",serif', fontSize: 'clamp(24px, 5vw, 52px)', letterSpacing: '0.14em', color: '#f8f6f1' }}>{props.brand}</h1>
          <span style={{ color: '#e2c16f', letterSpacing: '0.22em', textTransform: 'uppercase', fontSize: 11 }}>{props.subtitle}</span>
        </header>
        <FlippableCard {...props} />
      </section>
    </main>
  )
}

export default JewelryBusinessCard