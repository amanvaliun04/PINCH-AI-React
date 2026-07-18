import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';

function DestinationsMauritius() {
  useEffect(() => {
    // Initialize Swiper Hero if present
    const heroSwiper = document.querySelector('.swiper-hero') ? new Swiper('.swiper-hero', {
      modules: [Navigation, Pagination, EffectFade, Autoplay],
      effect: 'fade',
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    }) : null;

    // Initialize Multi-Center Swiper if present
    const multiSwiper = document.querySelector('.multi-center-swiper') ? new Swiper('.multi-center-swiper', {
      modules: [Navigation],
      slidesPerView: 1,
      spaceBetween: 16,
      navigation: {
        nextEl: '.multi-center-button-next',
        prevEl: '.multi-center-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        }
      }
    }) : null;

    return () => {
      if (heroSwiper) heroSwiper.destroy();
      if (multiSwiper) multiSwiper.destroy();
    };
  }, []);

  return (
    <>
      <div className="deal-hero"><picture><img className="slide-image" alt="Hero image for Mauritius" src="/assets/images/hero.jpg" /></picture><div className="slide-content"><h3 className="hero-subtitle">MAURITIUS</h3><h1 className="hero-title" style={{"textTransform":"uppercase"}}>MAURITIUS</h1><p className="hero-description">Mauritius<span className="price-row">from £1,341 pp *</span></p><p className="price-row mobile">From £1,341 per person *</p></div><div className="price-annotation-wrapper"><div className="price-annotation">* Price based on two adults travelling from London in economy class, including accommodation & transfers. Price includes local taxes and fees. Prices are for guidance only and subject to change at the time of booking.</div></div></div><section id="overview"><div className="container"><ul className="card-info-labels mb-20"><li>Indian Ocean</li><li>Mauritius</li></ul><div className="why-content"><div className="why-text"><h2>Mauritius is a tropical island where natural beauty and refined luxury blend seamlessly. Fringed by powder-white beaches and vibrant coral reefs, its lush interior hides waterfalls, sugar plantations and dramatic volcanic peaks. Stay in elegant beachfront resorts where impeccable service and world-class cuisine come as standard. Spend your days sailing on a private catamaran, teeing off on championship golf courses, or exploring local markets and Creole culture — all at your own unhurried pace.</h2><p>Every moment in Mauritius feels effortlessly indulgent. Start the morning with a sunrise yoga session overlooking the ocean, followed by a spa ritual inspired by the island’s healing traditions. Enjoy long, lazy lunches on the beach and champagne sundowners with toes in the sand. Whether you’re seeking the perfect honeymoon, a sophisticated family escape, or a place to simply switch off in style, Mauritius offers a luxury experience as warm and welcoming as the island itself.</p></div><aside className="why-aside"><div className="text-block-bg">Inclusive of beachfront suite, catamaran tour & spa sessions</div><div className="price-row" style={{"height":"22px"}}>From £1,341 per person</div><div className="aside-text">Price based on two adults travelling from London in economy class, including 7 nights accommodation. Price includes local taxes and fees. Prices are for guidance only and subject to change at the time of booking.</div></aside></div></div></section><section className="multi-center-holidays" id="signatureItineraries" style={{"backgroundColor":"white"}}><div className="container"><h3 className="section-subtitle">Signature Itineraries</h3><h2 className="section-title">Unforgettable. Unrepeatable. Yours.</h2><h4 className="section-description">Every journey is thoughtfully designed around you, combining expert insight with personal touches to create something truly unforgettable.</h4><div className="cards"><div className="swiper swiper-initialized swiper-horizontal multi-center-swiper swiper-backface-hidden"><div className="swiper-wrapper"><div className="swiper-slide swiper-slide-active" style={{"width":"399.333px","marginRight":"16px"}}><Link className="card" to="/journeys/itineraries/sri-lankan-summer"><div className="image-row"><img loading="lazy" alt="Sri Lankan Summer" src="https://content.pinch.travel/images/deal/itinerary/sri-lankan-summer/Hero Shot-card.jpg" /></div><div className="card-content"><ul className="labels"><li>Indian Ocean </li><li>Sri Lanka</li></ul><h3>Sri Lankan Summer</h3><p className="info">Explore the magic of Sri Lanka—from ancient ruins and sacred temples to rolling tea hills and untouched beaches. This extended tour allows you to travel at a comfortable pace while deeply experiencing the island's vibrant culture and natural beauty.</p><p className="price-row">From £4,659 per person</p></div></Link></div><div className="swiper-slide swiper-slide-next" style={{"width":"399.333px","marginRight":"16px"}}><Link className="card" to="/journeys/itineraries/sri-lanka-culture-wildlife"><div className="image-row"><img loading="lazy" alt="Sri Lanka Culture & Wildlife Tour" src="https://content.pinch.travel/images/deal/itinerary/sri-lanka-culture-wildlife/Hero Shot-card.jpg" /></div><div className="card-content"><ul className="labels"><li>Indian Ocean </li><li>Sri Lanka</li></ul><h3>Sri Lanka Culture & Wildlife Tour</h3><p className="info">Embark on a captivating journey through the heart of Sri Lanka, beginning with the coastal charm of Negombo. Explore ancient cities, lush tea country, sacred temples, and vibrant wildlife before ending your adventure with pure relaxation on the golden shores of Tangalle. This carefully curated tour blends cultural heritage with scenic beauty and thrilling safaris.</p><p className="price-row">From £4,359 per person</p></div></Link></div><div className="swiper-slide" style={{"width":"399.333px","marginRight":"16px"}}><Link className="card" to="/journeys/itineraries/sri-lanka-highlights-maldives"><div className="image-row"><img loading="lazy" alt="Sri Lankan Highlights & The Maldives" src="https://content.pinch.travel/images/deal/itinerary/sri-lanka-highlights-maldives/Hero Shot-card.jpg" /></div><div className="card-content"><ul className="labels"><li>Indian Ocean </li><li>Sri Lanka</li></ul><h3>Sri Lankan Highlights & The Maldives</h3><p className="info">Discover the rich cultural heritage, scenic highlands, and wildlife of Sri Lanka, then unwind on the pristine, white-sand beaches of the Maldives. This combination tour is ideal for travelers seeking both adventure and relaxation.</p><p className="price-row">From £5,569 per person</p></div></Link></div><div className="swiper-slide" style={{"width":"399.333px","marginRight":"16px"}}><Link className="card" to="/journeys/itineraries/sri-lanka-abu-dhabi-luxury-adventure"><div className="image-row"><img loading="lazy" alt="Sri Lanka & Abu Dhabi Luxury Adventure" src="https://content.pinch.travel/images/deal/itinerary/sri-lanka-abu-dhabi-luxury-adventure/Hero Shot-card.jpg" /></div><div className="card-content"><ul className="labels"><li>Indian Ocean </li><li>Sri Lanka</li></ul><h3>Sri Lanka & Abu Dhabi Luxury Adventure</h3><p className="info">Uncover the magic of two contrasting worlds: the spiritual tranquility and natural beauty of Sri Lanka, followed by the modern elegance and cultural grandeur of Abu Dhabi. This exclusive journey is designed for travelers who seek depth, luxury, and seamless transitions between the exotic and the opulent.</p><p className="price-row">From £3,979 per person</p></div></Link></div><div className="swiper-slide" style={{"width":"399.333px","marginRight":"16px"}}><Link className="card" to="/journeys/itineraries/sri-lanka-indulgence"><div className="image-row"><img loading="lazy" alt="Sri Lankan Indulgence " src="https://content.pinch.travel/images/deal/itinerary/sri-lanka-indulgence/Hero Shot-card.jpg" /></div><div className="card-content"><ul className="labels"><li>Indian Ocean </li><li>Sri Lanka</li></ul><h3>Sri Lankan Indulgence </h3><p className="info">Step into a world where ancient kings once ruled, tea planters sipped from bone china, and elephants roamed wild. This ultra-luxury journey through Sri Lanka is more than a vacation—it's a curated experience of refinement, tranquility, and cultural depth, wrapped in exceptional service and exclusive access. Expect private safaris, sunset cocktails overlooking UNESCO sites, and personalized butler service at some of the island's most coveted hideaways.</p><p className="price-row">From £6,099 per person</p></div></Link></div></div><div className="swiper-button swiper-button-prev multi-center-button-prev swiper-button-disabled"><svg width="10" height="18" viewBox="0 0 10 18"><path d="M1 1L9 9L1 17" stroke="currentColor"></path></svg></div><div className="swiper-button swiper-button-next multi-center-button-next"><svg width="10" height="18" viewBox="0 0 10 18"><path d="M1 1L9 9L1 17" stroke="currentColor"></path></svg></div></div></div><button className="section-cta cta" type="button">Discover all signature itineraries</button></div></section>
    </>
  );
}

export default DestinationsMauritius;
