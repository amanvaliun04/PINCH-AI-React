import React from 'react';
import { Link } from 'react-router-dom';

function BookingConditions() {
  

  return (
    <>
      <section className="terms-wrapper gopher"><div className="container"><div className="terms-wrapper__title">Booking Conditions</div><div className="terms-wrapper__text"><p>&nbsp;</p><p>In the travel industry, it can sometimes be difficult to distinguish between the roles of a travel agent and a tour operator. Both are key travel service providers but operate in different ways. At Pinch.travel, we hold our own ATOL licence, which allows us to both create and sell our own tour operator packages and to sell packages from other tour operators under their ATOL licences.</p><p>&nbsp;</p><p>As an example, when you speak to a travel agent, you tell them your budget and what kind of holiday you’re looking for. The agent then searches across different tour operators to find packages that fit your needs. Once you make a booking, the ATOL protection is supplied by the tour operator you book with.</p><p>&nbsp;</p><p>Pinch.travel operates as both a travel agent and a tour operator. We will clearly inform you during the booking and confirmation process whether we are acting as an agent or as a tour operator (principal).</p><p>&nbsp;</p><p>When we act as a travel agent, the following terms and conditions apply:<Link className="docs-link" rel="nofollow" to="/booking-conditions-travel-agent">https://www.pinch.travel/booking-conditions-travel-agent</Link></p><p>&nbsp;</p><p>When we act as a tour operator/principal, the following terms and conditions apply:<Link className="docs-link" rel="nofollow" to="/booking-conditions-tour-operator">https://www.pinch.travel/booking-conditions-tour-operator</Link></p><p>&nbsp;</p></div></div></section>
    </>
  );
}

export default BookingConditions;
