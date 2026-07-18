import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';

function DestinationsDubai() {
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
      <div className="deal-hero"><picture><img className="slide-image" alt="Hero image for Dubai" src="/assets/images/hero.jpg" /></picture><div className="slide-content"><h3 className="hero-subtitle">Dubai</h3><h1 className="hero-title" style={{"textTransform":"uppercase"}}>A pinch of barefoot luxury</h1><p className="hero-description">Dubai<span className="price-row">from £1,597 pp *</span></p><p className="price-row mobile">From £1,597 per person *</p></div><div className="price-annotation-wrapper"><div className="price-annotation">* Price based on two adults travelling from London in economy class, including 7 nights accommodation. Price includes local taxes and fees. Prices are for guidance only and subject to change at the time of booking.</div></div></div><section id="overview"><div className="container"><ul className="card-info-labels mb-20"><li>Middle East</li><li>Dubai</li></ul><div className="why-content"><div className="why-text"><h2>Dubai is a city where bold ambition meets uncompromising luxury. From its shimmering skyline to its serene desert landscapes, every experience here is designed to dazzle. Stay in iconic hotels where service is an art form, shop in vast designer malls or traditional souks, and dine at world-renowned restaurants led by Michelin-starred chefs. Beyond the glamour, discover private desert safaris, helicopter tours over the Palm, or tranquil moments aboard a luxury yacht on the Arabian Gulf — each day tailored to your desires.</h2><p>This is a place where the extraordinary comes as standard. Imagine sipping champagne atop the world’s tallest building, relaxing in lavish spa retreats, or dining under the stars amid golden dunes. Dubai’s effortless blend of modern elegance and timeless Arabian hospitality creates a unique allure, whether for a lavish short break or the centrepiece of an unforgettable holiday. Here, luxury isn’t simply experienced — it’s lived.</p></div><aside className="why-aside"><div className="text-block-bg">Luxury stay in Dubai with private tours and fine dining</div><div className="price-row" style={{"height":"22px"}}>From £1,597 per person</div><div className="aside-text">Price based on two adults travelling from London in economy class, including 7 nights accommodation. Price includes local taxes and fees. Prices are for guidance only and subject to change at the time of booking.</div></aside></div></div></section><section className="travel-picks" id="offers"><div className="container"><h3 className="section-subtitle">Premium Travel Picks</h3><h2 className="section-title">Luxury Finds, Expertly Selected</h2><h4 className="section-description">Handpicked escapes, chosen for their style, quality, and charm.</h4><div className="travel-picks desktop "><div className="cards sale-cards "><Link className="card gopher" to="/destinations/arabian-court-at-oneandonly-royal-mirage"><picture><source srcSet="https://content.pinch.travel/images/travel-pack/84388971/84388971_hero.webp" type="image/webp" /><img loading="lazy" alt="Arabian Court at One&Only Royal Mirage" src="/assets/images/84388971_hero.jpg" /></picture><div className="card-content"><ul className="labels text-overflow"><li>United Arab Emirates</li><li>Dubai</li><li>Dubai</li><li>5 Stars</li></ul><h3>Arabian Court at One&Only Royal Mirage</h3><p className="price">From £1,597 per person</p><p className="info"></p></div></Link><Link className="card gopher" to="/destinations/atlantis-the-palm"><picture><source srcSet="https://content.pinch.travel/images/travel-pack/40434891/40434891_hero.webp" type="image/webp" /><img loading="lazy" alt="Atlantis, The Palm" src="/assets/images/40434891_hero.jpg" /></picture><div className="card-content"><ul className="labels text-overflow"><li>United Arab Emirates</li><li>Dubai</li><li>Dubai</li><li>5 Stars</li></ul><h3>Atlantis, The Palm</h3><p className="price">From £1,626 per person</p><p className="info"></p></div></Link><Link className="card gopher" to="/destinations/jumeirah-al-naseem"><picture><source srcSet="https://content.pinch.travel/images/travel-pack/36724386/36724386_hero.webp" type="image/webp" /><img loading="lazy" alt="Jumeirah Al Naseem" src="/assets/images/36724386_hero.jpg" /></picture><div className="card-content"><ul className="labels text-overflow"><li>United Arab Emirates</li><li>Dubai</li><li>Dubai</li><li>5 Stars</li></ul><h3>Jumeirah Al Naseem</h3><p className="price">From £4,311 per person</p><p className="info"></p></div></Link><Link className="card gopher" to="/destinations/raffles-the-palm"><picture><source srcSet="https://content.pinch.travel/images/travel-pack/91929324/91929324_hero.webp" type="image/webp" /><img loading="lazy" alt="Raffles The Palm" src="/assets/images/91929324_hero.jpg" /></picture><div className="card-content"><ul className="labels text-overflow"><li>United Arab Emirates</li><li>Dubai</li><li>Dubai</li><li>5 Stars</li></ul><h3>Raffles The Palm</h3><p className="price">From £2,179 per person</p><p className="info"></p></div></Link></div></div><div className="cards"><div className="swiper swiper-initialized swiper-horizontal sale-swiper travel-picks mobile"><div className="swiper-wrapper" style={{"transitionDuration":"0ms","transitionDelay":"0ms"}}><div className="swiper-slide"><Link className="card gopher" to="/destinations/arabian-court-at-oneandonly-royal-mirage"><picture><source srcSet="https://content.pinch.travel/images/travel-pack/84388971/84388971_hero.webp" type="image/webp" /><img loading="lazy" alt="Arabian Court at One&Only Royal Mirage" src="/assets/images/84388971_hero.jpg" /></picture><div className="card-content"><ul className="labels text-overflow"><li>United Arab Emirates</li><li>Dubai</li><li>Dubai</li><li>5 Stars</li></ul><h3>Arabian Court at One&Only Royal Mirage</h3><p className="price">From £1,597 per person</p><p className="info"></p></div></Link></div><div className="swiper-slide"><Link className="card gopher" to="/destinations/atlantis-the-palm"><picture><source srcSet="https://content.pinch.travel/images/travel-pack/40434891/40434891_hero.webp" type="image/webp" /><img loading="lazy" alt="Atlantis, The Palm" src="/assets/images/40434891_hero.jpg" /></picture><div className="card-content"><ul className="labels text-overflow"><li>United Arab Emirates</li><li>Dubai</li><li>Dubai</li><li>5 Stars</li></ul><h3>Atlantis, The Palm</h3><p className="price">From £1,626 per person</p><p className="info"></p></div></Link></div><div className="swiper-slide"><Link className="card gopher" to="/destinations/jumeirah-al-naseem"><picture><source srcSet="https://content.pinch.travel/images/travel-pack/36724386/36724386_hero.webp" type="image/webp" /><img loading="lazy" alt="Jumeirah Al Naseem" src="/assets/images/36724386_hero.jpg" /></picture><div className="card-content"><ul className="labels text-overflow"><li>United Arab Emirates</li><li>Dubai</li><li>Dubai</li><li>5 Stars</li></ul><h3>Jumeirah Al Naseem</h3><p className="price">From £4,311 per person</p><p className="info"></p></div></Link></div><div className="swiper-slide"><Link className="card gopher" to="/destinations/raffles-the-palm"><picture><source srcSet="https://content.pinch.travel/images/travel-pack/91929324/91929324_hero.webp" type="image/webp" /><img loading="lazy" alt="Raffles The Palm" src="/assets/images/91929324_hero.jpg" /></picture><div className="card-content"><ul className="labels text-overflow"><li>United Arab Emirates</li><li>Dubai</li><li>Dubai</li><li>5 Stars</li></ul><h3>Raffles The Palm</h3><p className="price">From £2,179 per person</p><p className="info"></p></div></Link></div></div><div className="swiper-button swiper-button-prev travel-picks-button-prev" style={{"display":"none"}}><svg width="10" height="18" viewBox="0 0 10 18"><path d="M1 1L9 9L1 17" stroke="currentColor"></path></svg></div><div className="swiper-button swiper-button-next travel-picks-button-next" style={{"display":"none"}}><svg width="10" height="18" viewBox="0 0 10 18"><path d="M1 1L9 9L1 17" stroke="currentColor"></path></svg></div></div></div></div></section><section className="multi-center-holidays" id="signatureItineraries" style={{"backgroundColor":"white"}}><div className="container"><h3 className="section-subtitle">Signature Itineraries</h3><h2 className="section-title">Unforgettable. Unrepeatable. Yours.</h2><h4 className="section-description">Every journey is thoughtfully designed around you, combining expert insight with personal touches to create something truly unforgettable.</h4><div className="cards"><div className="swiper swiper-initialized swiper-horizontal multi-center-swiper"><div className="swiper-wrapper"></div><div className="swiper-button swiper-button-prev multi-center-button-prev swiper-button-disabled swiper-button-lock" style={{"display":"none"}}><svg width="10" height="18" viewBox="0 0 10 18"><path d="M1 1L9 9L1 17" stroke="currentColor"></path></svg></div><div className="swiper-button swiper-button-next multi-center-button-next swiper-button-disabled swiper-button-lock" style={{"display":"none"}}><svg width="10" height="18" viewBox="0 0 10 18"><path d="M1 1L9 9L1 17" stroke="currentColor"></path></svg></div></div></div></div></section>
    </>
  );
}

export default DestinationsDubai;
