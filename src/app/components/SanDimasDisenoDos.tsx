import { JewelryBusinessCard } from './JewelryBusinessCard';

const cardData = {
  brand: 'SAN DIMAS',

  category: 'Casa Funeraria',

  subtitle: 'ATENCIÓN 24/7',

  owner: 'Rosy Salazar',

  role: 'Directora / Logística',

  phone: '618 138 4790',

  whatsapp: '526181384790',

  address: [
    'Calle Canis Mayor 117',
    'Villa del Guadiana, Dgo.',
  ],

  services: [
    {
      icon: '✟',
      title: 'Cremaciones y\ncremaciones directas',
    },
    {
      icon: '⚰',
      title: 'Ataúdes finos\ny económicos',
    },
    {
      icon: '✈',
      title: 'Traslados nacionales\ne internacionales',
    },
    {
      icon: '☑',
      title: 'Planes previsores',
    },
    {
      icon: '⚱',
      title: 'Inhumaciones y\nexhumaciones',
    },
    {
      icon: '🐾',
      title: 'Cremaciones\nde mascotas',
    },
    {
      icon: '⚱',
      title: 'Ventas de urnas\ny relicarios',
    },
    {
      icon: '🚘',
      title: 'Servicios de carroza',
    },
  ],
};

export function SanDimasDisenoDos() {
  return <JewelryBusinessCard {...cardData} />;
}