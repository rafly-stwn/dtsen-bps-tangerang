import React from 'react';
import { QUICK_ACCESS_ITEMS } from '../data/navigation';

export default function QuickAccessNav() {
  return (
    <section className="py-4 bg-light border-top border-bottom" aria-label="Akses Cepat Informasi">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h6 className="fw-bold text-muted text-uppercase mb-0 small" style={{ letterSpacing: '0.05em' }}>
            <i className="bi bi-compass me-1 text-primary"></i> Akses Cepat Informasi
          </h6>
          <span className="small text-muted d-none d-sm-inline">Pilih topik yang ingin Anda ketahui:</span>
        </div>

        <div className="row g-2 g-md-3">
          {QUICK_ACCESS_ITEMS.map((item) => (
            <div className="col-6 col-md-4 col-lg" key={item.id}>
              <a href={item.targetHref} className="quick-access-card h-100">
                <i className={`bi ${item.icon} fs-4 text-${item.badgeColor}`}></i>
                <div>
                  <span className="d-block fw-bold small text-dark">{item.title}</span>
                  <span className="d-none d-lg-block text-muted" style={{ fontSize: '0.72rem' }}>
                    {item.description}
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
