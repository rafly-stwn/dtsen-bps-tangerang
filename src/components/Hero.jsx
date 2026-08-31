import React from 'react';
import { HERO_CONTENT, TRUST_BENEFITS } from '../data/dtsenContent';

export default function Hero() {
  return (
    <section className="hero-section" id="beranda" aria-labelledby="hero-heading">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          {/* Left Column: Headline, Definition, CTAs */}
          <div className="col-12 col-lg-7 text-center text-lg-start">
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1 mb-3 rounded-pill bg-white border shadow-sm">
              <span className="badge bg-primary text-white px-2 py-1 rounded">BPS Kota Tangerang</span>
              <span className="small text-muted fw-semibold">Layanan Informasi Publik</span>
            </div>

            <h1 id="hero-heading" className="hero-title mb-3">
              Kenali DTSEN,<br />
              <span className="text-primary">Pastikan Data Anda Akurat</span>
            </h1>

            <p className="hero-lead mb-4">
              DTSEN adalah basis data tunggal individu dan/atau keluarga yang memuat kondisi{' '}
              <strong className="text-success">sosial ekonomi</strong> penduduk Indonesia.
            </p>

            {/* Action Buttons */}
            <div className="d-flex flex-column flex-sm-row align-items-stretch align-items-sm-center gap-3 justify-content-center justify-content-lg-start mb-4">
              <a href={HERO_CONTENT.primaryCta.targetHref} className="btn btn-bps-primary">
                <span>{HERO_CONTENT.primaryCta.label}</span>
              </a>
              <a href={HERO_CONTENT.secondaryCta.targetHref} className="btn btn-bps-secondary">
                <span>{HERO_CONTENT.secondaryCta.label}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Cheerful Family Vector Illustration */}
          <div className="col-12 col-lg-5">
            <div className="hero-img-container">
              <img
                src="/images/hero-family.png"
                alt="Ilustrasi keluarga Indonesia yang tersenyum ramah di depan rumah mereka"
                className="hero-img"
                width="505"
                height="395"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Trust Strip / Quick Benefits Banner */}
        <div className="row mt-4 mt-lg-5">
          <div className="col-12">
            <div className="trust-strip">
              <div className="row g-3 g-md-4">
                {TRUST_BENEFITS.map((benefit) => (
                  <div className="col-12 col-md-4" key={benefit.id}>
                    <div className="trust-item h-100">
                      <div className={`trust-icon-box bg-light ${benefit.colorClass}`}>
                        <i className={`bi ${benefit.icon}`}></i>
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1 text-dark">{benefit.title}</h6>
                        <p className="small text-muted mb-0">{benefit.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
