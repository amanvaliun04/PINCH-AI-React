import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import NavMenu from './NavMenu';
import SearchOverlay from './SearchOverlay';
import Footer from './Footer';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Handle hash scrolling for #holidayTypes and #destinations
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.substring(1));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.pathname, location.hash]);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
    document.body.classList.add('menu-open'); // Matches original CSS body lock if any
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('menu-open');
  };

  const handleOpenSearch = () => {
    setIsSearchOpen(true);
  };

  const handleCloseSearch = () => {
    setIsSearchOpen(false);
  };

  return (
    <div className="App">
      <div className="page-layout">
        <Header onOpenSearch={handleOpenSearch} onOpenMenu={handleOpenMenu} />
        
        <NavMenu 
          isOpen={isMenuOpen} 
          onClose={handleCloseMenu} 
          onOpenSearch={handleOpenSearch} 
        />
        
        <div className={`overlay ${isMenuOpen ? 'active' : ''}`} onClick={handleCloseMenu}></div>
        
        <SearchOverlay 
          isOpen={isSearchOpen} 
          onClose={handleCloseSearch} 
        />
        
        <div className="page-content">
          <Outlet />
        </div>
        
        <Footer />
      </div>
    </div>
  );
}
