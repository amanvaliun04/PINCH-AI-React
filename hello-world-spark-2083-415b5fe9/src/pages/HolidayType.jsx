import React from 'react';
import { useParams, Link } from 'react-router-dom';
import metadata from '../data/metadata.json';
import ContactSection from '../components/ContactSection';

// Map of itineraries matching each holiday type slug
const itinerariesByHolidayType = {
  safaris: [
    { slug: 'wilderness-wonders-kenya', name: 'Wilderness Wonders Kenya', price: 'From £4,199 per person', image: '/assets/images/home/safari.webp', location: 'Kenya' },
    { slug: 'botswanas-wild-heart-luxury-safari-in-chobe-okavango-linyanti', name: "Botswana's Wild Heart Safari", price: 'From £5,299 per person', image: '/assets/images/home/safari.webp', location: 'Botswana' },
    { slug: 'wild-grandeur-ocean-opulence-luxury-tanzanian-escape', name: 'Wild Grandeur & Ocean Opulence', price: 'From £4,899 per person', image: '/assets/images/home/safari.webp', location: 'Tanzania' }
  ],
  honeymoons: [
    { slug: 'bali-lombok', name: 'Bali & Lombok Honeymoon', price: 'From £2,779 per person', image: '/assets/images/asia/Bali.jpg', location: 'Indonesia' },
    { slug: 'sri-lanka-highlights-maldives', name: 'Sri Lanka Highlights & Maldives', price: 'From £3,499 per person', image: '/assets/images/asia/Singapore.jpg', location: 'Sri Lanka & Maldives' },
    { slug: 'niraku-a-bespoke-japan-honeymoon-escape', name: 'Niraku: Bespoke Japan Honeymoon', price: 'From £4,299 per person', image: '/assets/images/home/hero.jpg', location: 'Japan' }
  ],
  'all-inclusive': [
    { slug: 'sun-siyam-iru-veli', name: 'Sun Siyam Iru Veli Luxury All-Inclusive', price: 'From £2,637 per person', image: '/assets/images/52962375_hero.jpg', location: 'Maldives' },
    { slug: 'emerald-maldives-resort-and-spa', name: 'Emerald Maldives Resort & Spa All-Inclusive', price: 'From £4,569 per person', image: '/assets/images/76534717_hero.jpg', location: 'Maldives' }
  ],
  'luxury-beach-holidays': [
    { slug: 'the-residence-maldives-at-falhumaafushi', name: 'The Residence Maldives at Falhumaafushi', price: 'From £2,232 per person', image: '/assets/images/31253735_hero.jpg', location: 'Maldives' },
    { slug: 'lux-south-ari-atoll', name: 'LUX* South Ari Atoll', price: 'From £1,979 per person', image: '/assets/images/71739222_hero.jpg', location: 'Maldives' },
    { slug: 'lux-belle-mare', name: 'LUX* Belle Mare Beach Resort', price: 'From £1,442 per person', image: '/assets/images/51651440_hero.jpg', location: 'Mauritius' }
  ],
  'multi-destinations-holidays': [
    { slug: 'cape-to-falls-a-luxury-rail-safari-journey', name: 'Cape to Falls: Luxury Rail Safari', price: 'From £4,999 per person', image: '/assets/images/home/safari.webp', location: 'South Africa & Zimbabwe' },
    { slug: 'singapore-highlights-malaysian-islands', name: 'Singapore & Malaysian Islands', price: 'From £3,499 per person', image: '/assets/images/asia/Singapore.jpg', location: 'Singapore & Malaysia' }
  ],
  'family-holidays': [
    { slug: 'thailand-for-families', name: 'Thailand for Families', price: 'From £2,399 per person', image: '/assets/images/asia/Thailand.jpg', location: 'Thailand' },
    { slug: 'luxury-philippine-family-getaway', name: 'Luxury Philippine Family Getaway', price: 'From £3,199 per person', image: '/assets/images/home/hero.jpg', location: 'Philippines' }
  ]
};

export default function HolidayType() {
  const { slug } = useParams();

  // Find holiday type in metadata
  const type = metadata.holidayTypes.find(h => h.id === slug);

  if (!type) {
    return (
      <div className="container" style={{ padding: '100px 24px', textAlign: 'center' }}>
        <h2>Holiday Type Not Found</h2>
        <p>Sorry, we could not find the holiday category you are looking for.</p>
        <Link to="/" className="cta black" style={{ marginTop: '20px', display: 'inline-block' }}>Back to Home</Link>
      </div>
    );
  }

  const itineraries = itinerariesByHolidayType[slug] || [];

  return (
    <div>
      <div className="deal-hero">
        <picture>
          <img className="slide-image" alt={type.heroTitle} src={type.heroImage} />
        </picture>
        <div className="slide-content">
          <h3 className="hero-subtitle">{type.heroSubtitle}</h3>
          <h1 className="hero-title" style={{ textTransform: 'uppercase' }}>{type.heroSuptitle || type.id.replace('-', ' ')}</h1>
        </div>
      </div>

      <section id="overview">
        <div className="container">
          <div className="why-content">
            <div className="why-text">
              <h2>{type.heroTitle}</h2>
              <p>{type.title}</p>
            </div>
            <aside className="why-aside callback">
              <ContactSection />
            </aside>
          </div>
        </div>
      </section>

      {itineraries.length > 0 && (
        <section className="travel-picks" id="offers" style={{ paddingBottom: '80px' }}>
          <div className="container">
            <h3 className="section-subtitle">Premium Selections</h3>
            <h2 className="section-title">Luxury Itineraries for {type.heroSuptitle || type.id.replace('-', ' ')}</h2>
            <div className="travel-picks desktop">
              <div className="cards sale-cards">
                {itineraries.map((it, idx) => (
                  <Link className="card gopher" to={`/journeys/${it.slug}`} key={idx}>
                    <img loading="lazy" alt={it.name} src={it.image} />
                    <div className="card-content">
                      <ul className="labels text-overflow">
                        <li>{it.location}</li>
                        <li>Luxury</li>
                      </ul>
                      <h3>{it.name}</h3>
                      <p className="price">{it.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <ContactSection />
    </div>
  );
}
