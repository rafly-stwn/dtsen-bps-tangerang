import React, { useState } from 'react';
import { DTSEN_VARIABLES, VARIABLE_SUMMARY_CARD } from '../data/variables';

export default function VariablesDtsen() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="section-wrapper" id="variabel-dtsen" aria-labelledby="variables-heading">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-4 mb-lg-5">
          <span className="section-badge bg-primary-subtle text-primary">Cakupan Data</span>
          <h2 id="variables-heading" className="section-title">
            Apa Saja yang Ada dalam DTSEN?
          </h2>
          <p className="section-subtitle mx-auto">
            DTSEN memuat 7 kelompok data komprehensif yang menggambarkan kondisi sosial ekonomi Anda secara utuh.
          </p>
        </div>

        {/* Desktop Grid Layout (≥ 768px) */}
        <div className="d-none d-md-block">
          <div className="row g-3 g-lg-4">
            {DTSEN_VARIABLES.map((item) => {
              const isExpanded = expandedId === item.id;
              return (
                <div className="col-md-6 col-lg-3" key={item.id}>
                  <div 
                    className={`bps-card h-100 p-3 p-lg-4 d-flex flex-column justify-content-between cursor-pointer ${
                      isExpanded ? 'border-primary shadow-md bg-light' : ''
                    }`}
                    style={{ transition: 'all 0.2s ease' }}
                  >
                    <div>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div
                          className="icon-bubble"
                          style={{ backgroundColor: item.bgColor, color: item.themeColor }}
                        >
                          <i className={`bi ${item.icon}`}></i>
                        </div>
                        <span className="badge bg-secondary-subtle text-secondary small">
                          #{item.number}
                        </span>
                      </div>

                      <h3 className="h6 fw-bold mb-2 text-dark">{item.title}</h3>
                      <p className="small text-muted mb-3">
                        {item.shortDesc}
                      </p>

                      {isExpanded && (
                        <div className="p-2 mb-3 bg-white rounded border border-primary-subtle small text-dark animate-fade-in">
                          <p className="mb-2 fw-medium">{item.detail}</p>
                          <div className="d-flex flex-wrap gap-1">
                            {item.tags.map((tag, idx) => (
                              <span key={idx} className="badge bg-light text-secondary border small">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <button
                      type="button"
                      className="btn btn-sm btn-link p-0 text-start text-primary fw-bold text-decoration-none d-flex align-items-center gap-1 mt-2"
                      onClick={() => toggleExpand(item.id)}
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? 'Tutup Rincian' : 'Penjelasan'}</span>
                      <i className={`bi ${isExpanded ? 'bi-chevron-up' : 'bi-arrow-right'}`}></i>
                    </button>
                  </div>
                </div>
              );
            })}

            {/* 8th Summary Card */}
            <div className="col-md-6 col-lg-3">
              <div className="bps-card h-100 p-3 p-lg-4 d-flex flex-column justify-content-between bg-primary-subtle border-primary-subtle">
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="icon-bubble bg-primary text-white">
                      <i className="bi bi-database-check"></i>
                    </div>
                    <span className="badge bg-primary text-white small">Pemanfaatan</span>
                  </div>
                  <h3 className="h6 fw-bold mb-2 text-primary">{VARIABLE_SUMMARY_CARD.title}</h3>
                  <p className="small text-dark mb-3">
                    {VARIABLE_SUMMARY_CARD.note}
                  </p>
                </div>
                <div className="text-center pt-2">
                  <img
                    src="/images/data-analytics.png"
                    alt="Ilustrasi pemanfaatan data statistik"
                    style={{ maxHeight: '60px', width: 'auto' }}
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Single-Column Accordion (< 768px) */}
        <div className="d-block d-md-none">
          <div className="accordion bps-faq-accordion" id="mobileVariablesAccordion">
            {DTSEN_VARIABLES.map((item, index) => {
              const collapseId = `collapseVar${item.id}`;
              const headingId = `headingVar${item.id}`;
              const isOpen = expandedId === item.id;

              return (
                <div className="accordion-item" key={item.id}>
                  <h3 className="accordion-header" id={headingId}>
                    <button
                      className={`accordion-button ${isOpen ? '' : 'collapsed'}`}
                      type="button"
                      onClick={() => toggleExpand(item.id)}
                      aria-expanded={isOpen}
                      aria-controls={collapseId}
                    >
                      <div className="d-flex align-items-center gap-3 w-100">
                        <div
                          className="icon-bubble"
                          style={{
                            backgroundColor: item.bgColor,
                            color: item.themeColor,
                            width: '36px',
                            height: '36px',
                            fontSize: '1.1rem'
                          }}
                        >
                          <i className={`bi ${item.icon}`}></i>
                        </div>
                        <div className="text-start pe-2">
                          <span className="d-block fw-bold fs-6 text-dark">{item.title}</span>
                          <span className="d-block small text-muted font-monospace">Variabel #{item.number}</span>
                        </div>
                      </div>
                    </button>
                  </h3>
                  <div
                    id={collapseId}
                    className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}
                    aria-labelledby={headingId}
                  >
                    <div className="accordion-body">
                      <p className="mb-2 text-dark">{item.shortDesc}</p>
                      <div className="p-3 bg-light rounded mb-3 border">
                        <p className="small text-muted mb-2">{item.detail}</p>
                        <div className="d-flex flex-wrap gap-1">
                          {item.tags.map((tag, idx) => (
                            <span key={idx} className="badge bg-white text-dark border small">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Mobile Summary Note */}
            <div className="p-3 mt-3 bg-primary-subtle rounded border border-primary-subtle">
              <div className="d-flex align-items-start gap-2">
                <i className="bi bi-info-circle-fill text-primary fs-5 mt-1"></i>
                <div>
                  <h6 className="fw-bold text-primary mb-1">{VARIABLE_SUMMARY_CARD.title}</h6>
                  <p className="small text-dark mb-0">{VARIABLE_SUMMARY_CARD.note}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
