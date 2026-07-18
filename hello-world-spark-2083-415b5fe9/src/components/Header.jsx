import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const itineraryCategories = [
  {
    id: 'Popular Journeys',
    label: 'Popular Journeys',
    links: [
      { label: 'Luxury Thailand', to: '/journeys/itineraries/luxury-thailand-cities-culture-beaches' },
      { label: 'Sri Lanka & Maldives', to: '/journeys/itineraries/sri-lanka-highlights-maldives' },
      { label: 'The Grand Japan Journey', to: '/journeys/itineraries/miyabi-the-grand-japan-journey' },
      { label: 'Cape to Falls Safari', to: '/journeys/itineraries/cape-to-falls-a-luxury-rail-safari-journey' }
    ],
    featured: {
      title: 'Cape to Falls Safari',
      description: 'Capture the romance of Rovos Rail and the raw power of Victoria Falls.',
      image: '/assets/images/Cape-Town.png',
      to: '/journeys/itineraries/cape-to-falls-a-luxury-rail-safari-journey'
    }
  },
  {
    id: 'South East Asia',
    label: 'South East Asia',
    links: [
      { label: 'Bangkok & Hidden Islands', to: '/journeys/itineraries/bangkok-hidden-islands-thailand' },
      { label: 'Thailand In Style', to: '/journeys/itineraries/thailand-in-style' },
      { label: 'Thailand For Families', to: '/journeys/itineraries/thailand-for-families' },
      { label: 'Singapore Highlights & Malaysian Islands', to: '/journeys/itineraries/singapore-highlights-malaysian-islands' },
      { label: 'Malaysian Explorer', to: '/journeys/itineraries/malaysian-explorer' },
      { label: 'Vietnam North to South', to: '/journeys/itineraries/vietnam-north-to-south' },
      { label: 'Cambodian Discovery', to: '/journeys/itineraries/cambodian-discovery' },
      { label: 'Borneo Wildlife Adventure', to: '/journeys/itineraries/borneo-wildlife-adventure' },
      { label: 'Bali & Lombok', to: '/journeys/itineraries/bali-lombok' }
    ],
    featured: {
      title: 'Thailand In Style',
      description: 'Discover vibrant cities, rich history, lush landscapes and idyllic beaches.',
      image: '/assets/images/hero.jpg',
      to: '/journeys/itineraries/thailand-in-style'
    }
  },
  {
    id: 'Africa',
    label: 'Africa',
    links: [
      { label: 'Table Mountain to Turquoise Shores', to: '/journeys/itineraries/table-mountain-to-turquoise-shores' },
      { label: 'South Africa Self-Drive & Mauritius Stay', to: '/journeys/itineraries/south-africa-self-drive-adventure-mauritius-island-stay' },
      { label: 'Camps Bay, Safari & Falls', to: '/journeys/itineraries/from-coast-to-cascade-camps-bay-safari-victoria-falls' },
      { label: 'Botswana’s Wild Heart Safari', to: '/journeys/itineraries/botswanas-wild-heart-luxury-safari-in-chobe-okavango-linyanti' },
      { label: 'Wild Grandeur Tanzanian Escape', to: '/journeys/itineraries/wild-grandeur-ocean-opulence-luxury-tanzanian-escape' },
      { label: 'The Great Migration & Tanzania', to: '/journeys/itineraries/great-migration-northern-tanzania' },
      { label: 'Uganda in Style Safari', to: '/journeys/itineraries/uganda-in-style-gorillas-chimps-national-parks' },
      { label: 'Wilderness & Wonders of Kenya', to: '/journeys/itineraries/wilderness-wonders-kenya' }
    ],
    featured: {
      title: 'The Great Migration',
      description: 'Witness the spectacular Great Migration across the plains of Serengeti and Tarangire.',
      image: '/assets/images/hero.jpg',
      to: '/journeys/itineraries/great-migration-northern-tanzania'
    }
  },
  {
    id: 'Japan',
    label: 'Japan & Asia',
    links: [
      { label: 'Timeless Japan Family Sojourn', to: '/journeys/itineraries/timeless-japan-luxury-family-sojourn' },
      { label: 'Bespoke Japan Honeymoon Escape', to: '/journeys/itineraries/niraku-a-bespoke-japan-honeymoon-escape' },
      { label: 'The Shinkansen Experience', to: '/journeys/itineraries/the-shinkansen-experience-japan-in-motion' },
      { label: 'Miyabi: The Grand Japan Journey', to: '/journeys/itineraries/miyabi-the-grand-japan-journey' },
      { label: 'Tokaido Touch: Japan in Style', to: '/journeys/itineraries/tokaido-touch-japan-in-style' }
    ],
    featured: {
      title: 'Miyabi: The Grand Japan Journey',
      description: 'A seamless blend of modern energy, alpine beauty, and tropical Okinawa.',
      image: '/assets/images/hero.jpg',
      to: '/journeys/itineraries/miyabi-the-grand-japan-journey'
    }
  }
];

