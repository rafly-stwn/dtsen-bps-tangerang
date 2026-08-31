import React from 'react';
import { ABOUT_DTSEN } from '../data/dtsenContent';

export default function ApaItuDtsen() {
  return (
    <section className="section-wrapper bg-white" id="tentang-dtsen" aria-labelledby="about-dtsen-heading">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          {/* Left Column: Explanatory Text */}
          <div className="col-12 col-lg-7">
            <span className="section-badge bg-primary-subtle text-primary">Tentang DTSEN</span>
            <h2 id="about-dtsen-heading" className="section-title">
              {ABOUT_DTSEN.title}
            </h2>
            <p className="lead text-primary fw-semibold mb-3 fs-6">
              {ABOUT_DTSEN.subtitle}
            </p>

            <div className="text-secondary mb-4">
              {ABOUT_DTSEN.paragraphs.map((p, idx) => (
                <p key={idx} className="mb-2">
                  {p}
                </p>
              ))}
            </div>

            <div className="d-flex flex-wrap gap-2 pt-2">
              <a href="#variabel-dtsen" className="btn btn-bps-primary">
                <span>Lihat 7 Variabel Data →</span>
              </a>
              <a href="#memahami-desil" className="btn btn-outline-secondary fw-bold px-3 py-2">
                <span>Pelajari Desil →</span>
              </a>
            </div>
          </div>

          {/* Right Column: Key Concept Cards */}
          <div className="col-12 col-lg-5">
            <div className="d-flex flex-column gap-3">
              {ABOUT_DTSEN.keyPoints.map((point, index) => (
                <div key={index} className="bps-card p-3 p-md-4 border-start border-4 border-primary">
                  <div className="d-flex align-items-start gap-3">
                    <div className="badge bg-primary text-white rounded-circle p-2 mt-1" style={{ width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {index + 1}
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1 text-dark">{point.title}</h6>
                      <p className="small text-muted mb-0">{point.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
