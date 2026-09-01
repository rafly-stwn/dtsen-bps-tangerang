import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import QuickAccessNav from '../components/QuickAccessNav';
import ApaItuDtsen from '../components/ApaItuDtsen';
import VariablesDtsen from '../components/VariablesDtsen';
import DesilSection from '../components/DesilSection';
import DtsenBansos from '../components/DtsenBansos';
import PembaruanData from '../components/PembaruanData';
import FaqSection from '../components/FaqSection';
import Footer from '../components/Footer';
import LayananDtsenModal from '../components/LayananDtsenModal';

export default function HomePage() {
  const [isLayananModalOpen, setIsLayananModalOpen] = useState(false);

  const openLayananModal = () => setIsLayananModalOpen(true);
  const closeLayananModal = () => setIsLayananModalOpen(false);

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* 1. Header & Navigation */}
      <Header onOpenLayananModal={openLayananModal} />

      <main id="main-content" tabIndex="-1">
        {/* 2. Hero Section + Trust Strip */}
        <Hero />

        {/* 3. Quick Access Navigator Aid */}
        <QuickAccessNav />

        {/* 4. Apa Itu DTSEN (Kenali) */}
        <ApaItuDtsen />

        {/* 5. 7 Variabel Data DTSEN (Pahami) */}
        <VariablesDtsen />

        {/* 6. Memahami Desil 1–10 (Pahami) */}
        <DesilSection />

        {/* 7. DTSEN & Bansos (Pahami) */}
        <DtsenBansos />

        {/* 8. Kanal Pembaruan Data & Persiapan (Bertindak) */}
        <PembaruanData />

        {/* 9. FAQ Section */}
        <FaqSection />
      </main>

      {/* 10. Footer & Official Links */}
      <Footer />

      {/* 11. Modal Layanan DTSEN (Pilihan Warga vs Instansi) */}
      <LayananDtsenModal
        isOpen={isLayananModalOpen}
        onClose={closeLayananModal}
      />
    </div>
  );
}
