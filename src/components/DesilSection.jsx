import React, { useState } from 'react';
import { DESIL_CONTENT, DESIL_SCALE, DESIL_KEY_FACTS } from '../data/desil';
import { scrollToSection } from '../utils/scroll';

export default function DesilSection() {
  const [selectedDesil, setSelectedDesil] = useState(1);

  const activeData = DESIL_SCALE.find((d) => d.level === selectedDesil) || DESIL_SCALE[0];

  return (
    <section className="section-wrapper bg-white" id="memahami-desil" aria-labelledby="desil-heading">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-4 mb-lg-5">
          <span className="section-badge bg-success-subtle text-success">Tingkat Kesejahteraan</span>
          <h2 id="desil-heading" className="section-title">
            {DESIL_CONTENT.title}
          </h2>
          <p className="section-subtitle mx-auto">
            {DESIL_CONTENT.intro}
          </p>
        </div>

        {/* Notice Callout Box */}
        <div className="alert alert-warning border-warning-subtle d-flex align-items-start gap-3 p-3 p-md-4 mb-4 rounded-3 shadow-sm" role="alert">
          <i className="bi bi-exclamation-triangle-fill text-warning fs-4 flex-shrink-0 mt-1"></i>
          <div>
            <h6 className="fw-bold mb-1 text-dark">Prinsip Penting Pemahaman Desil</h6>
            <p className="small mb-0 text-dark">
              {DESIL_CONTENT.importantNotice}
            </p>
          </div>
        </div>

        {/* Desil Scale Interactive Visual */}
        <div className="desil-scale-container mb-4">
          {/* Responsive Badges: Compact on mobile, full on tablet/desktop */}
          <div className="d-flex justify-content-between align-items-center gap-2 mb-3">
            <span className="badge bg-danger-subtle text-danger fw-bold px-2 px-sm-3 py-1">
              <i className="bi bi-arrow-left me-1"></i>
              <span className="d-none d-md-inline">Kesejahteraan </span>Relatif Rendah
            </span>
            <span className="badge bg-success-subtle text-success fw-bold px-2 px-sm-3 py-1">
              <span className="d-none d-md-inline">Kesejahteraan </span>Relatif Tinggi <i className="bi bi-arrow-right ms-1"></i>
            </span>
          </div>

          {/* Scale 1-10 Bar with ample headroom (pt-3 pb-2) to avoid clipping active scaled circles */}
          <div className="overflow-x-auto pt-3 pb-2 mb-3" style={{ WebkitOverflowScrolling: 'touch' }}>
            <div className="d-flex align-items-center justify-content-between text-center py-2" style={{ minWidth: '360px' }}>
              {DESIL_SCALE.map((item) => {
                const isActive = selectedDesil === item.level;
                return (
                  <button
                    key={item.level}
                    type="button"
                    className="btn p-1 border-0 desil-bar-item"
                    onClick={() => setSelectedDesil(item.level)}
                    aria-label={`Pilih ${item.label}: ${item.category}`}
                    aria-pressed={isActive}
                  >
                    <div
                      className={`desil-circle ${isActive ? 'active' : ''}`}
                      style={{ backgroundColor: item.colorHex }}
                    >
                      {item.level}
                    </div>
                    <span className={`small d-block font-monospace ${isActive ? 'fw-bold text-dark' : 'text-muted'}`} style={{ fontSize: '0.75rem' }}>
                      D{item.level}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Desil Detail Panel */}
          <div className="p-3 p-md-4 rounded bg-light border border-primary-subtle">
            <div className="row align-items-center g-3">
              <div className="col-12 col-md-8">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <span className={`badge ${activeData.badgeClass} px-3 py-1`}>
                    {activeData.label}
                  </span>
                  <span className="badge bg-white text-dark border small">
                    Rentang: {activeData.percentile}
                  </span>
                </div>
                <h5 className="fw-bold text-dark mb-1">
                  Kelompok {activeData.category}
                </h5>
                <p className="small text-muted mb-0">
                  {activeData.description}
                </p>
              </div>
              <div className="col-12 col-md-4 text-md-end">
                <span className="small text-muted d-block mb-2">Ingin tahu hubungan desil & bansos?</span>
                <a 
                  href="#dtsen-bansos" 
                  className="btn btn-sm btn-bps-primary"
                  onClick={(e) => scrollToSection(e, '#dtsen-bansos')}
                >
                  <span>Lihat Hubungan Bansos →</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Key Facts Cards */}
        <div className="row g-3">
          {DESIL_KEY_FACTS.map((fact, idx) => (
            <div className="col-12 col-md-4" key={idx}>
              <div className="bps-card p-3 p-md-4 h-100">
                <div className="d-flex align-items-center gap-2 mb-2 text-primary">
                  <i className={`bi ${fact.icon} fs-4`}></i>
                  <h6 className="fw-bold mb-0 text-dark">{fact.title}</h6>
                </div>
                <p className="small text-muted mb-0">{fact.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
