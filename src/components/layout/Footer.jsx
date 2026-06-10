import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

const LOGO = '/fnestlogo/fnest-logo-ecommerce-shopping-tradition-mukhwas-mouth-freshener-chocolates-gift-bouquets-celebration-taste.webp';
const WHATSAPP_NUMBER = '923710132188';

const Footer = () => {
  return (
    <footer className="bg-dark-gray text-white pt-20 pb-10">
      <div className="w-full mx-auto px-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div>
            <Link to="/" className="mb-6 block">
              <img src={LOGO} alt="FNEST Logo" className="h-20 w-auto object-contain bg-white rounded-xl px-3 py-2" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-xs">
              Premium quality products — from mouth-fresheners and honey to chocolates and gift bouquets. Taste the difference.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/fnest.store/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-[#1877F2] hover:border-[#1877F2] transition-all duration-300"
                title="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a
                href="https://www.instagram.com/fnest_pk/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:border-transparent transition-all duration-300"
                title="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a
                href="https://www.youtube.com/@fnest_store26"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-[#FF0000] hover:border-[#FF0000] transition-all duration-300"
                title="YouTube"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-[#25D366] hover:border-[#25D366] transition-all duration-300"
                title="WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="18" height="18" fill="currentColor">
                  <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.476 2.027 7.782L0 32l8.455-2.018A15.934 15.934 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.31 13.31 0 01-6.824-1.88l-.488-.29-5.017 1.198 1.225-4.899-.317-.502A13.298 13.298 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.314-9.864c-.4-.2-2.367-1.168-2.733-1.302-.367-.133-.634-.2-.9.2-.267.4-1.034 1.302-1.267 1.568-.233.267-.467.3-.867.1-.4-.2-1.688-.623-3.215-1.984-1.188-1.061-1.99-2.372-2.224-2.772-.233-.4-.025-.616.175-.816.18-.18.4-.467.6-.7.2-.233.267-.4.4-.667.133-.267.067-.5-.033-.7-.1-.2-.9-2.167-1.234-2.967-.325-.78-.654-.674-.9-.686-.233-.012-.5-.015-.767-.015-.267 0-.7.1-1.067.5-.367.4-1.4 1.368-1.4 3.334s1.434 3.867 1.634 4.134c.2.267 2.822 4.307 6.836 6.04.956.413 1.7.66 2.283.845.959.306 1.832.263 2.52.16.769-.115 2.367-.968 2.7-1.902.333-.934.333-1.735.233-1.902-.1-.167-.367-.267-.767-.467z"/>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@fnest_store"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-[#000000] hover:border-[#000000] hover:text-white transition-all duration-300"
                title="TikTok"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
              </a>
              <a
                href="https://www.snapchat.com/add/fnest.store"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-[#FFFC00] hover:border-[#FFFC00] hover:text-black transition-all duration-300"
                title="Snapchat"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11.66 22a4.32 4.32 0 0 1-2.48-1.57c-1.34-1.63-1.6-3.8-1.46-5.73C6.46 14.28 5 13.62 5 11c0-1.22 1.35-2 2.65-2.27a1 1 0 0 0 .73-1.54C7.62 5.56 8.5 2 12 2c3.5 2 4.38 3.56 3.62 5.19a1 1 0 0 0 .73 1.54C17.65 9 19 9.78 19 11c0 2.62-1.46 3.28-2.72 3.7.14 1.93-.12 4.1-1.46 5.73a4.32 4.32 0 0 1-2.48 1.57"></path><path d="M5.5 16A16.63 16.63 0 0 0 12 18a16.63 16.63 0 0 0 6.5-2"></path></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] font-bold mb-8 text-green-400 text-[14px]">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/shop" className="hover:text-white transition-colors">Our Collection</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Best Sellers</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blogs</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li>
                <a href="/product-catalog.pdf" download className="hover:text-white transition-colors">
                  Download Catalog
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] font-bold mb-8 text-green-400 text-[14px]">Support</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/shipping-policy" className="hover:text-white transition-colors">Shipping Policy</Link></li>
              <li><Link to="/return-exchange" className="hover:text-white transition-colors">Returns &amp; Exchanges</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] font-bold mb-8 text-green-400 text-[14px]">Get in Touch</h4>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <MapPin size={16} className="text-green-400 flex-shrink-0" />
                <span>Karachi, Pakistan</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <Phone size={16} className="text-green-400 flex-shrink-0" />
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  +92 371 013 2188
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail size={16} className="text-green-400 flex-shrink-0" />
                <a href="mailto:info@fnest.pk" className="hover:text-white transition-colors">fnest26@gmail.com</a>
              </div>
            </div>
            {/* Newsletter */}
            <p className="text-gray-500 text-xs uppercase tracking-widest mb-3">Newsletter</p>
            <form className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-gray-800 border-none px-4 py-3 text-sm focus:ring-1 focus:ring-royal-blue text-white"
              />
              <button className="absolute right-0 top-0 h-full px-4 bg-green-400 hover:bg-opacity-90 transition-all">
                <Mail size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-xs uppercase tracking-widest">
            © 2026 FNEST Premium Products. All Rights Reserved.
          </p>
          <div className="flex space-x-6 text-gray-600 text-xs uppercase tracking-widest">
            <Link to="/privacy-policy" className="hover:text-gray-400 transition-colors">Privacy</Link>
            <Link to="/shipping-policy" className="hover:text-gray-400 transition-colors">Shipping</Link>
            <Link to="/return-exchange" className="hover:text-gray-400 transition-colors">Returns</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
