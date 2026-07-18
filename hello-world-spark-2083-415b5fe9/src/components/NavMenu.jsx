import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavMenu({ isOpen, onClose, onOpenSearch }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [selectedExpert, setSelectedExpert] = useState(null);

  const toggleDropdown = (name) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
      <button className="close" type="button" onClick={onClose}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M19 1L10 10M1 19L10 10M10 10L19 19L1 1" stroke="black"></path>
        </svg>
      </button>
      
      <Link to="/about-us" onClick={handleLinkClick}>About Us</Link>
      <Link to="/news" onClick={handleLinkClick}>News</Link>

      <div className="header-dropdown-wrapper">
        <div className="dropdown-head" onClick={() => toggleDropdown('itineraries')}>
          <div className="name">Signature Itineraries</div>
          <svg className={activeDropdown === 'itineraries' ? 'rotate-180' : ''} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16" height="16">
            <path fill="currentColor" d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
          </svg>
        </div>
        <div className={`list ${activeDropdown === 'itineraries' ? 'active' : ''}`} style={{ display: activeDropdown === 'itineraries' ? 'block' : 'none' }}>
          <Link to="/journeys/luxury-thailand-cities-culture-beaches" onClick={handleLinkClick}>Luxury Thailand</Link>
          <Link to="/journeys/sri-lanka-highlights-maldives" onClick={handleLinkClick}>Sri Lanka & Maldives</Link>
          <Link to="/journeys/miyabi-the-grand-japan-journey" onClick={handleLinkClick}>The Grand Japan Journey</Link>
          <Link to="/journeys/cape-to-falls-a-luxury-rail-safari-journey" onClick={handleLinkClick}>Cape to Falls Safari</Link>
        </div>
      </div>

      <div className="header-dropdown-wrapper">
        <div className="dropdown-head" onClick={() => toggleDropdown('destinations')}>
          <div className="name">Destinations</div>
          <svg className={activeDropdown === 'destinations' ? 'rotate-180' : ''} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16" height="16">
            <path fill="currentColor" d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
          </svg>
        </div>
        <div className={`list ${activeDropdown === 'destinations' ? 'active' : ''}`} style={{ display: activeDropdown === 'destinations' ? 'block' : 'none' }}>
          <div className="mobile-nav-group-title">South East Asia</div>
          <Link to="/destinations/thailand" onClick={handleLinkClick}>Thailand</Link>
          <Link to="/destinations/bali" onClick={handleLinkClick}>Bali</Link>
          <Link to="/destinations/vietnam" onClick={handleLinkClick}>Vietnam</Link>
          <Link to="/destinations/cambodia" onClick={handleLinkClick}>Cambodia</Link>
          <Link to="/destinations/borneo" onClick={handleLinkClick}>Borneo</Link>
          <Link to="/destinations/malaysia" onClick={handleLinkClick}>Malaysia</Link>
          <Link to="/destinations/singapore" onClick={handleLinkClick}>Singapore</Link>

          <div className="mobile-nav-group-title">Indian Ocean</div>
          <Link to="/destinations/maldives" onClick={handleLinkClick}>Maldives</Link>
          <Link to="/destinations/mauritius" onClick={handleLinkClick}>Mauritius</Link>
          <Link to="/destinations/seychelles" onClick={handleLinkClick}>Seychelles</Link>
          <Link to="/destinations/sri-lanka" onClick={handleLinkClick}>Sri Lanka</Link>

          <div className="mobile-nav-group-title">Africa</div>
          <Link to="/destinations/south-africa" onClick={handleLinkClick}>South Africa</Link>
          <Link to="/destinations/kenya" onClick={handleLinkClick}>Kenya</Link>
          <Link to="/destinations/tanzania" onClick={handleLinkClick}>Tanzania</Link>
          <Link to="/destinations/zanzibar" onClick={handleLinkClick}>Zanzibar</Link>

          <div className="mobile-nav-group-title">Other</div>
          <Link to="/destinations/dubai" onClick={handleLinkClick}>Dubai</Link>
          <Link to="/journeys/japan" onClick={handleLinkClick}>Japan</Link>
        </div>
      </div>

      <div className="header-dropdown-wrapper">
        <div className="dropdown-head" onClick={() => toggleDropdown('holidayTypes')}>
          <div className="name">Holiday Types</div>
          <svg className={activeDropdown === 'holidayTypes' ? 'rotate-180' : ''} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16" height="16">
            <path fill="currentColor" d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
          </svg>
        </div>
        <div className={`list ${activeDropdown === 'holidayTypes' ? 'active' : ''}`} style={{ display: activeDropdown === 'holidayTypes' ? 'block' : 'none' }}>
          <Link to="/holiday-types/all-inclusive" onClick={handleLinkClick}>All Inclusive</Link>
          <Link to="/holiday-types/family-holidays" onClick={handleLinkClick}>Family Holidays</Link>
          <Link to="/holiday-types/honeymoons" onClick={handleLinkClick}>Honeymoons</Link>
          <Link to="/holiday-types/luxury-beach-holidays" onClick={handleLinkClick}>Luxury Beach Holidays</Link>
          <Link to="/holiday-types/safaris" onClick={handleLinkClick}>Safaris</Link>
          <Link to="/holiday-types/multi-destinations-holidays" onClick={handleLinkClick}>Multi-Destinations</Link>
        </div>
      </div>

      <button className="search-icon-btn mobile-search-btn" aria-label="Open search" onClick={() => { onClose(); onOpenSearch(); }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
        <span>Search</span>
      </button>

      <div className="callback-form-wrapper">
        <p> PINCH. Where your perfect trip begins.</p>
        <div className="callback-form">
          <a href="tel:+4402078708885" className="callback-types-item">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16">
                <path fill="currentColor" d="M317.1 378.1c-4.7 5.7-12.6 7.5-19.2 4.3c-73.8-34.8-133.5-94.5-168.3-168.3c-3.1-6.6-1.3-14.6 4.3-19.2l49.3-40.4c8.2-6.7 11-18 7-27.8l-40-96c-4.6-11.1-16.8-17.1-28.5-13.9l-88 24C23.2 43.7 16 53.2 16 64c0 238.6 193.4 432 432 432c10.8 0 20.3-7.2 23.2-17.7l24-88c3.2-11.6-2.8-23.8-13.9-28.5l-96-40c-9.8-4.1-21.1-1.3-27.8 7l-40.4 49.3z"></path>
              </svg>
            </div>
            <div className="values">
              <span className="value">Mon–Fri: 9AM–5PM, Sat: by appointment only</span>
              <span className="label bold">0207 870 8885</span>
            </div>
          </a>
          <a href="mailto:connect@pinch.travel" className="callback-types-item">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16">
                <path fill="currentColor" d="M64 80c-26.5 0-48 21.5-48 48l0 28.2L220.8 321.4c20.5 16.5 49.8 16.5 70.3 0L496 156.2l0-28.2c0-26.5-21.5-48-48-48L64 80zM16 176.7L16 384c0 26.5 21.5 48 48 48l384 0c26.5 0 48-21.5 48-48l0-207.3L301.2 333.8c-26.4 21.3-64 21.3-90.4 0L16 176.7z"></path>
              </svg>
            </div>
            <div className="values">
              <span className="value">email us</span>
              <span className="label">connect@pinch.travel</span>
            </div>
          </a>
        </div>
        <p className="callback-form-expert-label">Choose an expert</p>
        <div className="callback-form-experts" role="listbox" aria-label="Select a travel expert">
          <button 
            type="button" 
            className={`callback-form-expert ${selectedExpert === 'britt' ? 'active' : ''}`}
            role="option" 
            aria-selected={selectedExpert === 'britt'} 
            aria-label="Select Britt-Marie"
            onClick={() => setSelectedExpert(selectedExpert === 'britt' ? null : 'britt')}
          >
            <img alt="" className="callback-form-expert__photo" src="/assets/images/britt.jpg" />
            <span className="callback-form-expert__name">Britt-Marie</span>
          </button>
          <button 
            type="button" 
            className={`callback-form-expert ${selectedExpert === 'gemma' ? 'active' : ''}`}
            role="option" 
            aria-selected={selectedExpert === 'gemma'} 
            aria-label="Select Gemma"
            onClick={() => setSelectedExpert(selectedExpert === 'gemma' ? null : 'gemma')}
          >
            <img alt="" className="callback-form-expert__photo" src="/assets/images/gemma.jpeg" />
            <span className="callback-form-expert__name">Gemma</span>
          </button>
        </div>
        <Link to="/travel-inquiry" className="cta outline black" onClick={handleLinkClick} style={{ cursor: 'pointer', display: 'inline-block', width: 'max-content', fontSize: '1rem', textTransform: 'capitalize' }}>
          Talk To A Travel Expert
        </Link>
      </div>
    </nav>
  );
}
