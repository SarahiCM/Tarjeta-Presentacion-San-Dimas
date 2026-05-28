import { MapPin, Phone, QrCode, Flame, Cross, Car, ClipboardList, PawPrint, Urn, Clock } from 'lucide-react';

const services = [
  { label: 'Cremaciones', icon: Flame },
  { label: 'Ataúdes', icon: Cross },
  { label: 'Traslados', icon: Car },
  { label: 'Planes previsores', icon: ClipboardList },
  { label: 'Mascotas', icon: PawPrint },
  { label: 'Urnas y relicarios', icon: Urn },
];

function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className={`mb-3 flex h-16 w-16 items-center justify-center rounded-full border ${dark ? 'border-[#b9852b]' : 'border-[#d7a84b]'} text-[#d7a84b]`}>
        <Cross size={34} strokeWidth={1.8} />
      </div>
      <h1 className="font-serif text-4xl tracking-[0.18em] text-[#d7a84b] md:text-5xl">SAN DIMAS</h1>
      <p className="font-serif text-2xl italic tracking-wide text-[#d7a84b]">Funerales</p>
    </div>
  );
}

function QrBox({ dark = true }: { dark?: boolean }) {
  return (
    <div className={`flex h-24 w-24 items-center justify-center rounded-xl border-2 ${dark ? 'border-[#d7a84b] bg-white text-black' : 'border-[#b9852b] bg-black text-white'}`}>
      <QrCode size={64} strokeWidth={1.5} />
    </div>
  );
}

function ProjectOneFront() {
  return (
    <article className="relative h-[300px] overflow-hidden rounded-[28px] border border-[#9b6b21] bg-[#050505] p-8 shadow-2xl">
      <div className="absolute -left-12 -top-12 h-40 w-40 rounded-full border-[18px] border-[#d7a84b]/40" />
      <div className="absolute -bottom-14 -right-12 h-44 w-44 rounded-full border-[18px] border-[#d7a84b]/25" />
      <div className="absolute right-8 top-8 h-40 w-24 rounded-full bg-[#d7a84b]/10 blur-2xl" />

      <div className="relative z-10 flex h-full flex-col justify-between">
        <Logo />

        <div className="text-center">
          <h2 className="text-2xl font-light tracking-[0.22em] text-white">ROSY SALAZAR</h2>
          <p className="text-sm uppercase tracking-[0.18em] text-zinc-300">Directora / Logística</p>
        </div>

        <div className="flex items-end justify-between border-t border-[#9b6b21]/50 pt-4 text-sm text-zinc-200">
          <div className="flex items-center gap-3">
            <Phone className="text-[#d7a84b]" size={22} />
            <div>
              <p className="text-lg font-semibold text-[#d7a84b]">618 138 4790</p>
              <p className="text-xs uppercase tracking-widest">Atención 24/7</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-right">
            <MapPin className="text-[#d7a84b]" size={24} />
            <div>
              <p>Calle Canis Mayor 117</p>
              <p>Villa del Guadiana, Dgo.</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function ProjectOneBack() {
  return (
    <article className="h-[300px] rounded-[28px] border border-[#9b6b21] bg-[#050505] p-8 shadow-2xl">
      <h2 className="mb-8 text-center font-serif text-2xl tracking-[0.22em] text-[#d7a84b]">NUESTROS SERVICIOS</h2>

      <div className="grid grid-cols-6 gap-3 text-center">
        {services.map(({ label, icon: Icon }) => (
          <div key={label} className="flex flex-col items-center gap-2 border-r border-[#9b6b21]/40 px-2 last:border-r-0">
            <Icon className="text-[#d7a84b]" size={32} strokeWidth={1.5} />
            <p className="text-[11px] uppercase leading-tight tracking-wide text-zinc-200">{label}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between border-t border-[#9b6b21]/50 pt-5">
        <QrBox />
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-[#d7a84b]">Servicio digno y humano</p>
          <p className="mt-2 text-2xl font-semibold text-[#d7a84b]">618 138 4790</p>
        </div>
        <div className="flex items-center gap-2 text-zinc-200">
          <Clock size={20} className="text-[#d7a84b]" />
          <span>Atención 24/7</span>
        </div>
      </div>
    </article>
  );
}

function ProjectTwoFront() {
  return (
    <article className="flex h-[300px] overflow-hidden rounded-[28px] bg-white shadow-2xl">
      <div className="relative flex w-[43%] items-center justify-center bg-[#050505] p-8">
        <div className="absolute -right-8 top-0 h-full w-20 rotate-6 bg-[#d7a84b]" />
        <div className="absolute -right-3 top-0 h-full w-16 rotate-6 bg-white" />
        <div className="relative z-10">
          <Logo />
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-center gap-7 p-9 text-black">
        <div>
          <h2 className="font-serif text-3xl tracking-[0.16em]">ROSY SALAZAR</h2>
          <p className="mt-1 text-sm uppercase tracking-[0.16em] text-zinc-600">Directora / Logística</p>
        </div>

        <div className="space-y-4 text-zinc-700">
          <div className="flex items-center gap-3">
            <Phone className="text-[#b9852b]" size={22} />
            <span className="text-xl font-semibold text-[#b9852b]">618 138 4790</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-[#b9852b]" size={24} />
            <span>Calle Canis Mayor 117, Villa del Guadiana, Dgo.</span>
          </div>
        </div>
      </div>
    </article>
  );
}

function ProjectTwoBack() {
  return (
    <article className="h-[300px] rounded-[28px] bg-white p-8 text-black shadow-2xl">
      <h2 className="mb-8 text-center font-serif text-2xl tracking-[0.2em] text-[#b9852b]">NUESTROS SERVICIOS</h2>

      <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
        {services.map(({ label, icon: Icon }) => (
          <div key={label} className="rounded-2xl border border-[#d7a84b]/40 bg-zinc-50 p-4 text-center">
            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-black text-[#d7a84b]">
              <Icon size={25} strokeWidth={1.5} />
            </div>
            <p className="text-[11px] uppercase leading-tight tracking-wide">{label}</p>
          </div>
        ))}
      </div>

      <div className="mt-7 flex items-center justify-between border-t border-zinc-300 pt-5">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-[#b9852b]">Servicio digno y humano</p>
          <p className="mt-2 text-xl font-semibold text-[#b9852b]">618 138 4790</p>
        </div>
        <QrBox dark={false} />
      </div>
    </article>
  );
}

export function SanDimasBusinessCards() {
  return (
    <main className="min-h-screen bg-[#101010] px-6 py-10 text-white md:px-12">
      <section className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d7a84b]">Proyecto digital</p>
          <h1 className="mt-3 font-serif text-4xl tracking-[0.2em] md:text-5xl">SAN DIMAS FUNERALES</h1>
          <p className="mt-3 text-zinc-400">Dos propuestas de tarjeta digital en negro, dorado y blanco.</p>
        </div>

        <div className="grid gap-12">
          <div>
            <h2 className="mb-4 text-center text-sm uppercase tracking-[0.28em] text-[#d7a84b]">Diseño 1 · Negro y dorado premium</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <ProjectOneFront />
              <ProjectOneBack />
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-center text-sm uppercase tracking-[0.28em] text-[#d7a84b]">Diseño 2 · Moderno blanco, negro y dorado</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <ProjectTwoFront />
              <ProjectTwoBack />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
