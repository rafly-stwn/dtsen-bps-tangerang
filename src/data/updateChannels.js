// 3 Kanal Resmi Pembaruan Data DTSEN & Informasi Persiapan
// Sumber: Infografis Resmi "Pembaruan Data DTSEN Bisa Melalui 3 Cara" & PRD Section 18-19

import { EXTERNAL_LINKS } from './config';

export const UPDATE_DATA_CONTENT = {
  headline: 'Data Anda Tidak Sesuai?',
  subheadline: 'Ketahui cara memperbaruinya melalui 3 kanal resmi yang tersedia.',
  noteBanner: {
    headline: 'Data Anda Akurat, Program Pemerintah Tepat Sasaran!',
    subheadline: 'Pastikan data Anda tercatat dengan benar untuk mendukung kebijakan yang adil dan transparan.',
  },
  channels: [
    {
      number: '01',
      id: 'siks-ng',
      title: 'Melalui Aplikasi SIKS-NG',
      subtitle: 'Datang langsung ke pengisi data desa / kelurahan setempat',
      description: 'Layanan pembaruan data yang difasilitasi oleh operator desa/kelurahan menggunakan Sistem Informasi Kesejahteraan Sosial Next Generation (SIKS-NG).',
      actionType: 'internal',
      ctaLabel: 'Lihat Petunjuk SIKS-NG ↓',
      targetHref: '#checklist-persiapan',
      badge: 'Fasilitasi Desa/Kelurahan',
      badgeClass: 'bg-primary text-white',
      accentColor: '#16A34A',
      icon: 'bi-building-fill-check',
      isExternal: false,
      details: [
        'Kunjungi kantor desa atau kelurahan domisili Anda.',
        'Temui petugas/operator SIKS-NG kelurahan setempat.',
        'Bawa dokumen kependudukan asli dan fotokopi yang diperlukan.'
      ]
    },
    {
      number: '02',
      id: 'cek-bansos',
      title: 'Melalui Aplikasi Cek Bansos',
      subtitle: 'Pembaruan secara mandiri melalui aplikasi resmi Kemensos',
      description: 'Layanan mandiri dari Kementerian Sosial RI melalui aplikasi mobile "Cek Bansos" untuk melakukan usul/sanggah data penerima manfaat.',
      actionType: 'external',
      ctaLabel: 'Buka Cek Bansos ↗',
      targetHref: EXTERNAL_LINKS.cekBansos.url,
      badge: 'Aplikasi Mandiri',
      badgeClass: 'bg-info text-dark',
      accentColor: '#0284C7',
      icon: 'bi-phone-fill',
      isExternal: true,
      details: [
        'Unduh aplikasi resmi "Cek Bansos" di Google Play Store / App Store.',
        'Lakukan registrasi akun menggunakan NIK dan nomor KK.',
        'Manfaatkan menu Usul-Sanggah untuk memperbarui data sosial ekonomi keluarga.'
      ]
    },
    {
      number: '03',
      id: 'form-bps',
      title: 'Melalui Form BPS / Cek DTSEN',
      subtitle: 'Akses website resmi form pembaruan data BPS',
      description: 'Layanan pemutakhiran data yang disediakan langsung oleh Badan Pusat Statistik melalui portal formulir daring resmi.',
      actionType: 'external',
      ctaLabel: 'Buka Form BPS ↗',
      targetHref: EXTERNAL_LINKS.formBps.url,
      displayUrl: EXTERNAL_LINKS.formBps.displayUrl,
      badge: 'Portal Resmi BPS',
      badgeClass: 'bg-warning text-dark',
      accentColor: '#D97706',
      icon: 'bi-laptop-fill',
      isExternal: true,
      details: [
        'Kunjungi tautan resmi: dtsen-form.bps.go.id.',
        'Baca petunjuk pengisian dan daftar berkas yang disyaratkan.',
        'Isi data perubahan secara teliti sesuai kondisi nyata saat ini.'
      ]
    }
  ],
  checklist: [
    {
      icon: 'bi-file-earmark-check-fill',
      title: 'Dokumen yang Diperlukan',
      desc: 'Siapkan dokumen pendukung yang valid (misal: Kartu Keluarga terbaru, KTP-el, surat keterangan kematian jika anggota berkurang, dsb.) sesuai perubahan data yang diajukan.',
      colorClass: 'text-success'
    },
    {
      icon: 'bi-geo-alt-fill',
      title: 'Informasi Desa / Kelurahan',
      desc: 'Untuk pembaruan melalui SIKS-NG, Anda dapat berkonsultasi terlebih dahulu ke pihak pengisi data / aparatur RT, RW, atau kantor kelurahan setempat.',
      colorClass: 'text-primary'
    },
    {
      icon: 'bi-shield-fill-check',
      title: 'Informasi yang Akurat',
      desc: 'Pastikan seluruh keterangan yang Anda berikan adalah benar dan dapat dipertanggungjawabkan sesuai kondisi faktual keluarga di lapangan.',
      colorClass: 'text-purple'
    }
  ],
  disclaimer: 'Catatan Penting: Pengajuan pembaruan data tidak berarti posisi desil akan berubah secara instan atau otomatis. Data yang diajukan akan melalui proses verifikasi, pemutakhiran, dan penghitungan komposit sesuai metode resmi yang berlaku.'
};
