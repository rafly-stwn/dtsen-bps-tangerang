import React from 'react';
import { SITE_CONFIG, EXTERNAL_LINKS } from '../data/config';
import { FOOTER_NAV_LINKS } from '../data/navigation';

export default function Footer() {
  return (
    <footer className="bps-footer pt-5 pb-4" aria-label="Footer Website">
      <div className="container">
        <div className="row g-4 mb-4">
          {/* Col 1: Instansi Brand & Address */}
          <div className="col-12 col-lg-5">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div className="bg-white p-1 rounded" style={{ display: 'inline-block' }}>
                <img 
                  src="/images/bps-tangerang-logo.png" 
                  alt="Logo BPS Kota Tangerang" 
                  style={{ height: '36px', width: 'auto' }}
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <div>
                <h6 className="mb-0 text-white fw-bold">{SITE_CONFIG.agencyName}</h6>
                <small className="text-white-50">{SITE_CONFIG.agencyFullName}</small>
              </div>
            </div>

            <p className="small text-white-50 mb-3" style={{ maxWidth: '400px' }}>
              Portal edukasi dan panduan publik mengenai Data Terpadu Sosial Ekonomi Nasional (DTSEN) untuk seluruh warga Kota Tangerang.
            </p>

            <div className="small text-white-50 d-flex flex-column gap-1">
              <div>
                <i className="bi bi-geo-alt-fill text-primary me-2"></i>
                <span>{SITE_CONFIG.address}</span>
              </div>
              <div>
                <i className="bi bi-envelope-fill text-primary me-2"></i>
                <span>{SITE_CONFIG.email}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigasi Cepat (Internal Links) */}
          <div className="col-6 col-lg-3">
            <h6>Navigasi Halaman</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              {FOOTER_NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a href={link.href} className="text-decoration-none">
                    <i className="bi bi-chevron-right me-1 small"></i>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Kanal Resmi Eksternal */}
          <div className="col-6 col-lg-4">
            <h6>Kanal & Tautan Resmi</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li>
                <a
                  href={EXTERNAL_LINKS.dtsenPortal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-info fw-semibold"
                >
                  Portal Permohonan Data DTSEN ↗
                </a>
              </li>
              <li>
                <a
                  href={EXTERNAL_LINKS.formBps.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  Form Pembaruan BPS ↗
                </a>
              </li>
              <li>
                <a
                  href={EXTERNAL_LINKS.cekBansos.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  Portal Cek Bansos Kemensos ↗
                </a>
              </li>
              <li>
                <a
                  href={EXTERNAL_LINKS.bpsPusat.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  Badan Pusat Statistik RI ↗
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  Portal BPS Kota Tangerang ↗
                </a>
              </li>
              <li>
                <a
                  href={EXTERNAL_LINKS.kemensos.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  Kementerian Sosial RI ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Alert Box */}
        <div className="p-3 rounded bg-dark border border-secondary border-opacity-25 mb-4">
          <p className="small text-white-50 mb-0" style={{ fontSize: '0.82rem' }}>
            <strong className="text-white">Disclaimer:</strong> Informasi pada website ini ditujukan untuk edukasi masyarakat mengenai DTSEN. Untuk informasi atau mekanisme kebijakan terbaru, selalu gunakan kanal resmi yang tercantum pada website.
          </p>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="bps-footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <div>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.agencyName} — Semua Hak Dilindungi.
          </div>
          <div className="text-white-50">
            Layanan Informasi Publik BPS Kota Tangerang
          </div>
        </div>
      </div>
    </footer>
  );
}
