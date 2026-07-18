import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';

function JourneysIndex() {
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
      <div className="deal-hero"><picture><source srcSet="https://content.pinch.travel/images/m_Rare.jpg" media="(max-width: 768px)" /><img className="slide-image" alt="Hero image showcasing our top travel itineraries" src="/assets/images/rare.jpg" /></picture><div className="slide-content"><h3 className="hero-subtitle">Signature Itineraries</h3><h1 className="hero-title" style={{"textTransform":"uppercase"}}>Unforgettable. Unrepeatable. Yours.</h1><p className="hero-description">Every journey is thoughtfully designed around you, combining expert insight with personal touches to create something truly unforgettable.</p></div></div><section id="overview"><div className="container"><ul className="card-info-labels mb-20"></ul><div className="why-content"><div className="why-text"><h2>Our signature itineraries are crafted with care, insight, and first-hand experience. Each journey is the result of our expert team personally exploring the destinations, staying in the finest hotels, and forging relationships with trusted local partners who share our commitment to excellence. We don't rely on guesswork - we curate each itinerary based on what we've experienced ourselves, selecting only the most exceptional stays, authentic encounters, and seamless travel arrangements.</h2><p>Whether it's a barefoot-chic escape in the Indian Ocean, a cultural journey through Southeast Asia, or a once-in-a-lifetime safari in Africa, every itinerary is bespoke - thoughtfully tailored to your tastes, pace, and preferences. With meticulous attention to detail and a passion for creating the extraordinary, we deliver travel experiences that are not only luxurious, but genuinely unforgettable.</p></div><aside className="why-aside callback"><div className="callback-form-wrapper"><p> PINCH. Where your perfect trip begins.</p><div className="callback-form"><a href="tel:+4402078708885" className="callback-types-item"><div className="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M317.1 378.1c-4.7 5.7-12.6 7.5-19.2 4.3c-73.8-34.8-133.5-94.5-168.3-168.3c-3.1-6.6-1.3-14.6 4.3-19.2l49.3-40.4c8.2-6.7 11-18 7-27.8l-40-96c-4.6-11.1-16.8-17.1-28.5-13.9l-88 24C23.2 43.7 16 53.2 16 64c0 238.6 193.4 432 432 432c10.8 0 20.3-7.2 23.2-17.7l24-88c3.2-11.6-2.8-23.8-13.9-28.5l-96-40c-9.8-4.1-21.1-1.3-27.8 7l-40.4 49.3zM304.7 368L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7z"></path></svg></div><div className="values"><span className="value">Mon–Fri: 9AM–5PM, Sat: by appointment only</span><span className="label bold">0207 870 8885</span></div></a><a href="mailto:connect@pinch.travel" className="callback-types-item"><div className="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 80c-26.5 0-48 21.5-48 48l0 28.2L220.8 321.4c20.5 16.5 49.8 16.5 70.3 0L496 156.2l0-28.2c0-26.5-21.5-48-48-48L64 80zM16 176.7L16 384c0 26.5 21.5 48 48 48l384 0c26.5 0 48-21.5 48-48l0-207.3L301.2 333.8c-26.4 21.3-64 21.3-90.4 0L16 176.7zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"></path></svg></div><div className="values"><span className="value">email us</span><span className="label">connect@pinch.travel</span></div></a></div><p className="callback-form-expert-label">Choose an expert</p><div className="callback-form-experts" role="listbox" aria-label="Select a travel expert"><button type="button" className="callback-form-expert " role="option" aria-selected="false" aria-label="Select Britt-Marie"><img alt="" className="callback-form-expert__photo" src="/assets/images/britt.jpg" /><span className="callback-form-expert__name">Britt-Marie</span></button><button type="button" className="callback-form-expert " role="option" aria-selected="false" aria-label="Select Gemma"><img alt="" className="callback-form-expert__photo" src="/assets/images/gemma.jpeg" /><span className="callback-form-expert__name">Gemma</span></button></div><Link className="cta outline black" style={{"cursor":"pointer","display":"inline-block","width":"max-content","fontSize":"1rem","textTransform":"capitalize"}} to="/travel-inquiry">Talk To A Travel Expert</Link></div></aside></div></div></section><section className="multi-center-holidays" id="signatureItineraries" style={{"backgroundColor":"white"}}><div className="container"><h3 className="section-subtitle">Signature Itineraries</h3><h2 className="section-title">Unforgettable. Unrepeatable. Yours.</h2><h4 className="section-description">Every journey is thoughtfully designed around you, combining expert insight with personal touches to create something truly unforgettable.</h4><div className="cards"><div className="swiper swiper-initialized swiper-horizontal multi-center-swiper swiper-backface-hidden"><div className="swiper-wrapper"><div className="swiper-slide swiper-slide-active" style={{"width":"399.333px","marginRight":"16px"}}><Link className="card" to="/journeys/south-east-asia"><div className="image-row"><img loading="lazy" alt="Unforgettable South East Asia" src="https://content.pinch.travel/images/deal/itinerary/luxury-thailand-cities-culture-beaches/Grid 1.jpg" /></div><div className="card-content"><ul className="labels"><li>South East Asia</li></ul><h3>Unforgettable South East Asia</h3><p className="info">Experience the perfect balance of vibrant culture, breathtaking natural wonders, and tranquil beach escapes across Asia. From ancient temples and bustling cities to lush jungles and idyllic coastlines, this journey immerses you in the diverse beauty and rich heritage of the continent.</p><p className="price-row">From £2,389 per person</p></div></Link></div><div className="swiper-slide swiper-slide-next" style={{"width":"399.333px","marginRight":"16px"}}><Link className="card" to="/journeys/indian-ocean"><div className="image-row"><img loading="lazy" alt="The Soul of the Indian Ocean" src="/assets/images/hero.jpg" /></div><div className="card-content"><ul className="labels"><li>Indian Ocean</li></ul><h3>The Soul of the Indian Ocean</h3><p className="info">Surrender to the allure of the Indian Ocean, where turquoise waters, powdery white sands, and lush tropical islands create the ultimate escape. From the Maldives to Mauritius and the Seychelles, this journey is a celebration of luxury, tranquility, and natural beauty.</p><p className="price-row">From £3,979 per person</p></div></Link></div><div className="swiper-slide" style={{"width":"399.333px","marginRight":"16px"}}><Link className="card" to="/journeys/africa"><div className="image-row"><img loading="lazy" alt="Africa’s Wild Beauty, Tailor-Made" src="/assets/images/hero.webp" /></div><div className="card-content"><ul className="labels"><li>Africa</li></ul><h3>Africa’s Wild Beauty, Tailor-Made</h3><p className="info">Journey through Africa’s vast landscapes, from the sweeping savannahs and majestic wildlife of the Serengeti to the vibrant cultures and dramatic coastlines of the continent. Africa offers a tapestry of experiences, blending adventure, heritage, and natural wonder.</p><p className="price-row">From £5,329 per person</p></div></Link></div><div className="swiper-slide" style={{"width":"399.333px","marginRight":"16px"}}><Link className="card" to="/journeys/japan"><div className="image-row"><img loading="lazy" alt="JAPAN WHERE TRADITION MEETS TOMORROW " src="/assets/images/Japan_Hero_Image_Landing_Page.jpeg" /></div><div className="card-content"><ul className="labels"><li>Japan</li></ul><h3>JAPAN WHERE TRADITION MEETS TOMORROW </h3><p className="info">Japan is a place where ancient customs meet modern design with effortless ease. From the buzz of Tokyo’s neon-lit streets to the stillness of Kyoto’s temples, contrasts lie at the heart of its beauty. Stay in contemporary hotels that rise high above the skyline, or in traditional ryokans opening onto tranquil gardens and private onsen baths. Savor the artistry of Japanese cuisine, learn the grace of a tea ceremony from a local master, or glide between cities on the Shinkansen as forests, mountains and rice fields pass by in quiet rhythm.</p><p className="price-row">From £3,895 per person</p></div></Link></div><div className="swiper-slide" style={{"width":"399.333px","marginRight":"16px"}}><Link className="card" to="/journeys/philippines"><div className="image-row"><img loading="lazy" alt="The Philippines: From Peaks to Pristine Seas" src="/assets/images/Philippines_Landing.jpeg" /></div><div className="card-content"><ul className="labels"><li>South East Asia</li><li>Philippines</li></ul><h3>The Philippines: From Peaks to Pristine Seas</h3><p className="info">The Philippines is a country of striking contrasts and soulful warmth, where vivid natural beauty is woven seamlessly with layered history and heartfelt hospitality. Across more than seven thousand islands, journeys move effortlessly from cosmopolitan cities to secluded beaches, from emerald rice terraces carved into mountainsides to coral-rich seas glowing beneath tropical skies. Here, luxury feels relaxed rather than formal, shaped by open landscapes, gentle rhythms, and an instinctive sense of welcome.</p><p className="price-row">From £3,450 per person</p></div></Link></div></div><div className="swiper-button swiper-button-prev multi-center-button-prev swiper-button-disabled"><svg width="10" height="18" viewBox="0 0 10 18"><path d="M1 1L9 9L1 17" stroke="currentColor"></path></svg></div><div className="swiper-button swiper-button-next multi-center-button-next"><svg width="10" height="18" viewBox="0 0 10 18"><path d="M1 1L9 9L1 17" stroke="currentColor"></path></svg></div></div></div><button className="section-cta cta" type="button">Discover all signature itineraries</button></div></section>
    </>
  );
}

export default JourneysIndex;
