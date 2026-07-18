import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import metadata from '../data/metadata.json';

export default function SearchOverlay({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  if (!isOpen) return null;

  // Search items list
  const searchItems = [
    // Destinations
    ...metadata.destinations.map(d => ({
      name: d.id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
      type: 'Destination',
      url: `/destinations/${d.id}`
    })),
    // Holiday Types
    ...metadata.holidayTypes.map(h => ({
      name: h.heroSuptitle || h.id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
      type: 'Holiday Type',
      url: `/holiday-types/${h.id}`
    })),
    // Custom popular itineraries
    { name: 'Luxury Thailand: Cities, Culture & Beaches', type: 'Itinerary', url: '/journeys/luxury-thailand-cities-culture-beaches' },
    { name: 'Sri Lanka Highlights & Maldives', type: 'Itinerary', url: '/journeys/sri-lanka-highlights-maldives' },
    { name: 'Miyabi: The Grand Japan Journey', type: 'Itinerary', url: '/journeys/miyabi-the-grand-japan-journey' },
    { name: 'Cape to Falls Safari', type: 'Itinerary', url: '/journeys/cape-to-falls-a-luxury-rail-safari-journey' },
    { name: 'Anantara Maia Seychelles Villas', type: 'Hotel', url: '/destinations/anantara-maia-seychelles-villas' },
    { name: 'Sun Siyam Iru Veli', type: 'Hotel', url: '/destinations/sun-siyam-iru-veli' },
    { name: 'Emerald Maldives Resort & Spa', type: 'Hotel', url: '/destinations/emerald-maldives-resort-and-spa' }
  ];

  const results = query.trim() === '' ? [] : searchItems.filter(item => 
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (results.length > 0) {
      navigate(results[0].url);
      onClose();
    }
  };

  const handleResultClick = (url) => {
    navigate(url);
    onClose();
  };

  return (
    <div className="search-overlay" style={{ display: 'block', backgroundColor: 'rgb(245, 245, 245)', zIndex: 9999 }}>
      <div className="search-overlay-content">
        <div className="search-header">
          <h1 className="search-brand">PINCH</h1>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <button className="search-close-btn" aria-label="Close search" onClick={onClose}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 5L5 19M5 5L19 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="search-main">
          <div className="search-prompt">
            <h2>SEARCH FOR... DESTINATIONS, HOTELS, ITINERARIES</h2>
          </div>
          <form className="search-form" onSubmit={handleSubmit}>
            <div className="search-input-wrapper">
              <input 
                className="search-input" 
                placeholder="Type what you are looking for" 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
              />
              <button type="submit" className="search-submit-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>
            </div>
          </form>

          {results.length > 0 && (
            <div className="search-results" style={{ marginTop: '2rem', maxHeight: '60vh', overflowY: 'auto' }}>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {results.map((item, idx) => (
                  <li 
                    key={idx} 
                    onClick={() => handleResultClick(item.url)}
                    style={{ 
                      padding: '1rem', 
                      borderBottom: '1px solid #ddd', 
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                    className="search-result-item"
                  >
                    <span style={{ fontWeight: '500', fontSize: '1.2rem', color: '#111' }}>{item.name}</span>
                    <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#666' }}>{item.type}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
