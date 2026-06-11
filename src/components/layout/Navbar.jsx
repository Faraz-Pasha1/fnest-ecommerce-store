import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X, Download } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { motion, AnimatePresence } from 'framer-motion';

const WHATSAPP_NUMBER = '923710132188';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const { cart } = useShop();
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchInput.trim())}`);
      setShowSearch(false);
      setSearchInput('');
    }
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Blog', path: '/blog' },
    { name: 'About & Contact', path: '/about' },
  ];

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
  };

  return (
    <nav className="sticky top-0 z-50 glass-nav border-b border-light-gray/20 bg-white/90 backdrop-blur-md">
      <div className="w-full mx-auto px-4 md:px-[60px]">
        <div className="flex justify-between items-center h-24 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img
              src="/fnestlogo/fnest-logo-ecommerce-shopping-tradition-mukhwas-mouth-freshener-chocolates-gift-bouquets-celebration-taste.webp"
              alt="FNEST Logo"
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav — centered */}
          <div className="hidden md:flex items-center justify-center gap-8 flex-1 mx-8">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className="nav-link text-sm uppercase tracking-widest">
                {link.name}
              </Link>
            ))}
            {/* Download Catalog as a nav link */}
            <a
              href="/product-catalog.pdf"
              download
              className="nav-link text-sm uppercase tracking-widest flex items-center gap-1.5"
              title="Download Catalog"
            >
              <Download size={14} />
              <span>Catalog</span>
            </a>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-5">
            {/* WhatsApp number with black→green animation */}
            <button
              onClick={handleWhatsApp}
              className="flex items-center gap-2 group"
              title="Chat on WhatsApp"
            >
              {/* WhatsApp icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="18"
                height="18"
                className="transition-all duration-500 group-hover:fill-[#25D366] fill-dark-gray"
              >
                <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.476 2.027 7.782L0 32l8.455-2.018A15.934 15.934 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.31 13.31 0 01-6.824-1.88l-.488-.29-5.017 1.198 1.225-4.899-.317-.502A13.298 13.298 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.314-9.864c-.4-.2-2.367-1.168-2.733-1.302-.367-.133-.634-.2-.9.2-.267.4-1.034 1.302-1.267 1.568-.233.267-.467.3-.867.1-.4-.2-1.688-.623-3.215-1.984-1.188-1.061-1.99-2.372-2.224-2.772-.233-.4-.025-.616.175-.816.18-.18.4-.467.6-.7.2-.233.267-.4.4-.667.133-.267.067-.5-.033-.7-.1-.2-.9-2.167-1.234-2.967-.325-.78-.654-.674-.9-.686-.233-.012-.5-.015-.767-.015-.267 0-.7.1-1.067.5-.367.4-1.4 1.368-1.4 3.334s1.434 3.867 1.634 4.134c.2.267 2.822 4.307 6.836 6.04.956.413 1.7.66 2.283.845.959.306 1.832.263 2.52.16.769-.115 2.367-.968 2.7-1.902.333-.934.333-1.735.233-1.902-.1-.167-.367-.267-.767-.467z"/>
              </svg>
              <span
                className="text-xs font-bold uppercase tracking-widest transition-colors duration-500 text-dark-gray group-hover:text-[#25D366]"
                style={{ letterSpacing: '0.1em' }}
              >
                +92 371 013 2188
              </span>
            </button>

            <button
              onClick={() => setShowSearch(!showSearch)}
              className="text-dark-gray hover:text-royal-blue transition-colors"
            >
              <Search size={20} />
            </button>

            <Link to="/cart" className="text-dark-gray hover:text-royal-blue transition-colors relative">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-dark-maroon text-white text-[10px] w-4 h-4 rounded-none flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="text-dark-gray"
            >
              <Search size={20} />
            </button>
            <Link to="/cart" className="text-dark-gray hover:text-royal-blue transition-colors relative">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-dark-maroon text-white text-[10px] w-4 h-4 rounded-none flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark-gray hover:text-royal-blue"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar Overlay */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-white border-b border-light-gray/20 p-4 z-40"
          >
            <form onSubmit={handleSearchSubmit} className="max-w-3xl mx-auto flex items-center bg-premium-bg border border-light-gray/30 px-4 py-2">
              <Search size={20} className="text-gray-400" />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search products..."
                className="w-full bg-transparent border-none focus:ring-0 px-4 py-2 text-sm"
                autoFocus
              />
              <button type="button" onClick={() => setShowSearch(false)} className="text-gray-400 hover:text-dark-maroon">
                <X size={20} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-light-gray/20 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4 shadow-inner">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-sm uppercase tracking-widest text-dark-gray py-2 border-b border-light-gray/10 hover:text-royal-blue transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="/product-catalog.pdf"
                download
                className="block text-sm uppercase tracking-widest text-dark-gray py-2 border-b border-light-gray/10 hover:text-royal-blue transition-colors flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <Download size={14} />
                Download Catalog
              </a>
              <button
                onClick={() => { handleWhatsApp(); setIsOpen(false); }}
                className="flex items-center gap-2 text-sm uppercase tracking-widest text-dark-gray py-2 hover:text-[#25D366] transition-colors w-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="currentColor">
                  <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.476 2.027 7.782L0 32l8.455-2.018A15.934 15.934 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.31 13.31 0 01-6.824-1.88l-.488-.29-5.017 1.198 1.225-4.899-.317-.502A13.298 13.298 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.314-9.864c-.4-.2-2.367-1.168-2.733-1.302-.367-.133-.634-.2-.9.2-.267.4-1.034 1.302-1.267 1.568-.233.267-.467.3-.867.1-.4-.2-1.688-.623-3.215-1.984-1.188-1.061-1.99-2.372-2.224-2.772-.233-.4-.025-.616.175-.816.18-.18.4-.467.6-.7.2-.233.267-.4.4-.667.133-.267.067-.5-.033-.7-.1-.2-.9-2.167-1.234-2.967-.325-.78-.654-.674-.9-.686-.233-.012-.5-.015-.767-.015-.267 0-.7.1-1.067.5-.367.4-1.4 1.368-1.4 3.334s1.434 3.867 1.634 4.134c.2.267 2.822 4.307 6.836 6.04.956.413 1.7.66 2.283.845.959.306 1.832.263 2.52.16.769-.115 2.367-.968 2.7-1.902.333-.934.333-1.735.233-1.902-.1-.167-.367-.267-.767-.467z"/>
                </svg>
                +92 371 013 2188
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
