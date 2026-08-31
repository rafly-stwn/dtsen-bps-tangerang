// Konten Pemahaman Desil (Berdasarkan Sumber Resmi BPS & PRD)

export const DESIL_CONTENT = {
  title: 'Apa itu Desil?',
  subtitle: 'Pengelompokan Tingkat Kesejahteraan Relatif Penduduk',
  intro: 'Desil adalah pengelompokan tingkat kesejahteraan relatif penduduk ke dalam 10 kelompok sama besar (masing-masing 10%), diurutkan dari tingkat sosial ekonomi terendah (Desil 1) hingga tertinggi (Desil 10) berdasarkan gabungan seluruh variabel data sosial ekonomi.',
  importantNotice: 'Desil bukan angka pendapatan rupiah per bulan dan bukan label mutlak "miskin" atau "kaya", melainkan posisi relatif kondisi sosial ekonomi dalam populasi.',
  cta: {
    label: 'Pelajari Desil Lebih Lengkap →',
    targetHref: '#faq'
  }
};

export const DESIL_SCALE = [
  {
    level: 1,
    label: 'Desil 1',
    category: 'Sangat Rentan / Terendah',
    percentile: '10% Terbawah',
    description: 'Kelompok 10% rumah tangga dengan tingkat kesejahteraan relatif paling rendah.',
    badgeClass: 'bg-danger text-white',
    colorHex: '#DC2626'
  },
  {
    level: 2,
    label: 'Desil 2',
    category: 'Rentan',
    percentile: '10%–20%',
    description: 'Kelompok rumah tangga dengan tingkat kesejahteraan pada 10% berikutnya di atas Desil 1.',
    badgeClass: 'bg-danger text-white',
    colorHex: '#EA580C'
  },
  {
    level: 3,
    label: 'Desil 3',
    category: 'Rentan',
    percentile: '20%–30%',
    description: 'Kelompok rumah tangga pada rentang kesejahteraan 20% hingga 30%.',
    badgeClass: 'bg-warning text-dark',
    colorHex: '#F59E0B'
  },
  {
    level: 4,
    label: 'Desil 4',
    category: 'Rentan / Menengah Bawah',
    percentile: '30%–40%',
    description: 'Kelompok rumah tangga pada rentang kesejahteraan 30% hingga 40%.',
    badgeClass: 'bg-warning text-dark',
    colorHex: '#EAB308'
  },
  {
    level: 5,
    label: 'Desil 5',
    category: 'Menengah',
    percentile: '40%–50%',
    description: 'Kelompok rumah tangga pada rentang kesejahteraan menengah 40% hingga 50%.',
    badgeClass: 'bg-info text-dark',
    colorHex: '#84CC16'
  },
  {
    level: 6,
    label: 'Desil 6',
    category: 'Menengah',
    percentile: '50%–60%',
    description: 'Kelompok rumah tangga pada rentang kesejahteraan menengah 50% hingga 60%.',
    badgeClass: 'bg-info text-dark',
    colorHex: '#22C55E'
  },
  {
    level: 7,
    label: 'Desil 7',
    category: 'Menengah Atas',
    percentile: '60%–70%',
    description: 'Kelompok rumah tangga pada rentang kesejahteraan 60% hingga 70%.',
    badgeClass: 'bg-success text-white',
    colorHex: '#16A34A'
  },
  {
    level: 8,
    label: 'Desil 8',
    category: 'Menengah Atas',
    percentile: '70%–80%',
    description: 'Kelompok rumah tangga pada rentang kesejahteraan 70% hingga 80%.',
    badgeClass: 'bg-success text-white',
    colorHex: '#15803D'
  },
  {
    level: 9,
    label: 'Desil 9',
    category: 'Mampu / Teratas',
    percentile: '80%–90%',
    description: 'Kelompok rumah tangga pada rentang kesejahteraan 80% hingga 90%.',
    badgeClass: 'bg-primary text-white',
    colorHex: '#0D9488'
  },
  {
    level: 10,
    label: 'Desil 10',
    category: 'Paling Mampu / Tertinggi',
    percentile: '10% Teratas',
    description: 'Kelompok 10% rumah tangga dengan tingkat kesejahteraan relatif paling tinggi.',
    badgeClass: 'bg-primary text-white',
    colorHex: '#0F766E'
  }
];

export const DESIL_KEY_FACTS = [
  {
    icon: 'bi-sliders',
    title: 'Relatif Terhadap Populasi',
    desc: 'Posisi desil dihitung dari perbandingan keseluruhan kondisi sosial ekonomi masyarakat, bukan dari satu variabel terpisah.'
  },
  {
    icon: 'bi-arrow-left-right',
    title: 'Dapat Mengalami Perubahan',
    desc: 'Jika ada pembaruan data anggota keluarga, pekerjaan, perumahan, atau aset, posisi desil dapat bergerak naik atau turun secara wajar.'
  },
  {
    icon: 'bi-check-shield-fill',
    title: 'Bukan Keputusan Tunggal Bansos',
    desc: 'Desil berfungsi sebagai instrumen acuan pemeringkatan. Keputusan akhir program bantuan sosial tetap mengacu pada regulasi dan kriteria program masing-masing kementerian/lembaga.'
  }
];