const destinationCategories = [
  {
    id: 'South East Asia',
    label: 'South East Asia',
    links: [
      { label: 'Thailand', to: '/destinations/thailand' },
      { label: 'Bali', to: '/destinations/bali' },
      { label: 'Vietnam', to: '/destinations/vietnam' },
      { label: 'Cambodia', to: '/destinations/cambodia' },
      { label: 'Borneo', to: '/destinations/borneo' },
      { label: 'Malaysia', to: '/destinations/malaysia' },
      { label: 'Singapore', to: '/destinations/singapore' }
    ],
    featured: {
      title: 'Bali: Serenity & Luxury',
      description: 'Unwind in luxury private villas in Ubud and golden southern coastlines.',
      image: '/assets/images/hero.jpg',
      to: '/destinations/bali'
    }
  },
  {
    id: 'Indian Ocean',
    label: 'Indian Ocean',
    links: [
      { label: 'Maldives', to: '/destinations/maldives' },
      { label: 'Mauritius', to: '/destinations/mauritius' },
      { label: 'Seychelles', to: '/destinations/seychelles' },
      { label: 'Sri Lanka', to: '/destinations/sri-lanka' }
    ],
    featured: {
      title: 'The Maldives Escape',
      description: 'Pristine overwater bungalows, private sands, and vibrant coral reefs.',
      image: '/assets/images/hero.jpg',
      to: '/destinations/maldives'
    }
  },
  {
    id: 'Africa',
    label: 'Africa',
    links: [
      { label: 'South Africa', to: '/destinations/south-africa' },
      { label: 'Kenya', to: '/destinations/kenya' },
      { label: 'Tanzania', to: '/destinations/tanzania' },
      { label: 'Zanzibar', to: '/destinations/zanzibar' },
      { label: 'Botswana', to: '/destinations/botswana' },
      { label: 'Zimbabwe', to: '/destinations/zimbabwe' },
      { label: 'Mozambique', to: '/destinations/mozambique' }
    ],
    featured: {
      title: 'Kenya Wilderness',
      description: 'Spot the Big Five set beneath the majestic snows of Mount Kilimanjaro.',
      image: '/assets/images/hero.jpg',
      to: '/destinations/kenya'
    }
  },
  {
    id: 'Other',
    label: 'Other',
    links: [
      { label: 'Dubai (UAE)', to: '/destinations/dubai' },
      { label: 'Japan', to: '/journeys/japan' }
    ],
    featured: {
      title: 'Timeless Japan',
      description: 'Witness neon skyscrapers and historic temples blending in perfect harmony.',
      image: '/assets/images/hero.jpg',
      to: '/journeys/japan'
    }
  }
];

const holidayCategories = [
  {
    id: 'Categories',
    label: 'Categories',
    links: [
      { label: 'All Inclusive', to: '/holiday-types/all-inclusive' },
      { label: 'Family Holidays', to: '/holiday-types/family-holidays' },
      { label: 'Honeymoons', to: '/holiday-types/honeymoons' },
      { label: 'Luxury Beach Holidays', to: '/holiday-types/luxury-beach-holidays' },
      { label: 'Safaris', to: '/holiday-types/safaris' },
      { label: 'Multi-Destinations', to: '/holiday-types/multi-destinations-holidays' }
    ],
    featured: {
      title: 'All-Inclusive Luxury',
      description: 'Gourmet dining and premium drinks completely taken care of.',
      image: '/assets/images/hero.jpg',
      to: '/holiday-types/all-inclusive'
    }
  }
];

