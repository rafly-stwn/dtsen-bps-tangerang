import React from 'react';
import { UPDATE_DATA_CONTENT } from '../data/updateChannels';

export default function PembaruanData() {
  return (
    <section className="section-wrapper bg-white" id="pembaruan-data" aria-labelledby="pembaruan-heading">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-4 mb-lg-5">
          <span className="section-badge bg-danger-subtle text-danger">Pemutakhiran Data</span>
          <h2 id="pembaruan-heading" className="section-title">
            {UPDATE_DATA_CONTENT.headline}
          </h2>
          <p className="section-subtitle mx-auto">
            {UPDATE_DATA_CONTENT.subheadline}
          </p>
        </div>

        <div className="row g-4 align-items-stretch">
          {/* Left Column: 3 Official Update Channels */}
          <div className="col-12 col-lg-7">
            <div className="d-flex flex-column gap-3 h-100">
              <h4 className="fw-bold text-dark mb-2">
                Pilihan 3 Kanal Pembaruan Data:
              </h4>

              {UPDATE_DATA_CONTENT.channels.map((channel) => {
                let channelImg = '';
                if (channel.id === 'siks-ng') channelImg = '/images/channel-siks-ng.png';
                if (channel.id === 'cek-bansos') channelImg = '/images/channel-cek-bansos.png';
                if (channel.id === 'form-bps') channelImg = '/images/channel-form-bps.png';

                return (
                  <div className="bps-card p-3 p-md-4" key={channel.id}>
                    <div className="d-flex flex-column flex-sm-row align-items-start gap-3">
                      {/* Badge Number & Image */}
                      <div className="d-flex align-items-center gap-2 flex-shrink-0">
                        <span
                          className="channel-number"
                          style={{ backgroundColor: channel.accentColor }}
                        >
                          {channel.number}
                        </span>
                        <img
                          src={channelImg}
                          alt={`Ilustrasi ${channel.title}`}
                          style={{ height: '54px', width: 'auto', objectFit: 'contain' }}
                          onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                      </div>

                      {/* Content & Action */}
                      <div className="flex-grow-1">
                        <h5 className="fw-bold mb-1 text-dark fs-6">{channel.title}</h5>
                        
                        <p className="small text-primary fw-semibold mb-2">
                          {channel.subtitle}
                        </p>
                        
                        <p className="small text-muted mb-3">
                          {channel.description}
                        </p>

                        <div className="pt-2 border-top">
                          {channel.isExternal ? (
                            <a
                              href={channel.targetHref}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-sm btn-bps-primary"
                              aria-label={`${channel.ctaLabel} (Membuka di tab baru)`}
                            >
                              <span>{channel.ctaLabel}</span>
                            </a>
                          ) : (
                            <a
                              href={channel.targetHref}
                              className="btn btn-sm btn-outline-primary fw-bold"
                            >
                              <span>{channel.ctaLabel}</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Pre-Update Checklist & Callout */}
          <div className="col-12 col-lg-5" id="checklist-persiapan">
            <div className="bps-card p-3 p-md-4 h-100 d-flex flex-column justify-content-between bg-light">
              <div>
                <h4 className="fw-bold text-dark mb-2">
                  Sebelum Melakukan Pembaruan
                </h4>
                <p className="small text-muted mb-4">
                  Pastikan Anda telah menyiapkan berkas dan informasi berikut:
                </p>

                <div className="d-flex flex-column gap-3 mb-4">
                  {UPDATE_DATA_CONTENT.checklist.map((item, idx) => (
                    <div className="p-3 bg-white rounded border d-flex align-items-start gap-3 shadow-sm" key={idx}>
                      <i className={`bi ${item.icon} ${item.colorClass} fs-4 flex-shrink-0 mt-1`}></i>
                      <div>
                        <h6 className="fw-bold text-dark mb-1 fs-6">{item.title}</h6>
                        <p className="small text-muted mb-0">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Callout Banner with Friendly Citizen Character */}
              <div>
                <div className="p-3 rounded bg-primary text-white d-flex align-items-center justify-content-between gap-3 shadow-sm mb-3">
                  <div>
                    <h6 className="fw-bold mb-1 fs-6">
                      {UPDATE_DATA_CONTENT.noteBanner.headline}
                    </h6>
                    <p className="small mb-0 text-white-50" style={{ fontSize: '0.82rem' }}>
                      {UPDATE_DATA_CONTENT.noteBanner.subheadline}
                    </p>
                  </div>
                  <img
                    src="/images/citizen-thumbsup.png"
                    alt="Karakter warga BPS tersenyum ramah"
                    style={{ height: '65px', width: 'auto', objectFit: 'contain' }}
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>

                {/* Important Notice */}
                <p className="small text-muted text-center mb-0 fst-italic" style={{ fontSize: '0.78rem' }}>
                  {UPDATE_DATA_CONTENT.disclaimer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
