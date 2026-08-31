// Konfigurasi Terpusat: URL Eksternal & Metadata Instansi
// Sumber Tunggal untuk seluruh link keluar agar mudah diperbarui jika ada perubahan kebijakan/URL pemerintah

export const SITE_CONFIG = {
  appName: 'Portal Informasi DTSEN',
  agencyName: 'BPS Kota Tangerang',
  agencyFullName: 'Badan Pusat Statistik Kota Tangerang',
  tagline: 'Kenali DTSEN, Pastikan Data Anda Akurat',
  address: 'Jl. TMP Taruna No. 27, Sukaasih, Kec. Tangerang, Kota Tangerang, Banten 15111',
  email: 'bps3671@bps.go.id',
  website: 'https://tangerangkota.bps.go.id',
};

export const EXTERNAL_LINKS = {
  // Kanal Resmi Pembaruan Data
  formBps: {
    id: 'form-bps',
    label: 'Buka Form BPS',
    url: 'https://dtsen-form.bps.go.id',
    displayUrl: 'dtsen-form.bps.go.id',
    badge: 'Kanal BPS',
    description: 'Akses formulir pembaruan data DTSEN melalui kanal resmi BPS.',
    isExternal: true,
  },
  cekBansos: {
    id: 'cek-bansos',
    label: 'Buka Cek Bansos',
    url: 'https://cekbansos.kemensos.go.id',
    displayUrl: 'cekbansos.kemensos.go.id',
    badge: 'Kanal Kemensos',
    description: 'Pengecekan dan pembaruan data secara mandiri melalui aplikasi/portal Cek Bansos.',
    isExternal: true,
  },
  siksNg: {
    id: 'siks-ng',
    label: 'Informasi SIKS-NG',
    description: 'Pembaruan data difasilitasi melalui pengisi data desa/kelurahan setempat.',
    isExternal: false,
  },
  bpsPusat: {
    label: 'Website BPS RI',
    url: 'https://www.bps.go.id',
    isExternal: true,
  },
  kemensos: {
    label: 'Kementerian Sosial RI',
    url: 'https://kemensos.go.id',
    isExternal: true,
  }
};
