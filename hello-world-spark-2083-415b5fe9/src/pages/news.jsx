import React from 'react';
import { Link } from 'react-router-dom';

function News() {
  

  return (
    <>
      <div className="contact"><div className="phone"><div className="opening-hours"><span className="top-line">Mon–Fri: 9AM–5PM, Sat: Appointment only</span></div><span className="bottom-line bold">0207 870 8885</span></div></div><div className="flex-group"><div className="phone-mobile"><a href="tel:+4402078708885" aria-label="Call us"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25"><path d="M15.873 15.1673C16.0055 15.0751 16.1579 15.0189 16.3164 15.004C16.4748 14.9889 16.6344 15.0153 16.7806 15.081L22.4194 17.7223C22.6094 17.8072 22.768 17.9543 22.8715 18.1413C22.9749 18.3283 23.0178 18.5454 22.9933 18.7599C22.8076 20.2112 22.124 21.5426 21.0696 22.5066C20.0152 23.4704 18.6619 24.0011 17.2612 24C12.9485 24 8.81238 22.2089 5.76282 19.0206C2.71323 15.8326 1 11.5084 1 6.99962C0.998932 5.53534 1.50659 4.1205 2.42855 3.01819C3.35053 1.9159 4.62405 1.20119 6.0123 1.00699C6.21751 0.981495 6.4251 1.02618 6.60401 1.13433C6.78291 1.2425 6.92349 1.40832 7.0047 1.607L9.53118 7.50713C9.59325 7.65867 9.61854 7.8239 9.60477 7.98812C9.59099 8.15234 9.53861 8.31046 9.45226 8.4484L6.89709 11.6247C6.80647 11.7677 6.75286 11.9328 6.74155 12.104C6.73023 12.2751 6.76157 12.4463 6.83253 12.601C7.82136 14.7173 9.91379 16.8786 11.9441 17.9024C12.0928 17.9762 12.2574 18.0082 12.4215 17.9953C12.5857 17.9823 12.7438 17.925 12.8803 17.8287L15.873 15.1673Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" fill="none"></path></svg></a></div><button className="burger" type="button" aria-label="Toggle navigation menu"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><line x1="3" y1="7.5" x2="29" y2="7.5" stroke="rgb(0, 0, 0)"></line><line x1="3" y1="15.5" x2="29" y2="15.5" stroke="rgb(0, 0, 0)"></line><line x1="3" y1="23.5" x2="29" y2="23.5" stroke="rgb(0, 0, 0)"></line></svg></button></div>
    <nav className="nav-menu"><button className="close" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M19 1L10 10M1 19L10 10M10 10L19 19L1 1" stroke="black"></path></svg></button><Link to="/about-us">About Us</Link><Link data-news-link="1" to="/news">News</Link><div className="header-dropdown-wrapper"><div className="dropdown-head"><div className="name">Signature Itineraries</div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path></svg></div><div className="list "></div></div><div className="header-dropdown-wrapper"><div className="dropdown-head"><div className="name">Destinations</div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path></svg></div><div className="list "></div></div><div className="header-dropdown-wrapper"><div className="dropdown-head"><div className="name">Holiday Types</div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path></svg></div><div className="list "></div></div><button className="search-icon-btn mobile-search-btn" aria-label="Open search"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg><span>Search</span></button><div className="callback-form-wrapper"><p> PINCH. Where your perfect trip begins.</p><div className="callback-form"><a href="tel:+4402078708885" className="callback-types-item"><div className="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M317.1 378.1c-4.7 5.7-12.6 7.5-19.2 4.3c-73.8-34.8-133.5-94.5-168.3-168.3c-3.1-6.6-1.3-14.6 4.3-19.2l49.3-40.4c8.2-6.7 11-18 7-27.8l-40-96c-4.6-11.1-16.8-17.1-28.5-13.9l-88 24C23.2 43.7 16 53.2 16 64c0 238.6 193.4 432 432 432c10.8 0 20.3-7.2 23.2-17.7l24-88c3.2-11.6-2.8-23.8-13.9-28.5l-96-40c-9.8-4.1-21.1-1.3-27.8 7l-40.4 49.3zM304.7 368L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7z"></path></svg></div><div className="values"><span className="value">Mon–Fri: 9AM–5PM, Sat: by appointment only</span><span className="label bold">0207 870 8885</span></div></a><a href="mailto:connect@pinch.travel" className="callback-types-item"><div className="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 80c-26.5 0-48 21.5-48 48l0 28.2L220.8 321.4c20.5 16.5 49.8 16.5 70.3 0L496 156.2l0-28.2c0-26.5-21.5-48-48-48L64 80zM16 176.7L16 384c0 26.5 21.5 48 48 48l384 0c26.5 0 48-21.5 48-48l0-207.3L301.2 333.8c-26.4 21.3-64 21.3-90.4 0L16 176.7zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"></path></svg></div><div className="values"><span className="value">email us</span><span className="label">connect@pinch.travel</span></div></a></div><p className="callback-form-expert-label">Choose an expert</p><div className="callback-form-experts" role="listbox" aria-label="Select a travel expert"><button type="button" className="callback-form-expert " role="option" aria-selected="false" aria-label="Select Britt-Marie"><img alt="" className="callback-form-expert__photo" src="/assets/images/britt.jpg" /><span className="callback-form-expert__name">Britt-Marie</span></button><button type="button" className="callback-form-expert " role="option" aria-selected="false" aria-label="Select Gemma"><img alt="" className="callback-form-expert__photo" src="/assets/images/gemma.jpeg" /><span className="callback-form-expert__name">Gemma</span></button></div><Link className="cta outline black" style={{"cursor":"pointer","display":"inline-block","width":"max-content","fontSize":"1rem","textTransform":"capitalize"}} to="/travel-inquiry">Talk To A Travel Expert</Link></div></nav>
    
<main className="news-page-wrapper" style={{"maxWidth":"1200px","margin":"0 auto","padding":"80px 24px 40px"}}>
  <section style={{"textAlign":"center","marginBottom":"40px"}}>
    <div style={{"textTransform":"uppercase","letterSpacing":"3px","fontSize":"13px","color":"#666"}}>Pinch Journal</div>
    <h1 style={{"fontSize":"clamp(2rem,5vw,3.5rem)","margin":"16px 0 12px","fontWeight":"500","letterSpacing":"-0.5px"}}>News & Guides</h1>
    <p style={{"color":"#666","fontSize":"1.1rem","maxWidth":"640px","margin":"0 auto"}}>Stories, guides and considered advice from the PINCH team, for travellers who value getting it right.</p>
  </section>

  <section className="featured-guide" aria-label="Featured guide">
    <div className="featured-guide__eyebrow">Featured PINCH Me Guide</div>
    <h2 className="featured-guide__title">PINCH Me Guide: Multi-Generational Thailand Family Holidays</h2>
    <div className="featured-guide__cta-wrap">
      <Link className="featured-guide__cta" to="/news/pinch-me-guide-multi-generational-thailand-family-holidays">Read the PINCH Me Guide →</Link>
    </div>
  </section>

  <section style={{"display":"flex","alignItems":"baseline","justifyContent":"space-between","borderTop":"1px solid #e5e5e5","paddingTop":"24px"}}>
    <h2 style={{"fontSize":"1.1rem","fontWeight":"600","letterSpacing":"2px","textTransform":"uppercase","margin":"0"}}>All Posts</h2>
    <span data-posts-count="" style={{"color":"#666","fontSize":"13px","letterSpacing":"1px","textTransform":"uppercase"}}>1 Article</span>
  </section>

  <section id="posts-index" style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(320px,1fr))","gap":"40px","padding":"40px 0 60px"}}></section>

  <div style={{"textAlign":"center","paddingBottom":"80px"}}>
    <button id="load-more-btn" type="button" style={{"display":"none","padding":"14px 32px","border":"1.5px solid #000","background":"#fff","color":"#000","fontSize":"14px","textTransform":"uppercase","letterSpacing":"2px","cursor":"pointer","fontFamily":"inherit"}}>Load more</button>
    <p id="load-more-status" style={{"color":"#666","fontSize":"13px","letterSpacing":"1px","textTransform":"uppercase","marginTop":"16px"}}></p>
  </div>
</main>

<style dangerouslySetInnerHTML={{ __html: `.featured-guide{border-top:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5;padding:32px 24px;margin-bottom:24px;display:grid;grid-template-columns:1fr;gap:16px;text-align:center;justify-items:center;}
  .featured-guide__eyebrow{text-transform:uppercase;letter-spacing:3px;font-size:12px;color:#666;}
  .featured-guide__title{font-size:clamp(1.4rem,2.5vw,1.8rem);font-weight:500;margin:0;letter-spacing:-.2px;max-width:640px;}
  .featured-guide__cta-wrap{width:100%;display:flex;justify-content:center;}
  .featured-guide__cta{display:inline-flex;align-items:center;justify-content:center;min-height:52px;padding:14px 28px;background:#000;color:#fff;text-decoration:none;text-transform:uppercase;letter-spacing:2px;font-size:13px;line-height:1.2;}
  .featured-guide__cta:hover{background:#333;}
  .news-card{text-decoration:none;color:inherit;display:block;}
  .news-card__image{aspect-ratio:16/10;overflow:hidden;background:#f2f2f2;}
  .news-card__image img{width:100%;height:100%;object-fit:cover;transition:transform .6s ease;}
  .news-card:hover .news-card__image img{transform:scale(1.04);}
  .news-card__body{padding:0 4px;}
  .news-card__meta{text-transform:uppercase;letter-spacing:2px;font-size:12px;color:#666;margin:20px 0 8px;}
  .news-card__title{font-size:1.4rem;font-weight:500;line-height:1.3;margin:0 0 10px;}
  .news-card__excerpt{color:#666;font-size:.95rem;line-height:1.6;margin:0;}
  .news-card__cta{display:inline-flex;align-items:center;min-height:44px;margin-top:16px;font-size:13px;letter-spacing:2px;text-transform:uppercase;border-bottom:1.5px solid #000;padding:6px 0 8px;color:#000;}
  @media (max-width:640px){
    .featured-guide{padding:28px 20px;gap:14px;}
    .featured-guide__cta-wrap{padding:0 4px;}
    .featured-guide__cta{width:100%;max-width:420px;min-height:56px;padding:16px 20px;font-size:14px;}
    .news-card__title{font-size:1.25rem;}
    .news-card__cta{width:100%;justify-content:center;min-height:52px;border:1.5px solid #000;padding:14px 16px;margin-top:18px;}
  }` }} />


    </>
  );
}

export default News;
