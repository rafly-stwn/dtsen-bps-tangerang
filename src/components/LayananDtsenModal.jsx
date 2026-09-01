import React, { useEffect } from 'react';
import { EXTERNAL_LINKS } from '../data/config';

export default function LayananDtsenModal({ isOpen, onClose }) {
  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePembaruanClick = () => {
    onClose();
    const section = document.getElementById('pembaruan-data');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      role="dialog"
      aria-modal="true"
      aria-labelledby="layananModalTitle"
      style={{ backgroundColor: 'rgba(15, 23, 42, 0.65)', backdropFilter: 'blur(3px)', zIndex: 1060 }}
      onClick={onClose}
    >
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content border-0 shadow-lg" style={{ borderRadius: '16px', overflow: 'hidden' }}>
          {/* Modal Header */}
          <div className="modal-header border-0 pb-0 pt-4 px-4 px-md-5 d-flex align-items-start justify-content-between">
            <div>
              <div className="d-inline-flex align-items-center gap-2 px-3 py-1 mb-2 rounded-pill bg-primary-subtle text-primary fw-bold small">
                <i className="bi bi-grid-fill"></i>
                <span>Pusat Layanan DTSEN</span>
              </div>
              <h4 className="modal-title fw-bold text-dark mb-1" id="layananModalTitle">
                Pilih Kebutuhan Layanan Anda
              </h4>
              <p className="small text-muted mb-0">
                Silakan pilih jenis layanan DTSEN yang sesuai dengan keperluan Anda:
              </p>
            </div>
            <button
              type="button"
              className="btn-close ms-2"
              aria-label="Tutup modal"
              onClick={onClose}
            ></button>
          </div>

          {/* Modal Body: 2 Choices */}
          <div className="modal-body p-4 p-md-5 pt-3">
            <div className="row g-3 g-md-4">
              {/* Choice 1: Pembaruan Data Warga */}
              <div className="col-12 col-md-6">
                <div className="bps-card h-100 p-4 border-2 border-success-subtle d-flex flex-column justify-content-between bg-white hover-lift">
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="icon-bubble bg-success-subtle text-success">
                        <i className="bi bi-person-check-fill fs-4"></i>
                      </div>
                      <span className="badge bg-success text-white px-2 py-1 small">
                        Warga / Keluarga
                      </span>
                    </div>

                    <h5 className="fw-bold text-dark mb-2 fs-6">
                      Pembaruan Data Keluarga
                    </h5>
                    <p className="small text-muted mb-3" style={{ lineHeight: '1.55' }}>
                      Untuk masyarakat yang ingin memutakhirkan data kependudukan, pekerjaan, tempat tinggal, atau aset keluarga yang belum sesuai.
                    </p>
                  </div>

                  <div className="pt-2 border-top">
                    <button
                      type="button"
                      className="btn btn-bps-secondary w-100 justify-content-center"
                      onClick={handlePembaruanClick}
                    >
                      <i className="bi bi-arrow-down-circle"></i>
                      <span>Lihat Cara Pembaruan →</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Choice 2: Permohonan Data Instansi / Lembaga */}
              <div className="col-12 col-md-6">
                <div className="bps-card h-100 p-4 border-2 border-primary-subtle d-flex flex-column justify-content-between bg-white hover-lift">
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="icon-bubble bg-primary-subtle text-primary">
                        <i className="bi bi-building-gear fs-4"></i>
                      </div>
                      <span className="badge bg-primary text-white px-2 py-1 small">
                        Instansi / Lembaga
                      </span>
                    </div>

                    <h5 className="fw-bold text-dark mb-2 fs-6">
                      Permohonan Akses Data DTSEN
                    </h5>
                    <p className="small text-muted mb-3" style={{ lineHeight: '1.55' }}>
                      Layanan pengajuan dan permohonan akses dataset resmi DTSEN bagi instansi pemerintah, akademisi, atau lembaga melalui portal Satu Data.
                    </p>
                  </div>

                  <div className="pt-2 border-top">
                    <a
                      href={EXTERNAL_LINKS.dtsenPortal.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-bps-primary w-100 justify-content-center"
                      onClick={onClose}
                    >
                      <span>Buka Portal Permohonan ↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Disclaimer Helper at Bottom of Modal */}
            <div className="mt-4 p-3 bg-light rounded border text-center">
              <p className="small text-muted mb-0" style={{ fontSize: '0.8rem' }}>
                <i className="bi bi-info-circle me-1 text-primary"></i>
                Pengecekan desil bansos individu difasilitasi melalui kanal <strong>Kemensos / Kelurahan</strong>, sedangkan permohonan data agregat/analisis dikelola via portal <strong>dtsen.data.go.id</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