export default function Header({ onOpenSearch, onOpenMenu }) {
  const [activeItineraryTab, setActiveItineraryTab] = useState('Popular Journeys');
  const [activeDestinationTab, setActiveDestinationTab] = useState('South East Asia');
  const [activeHolidayTab, setActiveHolidayTab] = useState('Categories');

  return (
    <header>
      <div className="container">
        <Link className="logo" to="/">
          <div className="group flex">
            <span className="logo-text main">PINCH</span>
          </div>
        </Link>
        <nav className="desktop-nav">
          <Link to="/about-us">About Us</Link>
          <Link to="/news" style={{ marginLeft: '1rem' }}>News</Link>
          
          {/* Signature Itineraries Dropdown */}
          <div className="hover-dropdown-wrapper">
            <Link className="hover-dropdown-trigger" to="/journeys">
              Signature Itineraries
              <div className="dropdown-arrow">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
            </Link>
            <div className="hover-dropdown-menu">
              <div className="dropdown-content">
                <div className="dropdown-left">
                  <h3 className="dropdown-header">Signature Itineraries</h3>
                  <div className="dropdown-links">
                    {itineraryCategories.map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        className={`hover-dropdown-item ${activeItineraryTab === cat.id ? 'hovered' : ''}`}
                        onMouseEnter={() => setActiveItineraryTab(cat.id)}
                      >
                        {cat.label}
                        <span className="item-arrow">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                          </svg>
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="dropdown-middle">
                  <h3 className="sub-links-header">
                    {itineraryCategories.find(c => c.id === activeItineraryTab)?.label}
                  </h3>
                  <div className="sub-links-list">
                    {itineraryCategories.find(c => c.id === activeItineraryTab)?.links.map((link, i) => (
                      <Link key={i} className="sub-link-item" to={link.to}>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="dropdown-right">
                  <div className="featured-header">Featured Journey</div>
                  <div className="featured-destinations">
                    {(() => {
                      const featured = itineraryCategories.find(c => c.id === activeItineraryTab)?.featured;
                      if (!featured) return null;
                      return (
                        <Link className="featured-item" to={featured.to}>
                          <div className="featured-image">
                            <img src={featured.image} alt={featured.title} />
                          </div>
                          <div className="featured-content">
                            <div className="featured-title">{featured.title}</div>
                            <div className="featured-description">{featured.description}</div>
                          </div>
                        </Link>
                      );
                    })()}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Destinations Dropdown */}
          <div className="hover-dropdown-wrapper">
            <a href="/#destinations" className="hover-dropdown-trigger">
              Destinations
              <div className="dropdown-arrow">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
            </a>
            <div className="hover-dropdown-menu">
              <div className="dropdown-content">
                <div className="dropdown-left">
                  <h3 className="dropdown-header">Destinations</h3>
                  <div className="dropdown-links">
                    {destinationCategories.map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        className={`hover-dropdown-item ${activeDestinationTab === cat.id ? 'hovered' : ''}`}
                        onMouseEnter={() => setActiveDestinationTab(cat.id)}
                      >
                        {cat.label}
                        <span className="item-arrow">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                          </svg>
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="dropdown-middle">
                  <h3 className="sub-links-header">
                    {destinationCategories.find(c => c.id === activeDestinationTab)?.label}
                  </h3>
                  <div className="sub-links-list">
                    {destinationCategories.find(c => c.id === activeDestinationTab)?.links.map((link, i) => (
                      <Link key={i} className="sub-link-item" to={link.to}>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="dropdown-right">
                  <div className="featured-header">Featured Destination</div>
                  <div className="featured-destinations">
                    {(() => {
                      const featured = destinationCategories.find(c => c.id === activeDestinationTab)?.featured;
                      if (!featured) return null;
                      return (
                        <Link className="featured-item" to={featured.to}>
                          <div className="featured-image">
                            <img src={featured.image} alt={featured.title} />
                          </div>
                          <div className="featured-content">
                            <div className="featured-title">{featured.title}</div>
                            <div className="featured-description">{featured.description}</div>
                          </div>
                        </Link>
                      );
                    })()}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Holiday Types Dropdown */}
          <div className="hover-dropdown-wrapper">
            <a href="/#holidayTypes" className="hover-dropdown-trigger">
              Holiday Types
              <div className="dropdown-arrow">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
            </a>
            <div className="hover-dropdown-menu">
              <div className="dropdown-content">
                <div className="dropdown-left">
                  <h3 className="dropdown-header">Holiday Types</h3>
                  <div className="dropdown-links">
                    {holidayCategories.map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        className={`hover-dropdown-item ${activeHolidayTab === cat.id ? 'hovered' : ''}`}
                        onMouseEnter={() => setActiveHolidayTab(cat.id)}
                      >
                        {cat.label}
                        <span className="item-arrow">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                          </svg>
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="dropdown-middle">
                  <h3 className="sub-links-header">
                    {holidayCategories.find(c => c.id === activeHolidayTab)?.label}
                  </h3>
                  <div className="sub-links-list">
                    {holidayCategories.find(c => c.id === activeHolidayTab)?.links.map((link, i) => (
                      <Link key={i} className="sub-link-item" to={link.to}>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="dropdown-right">
                  <div className="featured-header">Featured Style</div>
                  <div className="featured-destinations">
                    {(() => {
                      const featured = holidayCategories.find(c => c.id === activeHolidayTab)?.featured;
                      if (!featured) return null;
                      return (
                        <Link className="featured-item" to={featured.to}>
                          <div className="featured-image">
                            <img src={featured.image} alt={featured.title} />
                          </div>
                          <div className="featured-content">
                            <div className="featured-title">{featured.title}</div>
                            <div className="featured-description">{featured.description}</div>
                          </div>
                        </Link>
                      );
                    })()}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button className="search-icon-btn" aria-label="Open search" onClick={onOpenSearch}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </button>
          
          <Link to="/travel-inquiry" className="cta outline black" style={{ cursor: 'pointer', display: 'inline-block', margin: '0px 0px 0px 1rem', maxHeight: '700px' }}>
            Talk to a Travel Expert
          </Link>
        </nav>
        
        <div className="contact">
          <div className="phone">
            <div className="opening-hours">
              <span className="top-line">Mon–Fri: 9AM–5PM, Sat: Appointment only</span>
            </div>
            <span className="bottom-line bold">0207 870 8885</span>
          </div>
        </div>
        
        <div className="flex-group">
          <div className="phone-mobile">
            <a href="tel:+4402078708885" aria-label="Call us">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25">
                <path d="M15.873 15.1673C16.0055 15.0751 16.1579 15.0189 16.3164 15.004C16.4748 14.9889 16.6344 15.0153 16.7806 15.081L22.4194 17.7223C22.6094 17.8072 22.768 17.9543 22.8715 18.1413C22.9749 18.3283 23.0178 18.5454 22.9933 18.7599C22.8076 20.2112 22.124 21.5426 21.0696 22.5066C20.0152 23.4704 18.6619 24.0011 17.2612 24C12.9485 24 8.81238 22.2089 5.76282 19.0206C2.71323 15.8326 1 11.5084 1 6.99962C0.998932 5.53534 1.50659 4.1205 2.42855 3.01819C3.35053 1.9159 4.62405 1.20119 6.0123 1.00699C6.21751 0.981495 6.4251 1.02618 6.60401 1.13433C6.78291 1.2425 6.92349 1.40832 7.0047 1.607L9.53118 7.50713C9.59325 7.65867 9.61854 7.8239 9.60477 7.98812C9.59099 8.15234 9.53861 8.31046 9.45226 8.4484L6.89709 11.6247C6.80647 11.7677 6.75286 11.9328 6.74155 12.104C6.73023 12.2751 6.76157 12.4463 6.83253 12.601C7.82136 14.7173 9.91379 16.8786 11.9441 17.9024C12.0928 17.9762 12.2574 18.0082 12.4215 17.9953C12.5857 17.9823 12.7438 17.925 12.8803 17.8287L15.873 15.1673Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" fill="none"></path>
              </svg>
            </a>
          </div>
          <button className="burger" type="button" aria-label="Toggle navigation menu" onClick={onOpenMenu}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <line x1="3" y1="7.5" x2="29" y2="7.5" stroke="rgb(0, 0, 0)"></line>
              <line x1="3" y1="15.5" x2="29" y2="15.5" stroke="rgb(0, 0, 0)"></line>
              <line x1="3" y1="23.5" x2="29" y2="23.5" stroke="rgb(0, 0, 0)"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
