import React, { useState } from 'react';
import { FAQ_DATA } from '../data/faq';

export default function FaqSection() {
  const [openFaqId, setOpenFaqId] = useState('faq-1');

  const toggleFaq = (id) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="section-wrapper" id="faq" aria-labelledby="faq-heading">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-4 mb-lg-5">
          <span className="section-badge bg-primary-subtle text-primary">Tanya Jawab</span>
          <h2 id="faq-heading" className="section-title">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
          <p className="section-subtitle mx-auto">
            Temukan jawaban ringkas atas pertanyaan umum seputar DTSEN, desil, dan pembaruan data.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="accordion bps-faq-accordion" id="dtsenFaqAccordion">
              {FAQ_DATA.map((item, index) => {
                const isOpen = openFaqId === item.id;
                const headingId = `heading-${item.id}`;
                const collapseId = `collapse-${item.id}`;

                return (
                  <div className="accordion-item" key={item.id}>
                    <h3 className="accordion-header" id={headingId}>
                      <button
                        className={`accordion-button ${isOpen ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => toggleFaq(item.id)}
                        aria-expanded={isOpen}
                        aria-controls={collapseId}
                      >
                        <span className="me-2 text-primary font-monospace fw-bold">
                          {String(index + 1).padStart(2, '0')}.
                        </span>
                        <span>{item.question}</span>
                      </button>
                    </h3>
                    <div
                      id={collapseId}
                      className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}
                      aria-labelledby={headingId}
                    >
                      <div className="accordion-body">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Help Callout Box */}
            <div className="mt-4 p-3 p-md-4 rounded bg-primary-subtle border border-primary-subtle d-flex flex-column flex-sm-row align-items-center justify-content-between gap-3 text-center text-sm-start">
              <div>
                <h6 className="fw-bold text-primary mb-1">Masih memiliki pertanyaan seputar data Anda?</h6>
                <p className="small text-dark mb-0">
                  Kunjungi kantor BPS Kota Tangerang atau konsultasikan dengan aparat kelurahan setempat.
                </p>
              </div>
              <a href="#pembaruan-data" className="btn btn-sm btn-bps-primary flex-shrink-0">
                <span>Lihat Panduan Pembaruan →</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
