import React from 'react';
import { useParams, Link } from 'react-router-dom';
import metadata from '../data/metadata.json';
import ContactSection from '../components/ContactSection';

// Map of itineraries belonging to each dynamic destination country
const itineraryMapping = {
  bali: [
    { slug: 'bali-lombok', name: 'Bali & Lombok', price: 'From £2,779 per person', image: '/assets/images/asia/Bali.jpg', location: 'Indonesia' }
  ],
  borneo: [
    { slug: 'borneo-wildlife-adventure', name: 'Borneo Wildlife Adventure', price: 'From £3,129 per person', image: '/assets/images/home/safari.webp', location: 'Borneo' }
  ],
  botswana: [
    { slug: 'botswanas-wild-heart-luxury-safari-in-chobe-okavango-linyanti', name: "Botswana's Wild Heart Safari", price: 'From £5,299 per person', image: '/assets/images/home/safari.webp', location: 'Botswana' }
  ],
  kenya: [
    { slug: 'wilderness-wonders-kenya', name: 'Wilderness Wonders Kenya', price: 'From £4,199 per person', image: '/assets/images/home/safari.webp', location: 'Kenya' }
  ],
  malaysia: [
    { slug: 'malaysian-explorer', name: 'Malaysian Explorer', price: 'From £2,999 per person', image: '/assets/images/asia/Malaysia.jpg', location: 'Malaysia' },
    { slug: 'singapore-highlights-malaysian-islands', name: 'Singapore & Malaysian Islands', price: 'From £3,499 per person', image: '/assets/images/asia/Singapore.jpg', location: 'Singapore & Malaysia' }
  ],
  singapore: [
    { slug: 'singapore-highlights-malaysian-islands', name: 'Singapore & Malaysian Islands', price: 'From £3,499 per person', image: '/assets/images/asia/Singapore.jpg', location: 'Singapore' }
  ],
  vietnam: [
    { slug: 'vietnam-north-to-south', name: 'Vietnam North to South', price: 'From £2,899 per person', image: '/assets/images/asia/Vietnam.jpg', location: 'Vietnam' }
  ],
  tanzania: [
    { slug: 'wild-grandeur-ocean-opulence-luxury-tanzanian-escape', name: 'Wild Grandeur & Ocean Opulence', price: 'From £4,899 per person', image: '/assets/images/home/safari.webp', location: 'Tanzania' }
  ],
  zanzibar: [
    { slug: 'wild-grandeur-ocean-opulence-luxury-tanzanian-escape', name: 'Wild Grandeur & Ocean Opulence', price: 'From £4,899 per person', image: '/assets/images/home/safari.webp', location: 'Zanzibar' }
  ]
};

export default function DestinationCountry() {
  const { slug } = useParams();
  
  // Find destination in metadata
  const country = metadata.destinations.find(d => d.id === slug);

  if (!country) {
    return (
      <div className="container" style={{ padding: '100px 24px', textAlign: 'center' }}>
        <h2>Destination Not Found</h2>
        <p>Sorry, we could not find the destination you are looking for.</p>
        <Link to="/" className="cta black" style={{ marginTop: '20px', display: 'inline-block' }}>Back to Home</Link>
      </div>
    );
  }

  const itineraries = itineraryMapping[slug] || [];

  return (
    <div>
      <div className="deal-hero">
        <picture>
          <source srcSet={country.heroImageMobile || country.heroImage} media="(max-width: 768px)" />
          <img className="slide-image" alt={country.contentTitle} src={country.heroImage} />
        </picture>
        <div className="slide-content">
          <h3 className="hero-subtitle">{country.heroSubtitle}</h3>
          <h1 className="hero-title" style={{ textTransform: 'uppercase' }}>{country.id.replace('-', ' ')}</h1>
        </div>
      </div>

      <section id="overview">
        <div className="container">
          <div className="why-content">
            <div className="why-text">
              <h2>{country.contentTitle}</h2>
              {country.contentText.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
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
            <h3 className="section-subtitle">Signature Itineraries</h3>
            <h2 className="section-title">Luxury Journeys in {country.id.charAt(0).toUpperCase() + country.id.slice(1)}</h2>
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
