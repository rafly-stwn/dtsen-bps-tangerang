// Konten Hubungan DTSEN, Desil, dan Program Bantuan Sosial
// Disusun dengan formulasi bahasa yang aman sesuai PRD Section 17 & 28

export const BANSOS_RELATION_CONTENT = {
  title: 'Apa Hubungan Desil dengan Program Bantuan?',
  subtitle: 'Memahami Alur Pemanfaatan Data dalam Penentuan Sasaran Kebijakan',
  intro: 'Data DTSEN dan pemeringkatan desil digunakan oleh kementerian/lembaga dan pemerintah daerah sebagai salah satu rujukan penargetan program perlindungan sosial agar lebih tepat sasaran.',
  safeNotice: 'PENTING: Posisi desil bukan merupakan penentu mutlak atau jaminan otomatis seseorang pasti menerima bantuan. Setiap program memiliki kriteria teknis, kuota, dan regulasi tersendiri yang ditetapkan oleh kementerian terkait.',
  steps: [
    {
      step: 1,
      name: 'DTSEN',
      label: 'Basis Data Tunggal',
      desc: 'Pendataan terpadu memuat seluruh kondisi sosial ekonomi keluarga secara menyeluruh.',
      icon: 'bi-database-fill-check'
    },
    {
      step: 2,
      name: 'Variabel Sosial Ekonomi',
      label: '7 Kelompok Data',
      desc: 'Data identitas, pendidikan, kerja, usaha, kesehatan, rumah, dan aset diproses.',
      icon: 'bi-diagram-3-fill'
    },
    {
      step: 3,
      name: 'Pemeringkatan Desil',
      label: 'Skala Relatif 1–10',
      desc: 'Keluarga dipetakan ke dalam 10 kelompok tingkat kesejahteraan relatif nasional.',
      icon: 'bi-bar-chart-steps'
    },
    {
      step: 4,
      name: 'Penentuan Sasaran Program',
      label: 'Penyaringan Awal',
      desc: 'Instansi teknis menggunakan pemeringkatan sebagai salah satu indikator kelompok sasaran.',
      icon: 'bi-funnel-fill'
    },
    {
      step: 5,
      name: 'Pelaksanaan Program',
      label: 'Penyaluran Sesuai Ketentuan',
      desc: 'Bantuan/program disalurkan sesuai kriteria kelayakan, verifikasi lapangan, dan kuota resmi yang berlaku.',
      icon: 'bi-award-fill'
    }
  ],
  rules: [
    {
      type: 'dont',
      title: 'Bukan Jaminan Otomatis',
      desc: 'Berada di Desil 1–4 bukan berarti otomatis menerima seluruh program bantuan, karena setiap bantuan (PKH, BPNT, KIP, dll.) memiliki aturan spesifik.'
    },
    {
      type: 'dont',
      title: 'Bukan Nominal Pendapatan',
      desc: 'Desil tidak mencerminkan angka gaji rupiah per bulan, melainkan gabungan kondisi aset dan kesejahteraan relatif.'
    },
    {
      type: 'do',
      title: 'Fokus pada Keakuratan Data',
      desc: 'Langkah terbaik masyarakat adalah memastikan seluruh data anggota keluarga tercatat secara benar dan mutakhir.'
    }
  ]
};
