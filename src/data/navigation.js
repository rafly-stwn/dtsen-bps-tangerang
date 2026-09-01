// Data Navigasi Header & Footer

export const NAV_LINKS = [
  { id: 'tentang', label: 'Tentang DTSEN', href: '#tentang-dtsen' },
  { id: 'variabel', label: 'Variabel Data', href: '#variabel-dtsen' },
  { id: 'desil-bansos', label: 'Desil & Bansos', href: '#memahami-desil' },
];

export const FOOTER_NAV_LINKS = [
  { id: 'tentang', label: 'Tentang DTSEN', href: '#tentang-dtsen' },
  { id: 'variabel', label: 'Data & Variabel', href: '#variabel-dtsen' },
  { id: 'desil', label: 'Memahami Desil', href: '#memahami-desil' },
  { id: 'bansos', label: 'DTSEN & Bansos', href: '#dtsen-bansos' },
  { id: 'pembaruan', label: 'Pembaruan Data', href: '#pembaruan-data' },
  { id: 'faq', label: 'FAQ (Tanya Jawab)', href: '#faq' },
];

export const QUICK_ACCESS_ITEMS = [
  {
    id: 'qa-apa-itu',
    icon: 'bi-info-circle-fill',
    title: 'Apa itu DTSEN?',
    description: 'Kenali pengertian dan manfaat basis data',
    targetHref: '#tentang-dtsen',
    badgeColor: 'primary'
  },
  {
    id: 'qa-variabel',
    icon: 'bi-card-checklist',
    title: 'Variabel Data',
    description: '7 kelompok data yang dikumpulkan',
    targetHref: '#variabel-dtsen',
    badgeColor: 'info'
  },
  {
    id: 'qa-desil',
    icon: 'bi-bar-chart-steps',
    title: 'Memahami Desil',
    description: 'Tingkat kesejahteraan desil 1–10',
    targetHref: '#memahami-desil',
    badgeColor: 'success'
  },
  {
    id: 'qa-bansos',
    icon: 'bi-diagram-3-fill',
    title: 'Hubungan Desil & Bansos',
    description: 'Bagaimana data digunakan untuk sasaran program',
    targetHref: '#dtsen-bansos',
    badgeColor: 'warning'
  },
  {
    id: 'qa-pembaruan',
    icon: 'bi-arrow-repeat',
    title: 'Cara Pembaruan Data',
    description: '3 kanal resmi untuk update data',
    targetHref: '#pembaruan-data',
    badgeColor: 'danger'
  }
];
