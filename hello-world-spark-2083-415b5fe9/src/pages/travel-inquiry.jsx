import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';

function TravelInquiry() {
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
      <div className="travel-inquiry-page">
       <div className="travel-inquiry-header">
        <div className="container">
         <h1 className="travel-inquiry-title">
          Talk to a Travel Expert
         </h1>
         <p className="travel-inquiry-subtitle">
          Unforgettable. Unrepeatable. Yours.
         </p>
        </div>
       </div>
       <div className="travel-inquiry-content">
        <div className="container">
         <div className="travel-inquiry-layout">
          <div className="travel-inquiry-form-section">
           <form className="travel-inquiry-form" data-form-id="travel-inquiry" id="travel-inquiry-form">
            <div className="form-section">
             <div className="form-section-header">
              <h2 className="form-section-title">
               Get in touch
              </h2>
              <span className="required-indicator">
               * Required
              </span>
             </div>
             <div className="form-group">
              <label className="form-label" htmlFor="full_name">
               Full Name (First and Last) *
              </label>
              <input className="form-input" id="full_name" name="full_name" placeholder="John Smith" required="" type="text" value="" />
             </div>
             <div className="form-group">
              <label className="form-label" htmlFor="email">
               Email *
              </label>
              <input className="form-input" id="email" name="email" required="" type="email" value="" />
             </div>
             <div className="form-group">
              <label className="form-label" htmlFor="telephone">
               UK Phone Number *
              </label>
              <input className="form-input" id="telephone" name="telephone" placeholder="+44 20 1234 5678" required="" type="tel" value="" />
              <p style={{"fontSize":"0.875rem","color":"rgb(102, 102, 102)","marginTop":"0.5rem"}}>
               Please enter a UK phone number starting with +44 or 0
              </p>
             </div>
             <div className="form-group">
              <label className="form-label" htmlFor="callbackTime">
               Preferred Callback Time *
              </label>
              <select className="form-input" id="callbackTime" name="callbackTime" required="">
               <option value="">
                Select a callback time
               </option>
               <optgroup label="Monday - Friday">
                <option value="Monday - Friday: 09:00-12:00">
                 09:00-12:00
                </option>
                <option value="Monday - Friday: 12:00-15:00">
                 12:00-15:00
                </option>
                <option value="Monday - Friday: 15:00-16:00">
                 15:00-16:00
                </option>
               </optgroup>
               <optgroup label="Saturday">
                <option value="Saturday: By appointment only">
                 By appointment only
                </option>
               </optgroup>
              </select>
              <p style={{"fontSize":"0.875rem","color":"rgb(102, 102, 102)","marginTop":"0.5rem"}}>
               If you need a specific time that is not listed above, please add this in the enquiry details field below.
              </p>
             </div>
             <div className="form-group">
              <label className="form-label" htmlFor="enquiryDetails">
               Details of your enquiry *
              </label>
              <textarea className="form-textarea" id="enquiryDetails" name="enquiryDetails" placeholder="Tell us about your holiday plans..." required=""></textarea>
             </div>
             <div style={{"position":"absolute","left":"-9999px","opacity":"0","pointerEvents":"none"}}>
              <label htmlFor="website" style={{"display":"none"}}>
               Website (leave blank)
              </label>
              <input autocomplete="off" id="website" name="website" style={{"display":"none"}} tabindex="-1" type="text" value="" />
             </div>
             <div className="form-options">
              <div className="option-box option-box-no-icon">
               <label className="option-label">
                <input className="option-checkbox" name="marketingOptOut" type="checkbox" />
                <span className="option-text">
                 We'd like to keep you up to date with travel news, inspiration from our experts, and our latest offers. Please tick this box if you'd prefer not to hear from us.
                </span>
               </label>
              </div>
             </div>
             <div className="privacy-notice">
              <div className="privacy-icon">
               i
              </div>
              <p className="privacy-text">
               PINCH takes the security and privacy of your data seriously. Please read our
               <Link className="privacy-link" to="/privacy-policy">
                privacy policy
               </Link>
               for further details.
              </p>
             </div>
             <button className="cta outline black" type="submit">
              Send Enquiry
             </button>
            </div>
           </form>
          </div>
          <div className="travel-inquiry-sidebar">
           <div className="callback-form-wrapper">
            <p>
             Call Us
            </p>
            <div className="callback-form">
             <a className="callback-types-item" href="tel:+4402078708885">
              <div className="icon">
               <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M317.1 378.1c-4.7 5.7-12.6 7.5-19.2 4.3c-73.8-34.8-133.5-94.5-168.3-168.3c-3.1-6.6-1.3-14.6 4.3-19.2l49.3-40.4c8.2-6.7 11-18 7-27.8l-40-96c-4.6-11.1-16.8-17.1-28.5-13.9l-88 24C23.2 43.7 16 53.2 16 64c0 238.6 193.4 432 432 432c10.8 0 20.3-7.2 23.2-17.7l24-88c3.2-11.6-2.8-23.8-13.9-28.5l-96-40c-9.8-4.1-21.1-1.3-27.8 7l-40.4 49.3zM304.7 368L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7z">
                </path>
               </svg>
              </div>
              <div className="values">
               <span className="value">
                Mon–Fri: 9AM–5PM, Sat: by appointment only
               </span>
               <span className="label bold">
                0207 870 8885
               </span>
              </div>
             </a>
            </div>
           </div>
          </div>
         </div>
        </div>
       </div>
       <section className="multi-center-holidays" id="signatureItineraries" style={{"backgroundColor":"rgb(239, 234, 228)"}}>
        <div className="container">
         <h3 className="section-subtitle">
          Signature Itineraries
         </h3>
         <h2 className="section-title">
          Unforgettable. Unrepeatable. Yours.
         </h2>
         <h4 className="section-description">
          Every journey is thoughtfully designed around you, combining expert insight with personal touches to create something truly unforgettable.
         </h4>
         <div className="cards">
          <div className="swiper swiper-initialized swiper-horizontal multi-center-swiper swiper-backface-hidden">
           <div className="swiper-wrapper" style={{"transform":"translate3d(0px, 0px, 0px)"}}>
            <div className="swiper-slide swiper-slide-active" style={{"width":"399.333px","marginRight":"16px"}}>
             <Link className="card" to="/journeys/south-east-asia">
              <div className="image-row">
               <img alt="Unforgettable South East Asia" loading="lazy" src="https://content.pinch.travel/images/deal/itinerary/luxury-thailand-cities-culture-beaches/Grid 1.jpg" />
              </div>
              <div className="card-content">
               <ul className="labels">
                <li>
                 South East Asia
                </li>
               </ul>
               <h3>
                Unforgettable South East Asia
               </h3>
               <p className="info">
                Experience the perfect balance of vibrant culture, breathtaking natural wonders, and tranquil beach escapes across Asia. From ancient temples and bustling cities to lush jungles and idyllic coastlines, this journey immerses you in the diverse beauty and rich heritage of the continent.
               </p>
               <p className="price-row">
                From £2,389 per person
               </p>
              </div>
             </Link>
            </div>
            <div className="swiper-slide swiper-slide-next" style={{"width":"399.333px","marginRight":"16px"}}>
             <Link className="card" to="/journeys/indian-ocean">
              <div className="image-row">
               <img alt="The Soul of the Indian Ocean" loading="lazy" src="/assets/images/hero.jpg" />
              </div>
              <div className="card-content">
               <ul className="labels">
                <li>
                 Indian Ocean
                </li>
               </ul>
               <h3>
                The Soul of the Indian Ocean
               </h3>
               <p className="info">
                Surrender to the allure of the Indian Ocean, where turquoise waters, powdery white sands, and lush tropical islands create the ultimate escape. From the Maldives to Mauritius and the Seychelles, this journey is a celebration of luxury, tranquility, and natural beauty.
               </p>
               <p className="price-row">
                From £3,979 per person
               </p>
              </div>
             </Link>
            </div>
            <div className="swiper-slide" style={{"width":"399.333px","marginRight":"16px"}}>
             <Link className="card" to="/journeys/africa">
              <div className="image-row">
               <img alt="Africa’s Wild Beauty, Tailor-Made" loading="lazy" src="/assets/images/hero.webp" />
              </div>
              <div className="card-content">
               <ul className="labels">
                <li>
                 Africa
                </li>
               </ul>
               <h3>
                Africa’s Wild Beauty, Tailor-Made
               </h3>
               <p className="info">
                Journey through Africa’s vast landscapes, from the sweeping savannahs and majestic wildlife of the Serengeti to the vibrant cultures and dramatic coastlines of the continent. Africa offers a tapestry of experiences, blending adventure, heritage, and natural wonder.
               </p>
               <p className="price-row">
                From £5,329 per person
               </p>
              </div>
             </Link>
            </div>
            <div className="swiper-slide" style={{"width":"399.333px","marginRight":"16px"}}>
             <Link className="card" to="/journeys/japan">
              <div className="image-row">
               <img alt="JAPAN WHERE TRADITION MEETS TOMORROW " loading="lazy" src="/assets/images/Japan_Hero_Image_Landing_Page.jpeg" />
              </div>
              <div className="card-content">
               <ul className="labels">
                <li>
                 Japan
                </li>
               </ul>
               <h3>
                JAPAN WHERE TRADITION MEETS TOMORROW
               </h3>
               <p className="info">
                Japan is a place where ancient customs meet modern design with effortless ease. From the buzz of Tokyo’s neon-lit streets to the stillness of Kyoto’s temples, contrasts lie at the heart of its beauty. Stay in contemporary hotels that rise high above the skyline, or in traditional ryokans opening onto tranquil gardens and private onsen baths. Savor the artistry of Japanese cuisine, learn the grace of a tea ceremony from a local master, or glide between cities on the Shinkansen as forests, mountains and rice fields pass by in quiet rhythm.
               </p>
               <p className="price-row">
                From £3,895 per person
               </p>
              </div>
             </Link>
            </div>
            <div className="swiper-slide" style={{"width":"399.333px","marginRight":"16px"}}>
             <Link className="card" to="/journeys/philippines">
              <div className="image-row">
               <img alt="The Philippines: From Peaks to Pristine Seas" loading="lazy" src="/assets/images/Philippines_Landing.jpeg" />
              </div>
              <div className="card-content">
               <ul className="labels">
                <li>
                 South East Asia
                </li>
                <li>
                 Philippines
                </li>
               </ul>
               <h3>
                The Philippines: From Peaks to Pristine Seas
               </h3>
               <p className="info">
                The Philippines is a country of striking contrasts and soulful warmth, where vivid natural beauty is woven seamlessly with layered history and heartfelt hospitality. Across more than seven thousand islands, journeys move effortlessly from cosmopolitan cities to secluded beaches, from emerald rice terraces carved into mountainsides to coral-rich seas glowing beneath tropical skies. Here, luxury feels relaxed rather than formal, shaped by open landscapes, gentle rhythms, and an instinctive sense of welcome.
               </p>
               <p className="price-row">
                From £3,450 per person
               </p>
              </div>
             </Link>
            </div>
           </div>
           <div className="swiper-button swiper-button-prev multi-center-button-prev swiper-button-disabled">
            <svg height="18" viewBox="0 0 10 18" width="10">
             <path d="M1 1L9 9L1 17" stroke="currentColor">
             </path>
            </svg>
           </div>
           <div className="swiper-button swiper-button-next multi-center-button-next">
            <svg height="18" viewBox="0 0 10 18" width="10">
             <path d="M1 1L9 9L1 17" stroke="currentColor">
             </path>
            </svg>
           </div>
          </div>
         </div>
         <button className="section-cta cta" type="button">
          Discover all signature itineraries
         </button>
        </div>
       </section>
      </div>
    </>
  );
}

export default TravelInquiry;
