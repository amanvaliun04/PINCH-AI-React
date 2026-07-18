import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link, useParams } from 'react-router-dom';
import Layout from './components/Layout';

// Static page imports
const Index = lazy(() => import('./pages/index'));
const AboutUs = lazy(() => import('./pages/about-us'));
const BookAnAppointment = lazy(() => import('./pages/book-an-appointment'));
const TravelInquiry = lazy(() => import('./pages/travel-inquiry'));
const FinancialProtection = lazy(() => import('./pages/financial-protection'));
const PrivacyPolicy = lazy(() => import('./pages/privacy-policy'));
const Terms = lazy(() => import('./pages/terms'));
const BookingConditions = lazy(() => import('./pages/booking-conditions'));
const BookingConditionsTourOperator = lazy(() => import('./pages/booking-conditions-tour-operator'));
const BookingConditionsTravelAgent = lazy(() => import('./pages/booking-conditions-travel-agent'));
const News = lazy(() => import('./pages/news'));

// Dynamic Page Fallbacks
const DestinationCountry = lazy(() => import('./pages/DestinationCountry'));
const HolidayType = lazy(() => import('./pages/HolidayType'));

// Gather all generated JSX pages dynamically using Vite's glob import
const pages = import.meta.glob('./pages/**/*.jsx');

// Dynamic Destination router (handles countries and hotels)
const DynamicDestination = () => {
  const { slug } = useParams();
  
  // 1. Try static destination (e.g. ./pages/destinations/thailand.jsx)
  let pageKey = `./pages/destinations/${slug}.jsx`;
  if (pages[pageKey]) {
    const Component = lazy(pages[pageKey]);
    return <Component />;
  }
  
  // 2. Try hotel page (e.g. ./pages/destinations/hotels/sun-siyam-iru-veli.jsx)
  pageKey = `./pages/destinations/hotels/${slug}.jsx`;
  if (pages[pageKey]) {
    const Component = lazy(pages[pageKey]);
    return <Component />;
  }

  // 3. Fallback to generic country layout (e.g. Bali, Kenya)
  return <DestinationCountry />;
};

// Dynamic Journey router (handles region pages and itineraries)
const DynamicJourney = () => {
  const { slug } = useParams();
  
  // 1. Try dynamic itinerary (e.g. ./pages/journeys/itineraries/bali-lombok.jsx)
  let pageKey = `./pages/journeys/itineraries/${slug}.jsx`;
  if (pages[pageKey]) {
    const Component = lazy(pages[pageKey]);
    return <Component />;
  }

  // 2. Try region page (e.g. ./pages/journeys/south-east-asia.jsx)
  pageKey = `./pages/journeys/${slug}.jsx`;
  if (pages[pageKey]) {
    const Component = lazy(pages[pageKey]);
    return <Component />;
  }

  return (
    <div className="container" style={{ padding: '100px 24px', textAlign: 'center' }}>
      <h2>Journey Not Found</h2>
      <p>Sorry, we could not find the journey you are looking for.</p>
      <Link to="/" className="cta black" style={{ marginTop: '20px', display: 'inline-block' }}>Back to Home</Link>
    </div>
  );
};

// Dynamic News router
const DynamicNews = () => {
  const { slug } = useParams();
  const pageKey = `./pages/news/${slug}.jsx`;
  if (pages[pageKey]) {
    const Component = lazy(pages[pageKey]);
    return <Component />;
  }
  return (
    <div className="container" style={{ padding: '100px 24px', textAlign: 'center' }}>
      <h2>Article Not Found</h2>
      <p>Sorry, we could not find the article you are looking for.</p>
      <Link to="/news" className="cta black" style={{ marginTop: '20px', display: 'inline-block' }}>Back to News</Link>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Suspense fallback={<div className="loading-fallback" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontSize: '1.25rem', fontFamily: 'sans-serif' }}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Core pages */}
            <Route index element={<Index />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="book-an-appointment" element={<BookAnAppointment />} />
            <Route path="travel-inquiry" element={<TravelInquiry />} />
            <Route path="financial-protection" element={<FinancialProtection />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="booking-conditions" element={<BookingConditions />} />
            <Route path="booking-conditions-tour-operator" element={<BookingConditionsTourOperator />} />
            <Route path="booking-conditions-travel-agent" element={<BookingConditionsTravelAgent />} />
            
            {/* News */}
            <Route path="news" element={<News />} />
            <Route path="news/:slug" element={<DynamicNews />} />

            {/* Destinations and Hotels */}
            <Route path="destinations/:slug" element={<DynamicDestination />} />
            
            {/* Journeys (Signature Itineraries & Regions) */}
            <Route path="journeys" element={<Navigate to="/" replace />} />
            <Route path="journeys/:slug" element={<DynamicJourney />} />
            <Route path="journeys/itineraries/:slug" element={<DynamicJourney />} />

            {/* Holiday Types */}
            <Route path="holiday-types/:slug" element={<HolidayType />} />

            {/* Fallback redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}
