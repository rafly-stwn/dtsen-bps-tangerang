// 7 Kategori Variabel dalam Pemutakhiran DTSEN
// Sumber: Infografis Resmi "Variabel dalam Pemutakhiran DTSEN" & BPS

export const DTSEN_VARIABLES = [
  {
    id: 'identitas',
    number: 1,
    title: 'Identitas Kependudukan',
    shortDesc: 'Data dasar kependudukan untuk memastikan Anda dan keluarga tercatat dengan benar.',
    detail: 'Mencakup data NIK, nomor Kartu Keluarga (KK), nama lengkap, hubungan dalam keluarga, jenis kelamin, tanggal lahir, dan status perkawinan untuk validasi data kependudukan.',
    icon: 'bi-person-badge-fill',
    themeColor: '#0D47A1',
    bgColor: '#EBF3FC',
    tags: ['NIK & KK', 'Anggota Keluarga', 'Status Kependudukan']
  },
  {
    id: 'pendidikan',
    number: 2,
    title: 'Pendidikan',
    shortDesc: 'Informasi jenjang pendidikan formal yang ditempuh seluruh anggota keluarga.',
    detail: 'Mencakup partisipasi sekolah, jenjang pendidikan tertinggi yang sedang atau telah ditamatkan, serta kemampuan membaca dan menulis seluruh anggota keluarga.',
    icon: 'bi-mortarboard-fill',
    themeColor: '#16A34A',
    bgColor: '#F0FDF4',
    tags: ['Partisipasi Sekolah', 'Ijazah Terakhir', 'Literasi']
  },
  {
    id: 'ketenagakerjaan',
    number: 3,
    title: 'Ketenagakerjaan',
    shortDesc: 'Informasi mengenai aktivitas pekerjaan, jenis usaha, dan kondisi ketenagakerjaan.',
    detail: 'Mencakup status bekerja, lapangan usaha/sektor pekerjaan, kedudukan dalam pekerjaan (buruh, berusaha sendiri, pekerja bebas), serta pendapatan atau jam kerja.',
    icon: 'bi-briefcase-fill',
    themeColor: '#D97706',
    bgColor: '#FFFBEB',
    tags: ['Status Pekerjaan', 'Sektor Usaha', 'Kedudukan Kerja']
  },
  {
    id: 'usaha',
    number: 4,
    title: 'Kepemilikan Usaha',
    shortDesc: 'Informasi terkait kegiatan usaha mikro, kecil, maupun informal yang dimiliki.',
    detail: 'Mencakup kepemilikan usaha non-pertanian atau pertanian, skala usaha, jumlah tenaga kerja yang dipekerjakan, dan tempat operasional usaha.',
    icon: 'bi-shop',
    themeColor: '#7C3AED',
    bgColor: '#F5F3FF',
    tags: ['Skala Usaha', 'Tenaga Kerja', 'Lokasi Usaha']
  },
  {
    id: 'kesehatan',
    number: 5,
    title: 'Kesehatan dan Disabilitas',
    shortDesc: 'Informasi kondisi kesehatan kronis, jaminan kesehatan, dan disabilitas anggota keluarga.',
    detail: 'Mencakup kepemilikan jaminan kesehatan (BPJS/KIS), riwayat penyakit kronis atau menahun, serta ragam disabilitas fisik, sensorik, mental, maupun intelektual.',
    icon: 'bi-heart-pulse-fill',
    themeColor: '#E11D48',
    bgColor: '#FFF1F2',
    tags: ['BPJS / JKN', 'Penyakit Kronis', 'Ragam Disabilitas']
  },
  {
    id: 'perumahan',
    number: 6,
    title: 'Kondisi Perumahan',
    shortDesc: 'Kondisi fisik tempat tinggal termasuk fasilitas dasar sanitasi dan energi yang tersedia.',
    detail: 'Mencakup status kepemilikan bangunan tempat tinggal, luas lantai, jenis lantai, dinding, atap, sumber air minum layak, sumber penerangan, dan fasilitas sanitasi jamban.',
    icon: 'bi-house-heart-fill',
    themeColor: '#0284C7',
    bgColor: '#F0F9FF',
    tags: ['Status Bangunan', 'Sanitasi & Air', 'Fasilitas Dasar']
  },
  {
    id: 'aset',
    number: 7,
    title: 'Kepemilikan Aset',
    shortDesc: 'Informasi mengenai kepemilikan aset bergerak maupun tidak bergerak yang menunjang kehidupan.',
    detail: 'Mencakup kepemilikan barang bergerak seperti kendaraan bermotor, alat elektronik rumah tangga, tabungan, serta kepemilikan lahan atau properti lain.',
    icon: 'bi-car-front-fill',
    themeColor: '#0D9488',
    bgColor: '#F0FDFA',
    tags: ['Kendaraan', 'Elektronik Rumah', 'Lahan / Properti']
  }
];

export const VARIABLE_SUMMARY_CARD = {
  title: 'Pemanfaatan Data DTSEN',
  description: 'Seluruh variabel ini dihimpun secara komprehensif agar potret sosial ekonomi mencerminkan realitas multi-dimensi kehidupan masyarakat, bukan hanya dari satu faktor semata.',
  note: 'Data ini diolah dan digunakan pemerintah untuk berbagai program pembangunan, perlindungan sosial, dan pemberdayaan masyarakat.'
};
