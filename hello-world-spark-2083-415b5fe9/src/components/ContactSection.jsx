import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ContactSection() {
  const [selectedExpert, setSelectedExpert] = useState(null);

  return (
    <section className="contact-section callback gopher">
      <div className="container">
        <aside className="why-aside callback full-width">
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
            <Link to="/travel-inquiry" className="cta outline black" style={{ cursor: 'pointer', display: 'inline-block', width: 'max-content', fontSize: '1rem', textTransform: 'capitalize' }}>
              Talk To A Travel Expert
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
