import React, { useState } from 'react';
import { SITE_CONFIG } from '../data/config';
import { NAV_LINKS } from '../data/navigation';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const closeNav = () => setIsNavOpen(false);

  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-lg bps-navbar py-2" aria-label="Navigasi Utama">
        <div className="container">
          {/* Logo & Brand Identity */}
          <a className="navbar-brand d-flex align-items-center gap-2" href="#beranda" onClick={closeNav}>
            <img 
              src="/images/bps-tangerang-logo.png" 
              alt="Logo BPS Kota Tangerang" 
              className="bps-brand-logo"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling.style.display = 'block';
              }}
            />
            <div className="d-none" style={{ lineHeight: 1.1 }}>
              <span className="bps-brand-title d-block">{SITE_CONFIG.agencyName}</span>
              <span className="bps-brand-subtitle d-block">{SITE_CONFIG.agencyFullName}</span>
            </div>
          </a>

          {/* Mobile Hamburger Toggle Button */}
          <button
            className="navbar-toggler border-0 p-2 shadow-none"
            type="button"
            onClick={toggleNav}
            aria-controls="bpsNavbarContent"
            aria-expanded={isNavOpen}
            aria-label="Buka menu navigasi"
          >
            <i className={`bi ${isNavOpen ? 'bi-x-lg' : 'bi-list'} fs-3 text-primary`}></i>
          </button>

          {/* Navigation Items & CTA */}
          <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="bpsNavbarContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 py-2 py-lg-0">
              {NAV_LINKS.map((link) => (
                <li className="nav-item" key={link.id}>
                  <a 
                    className="nav-link" 
                    href={link.href}
                    onClick={closeNav}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Header Action Button */}
            <div className="d-flex align-items-center pt-2 pt-lg-0">
              <a 
                href="#pembaruan-data" 
                className="btn btn-bps-primary w-100 w-lg-auto text-center"
                onClick={closeNav}
              >
                <i className="bi bi-arrow-repeat"></i>
                <span>Perbarui Data</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
