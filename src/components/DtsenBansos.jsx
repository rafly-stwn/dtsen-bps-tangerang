import React from 'react';
import { BANSOS_RELATION_CONTENT } from '../data/dtsenBansos';

export default function DtsenBansos() {
  return (
    <section className="section-wrapper" id="dtsen-bansos" aria-labelledby="bansos-heading">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-4 mb-lg-5">
          <span className="section-badge bg-warning-subtle text-dark">Integrasi Kebijakan</span>
          <h2 id="bansos-heading" className="section-title">
            {BANSOS_RELATION_CONTENT.title}
          </h2>
          <p className="section-subtitle mx-auto">
            {BANSOS_RELATION_CONTENT.intro}
          </p>
        </div>

        {/* Safe Notice Alert */}
        <div className="alert alert-info border-info-subtle d-flex align-items-start gap-3 p-3 p-md-4 mb-4 rounded-3" role="alert">
          <i className="bi bi-shield-lock-fill text-primary fs-4 flex-shrink-0 mt-1"></i>
          <div>
            <h6 className="fw-bold mb-1 text-dark">Edukasi Ketentuan Program</h6>
            <p className="small mb-0 text-dark">
              {BANSOS_RELATION_CONTENT.safeNotice}
            </p>
          </div>
        </div>

        {/* Step Flow Diagram */}
        <div className="bps-card p-3 p-md-4 mb-4">
          <h5 className="fw-bold text-dark text-center mb-4">
            Alur Pemanfaatan Data DTSEN Menuju Program Bantuan
          </h5>

          <div className="row g-3 text-center align-items-stretch">
            {BANSOS_RELATION_CONTENT.steps.map((step, idx) => (
              <React.Fragment key={step.step}>
                <div className="col-12 col-md">
                  <div className="p-3 h-100 rounded bg-light border d-flex flex-column justify-content-between">
                    <div>
                      <div className="badge bg-primary text-white rounded-pill px-2 py-1 mb-2 font-monospace">
                        Langkah 0{step.step}
                      </div>
                      <div className="fs-3 text-primary mb-2">
                        <i className={`bi ${step.icon}`}></i>
                      </div>
                      <h6 className="fw-bold text-dark mb-1">{step.name}</h6>
                      <span className="badge bg-white text-secondary border small mb-2 d-inline-block">
                        {step.label}
                      </span>
                    </div>
                    <p className="small text-muted mb-0" style={{ fontSize: '0.82rem' }}>
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Arrow Connector on Desktop */}
                {idx < BANSOS_RELATION_CONTENT.steps.length - 1 && (
                  <div className="col-auto d-none d-lg-flex align-items-center justify-content-center px-0 text-muted">
                    <i className="bi bi-chevron-right fs-4"></i>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Rules & Misconceptions Guidance */}
        <div className="row g-3">
          {BANSOS_RELATION_CONTENT.rules.map((rule, idx) => (
            <div className="col-12 col-md-4" key={idx}>
              <div className={`bps-card p-3 p-md-4 h-100 ${rule.type === 'dont' ? 'border-danger-subtle bg-white' : 'border-success-subtle bg-white'}`}>
                <div className="d-flex align-items-center gap-2 mb-2">
                  <i className={`bi ${rule.type === 'dont' ? 'bi-x-circle-fill text-danger' : 'bi-check-circle-fill text-success'} fs-5`}></i>
                  <h6 className="fw-bold mb-0 text-dark">{rule.title}</h6>
                </div>
                <p className="small text-muted mb-0">{rule.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
