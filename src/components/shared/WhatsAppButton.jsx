import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WHATSAPP_NUMBER = '923710132188';

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    const message = encodeURIComponent('Hello FNEST! I would like to inquire about your products.');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-8 right-8 z-[9999] flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="bg-white text-dark-gray text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-xl border border-light-gray/20 whitespace-nowrap"
          >
            Chat with us on WhatsApp
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            '0 0 0 0 rgba(37, 211, 102, 0.4)',
            '0 0 0 16px rgba(37, 211, 102, 0)',
          ],
        }}
        transition={{
          boxShadow: { duration: 1.5, repeat: Infinity, ease: 'easeOut' },
          scale: { duration: 0.2 },
        }}
        className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl"
        style={{ backgroundColor: '#25D366' }}
        aria-label="Chat on WhatsApp"
      >
        {/* WhatsApp SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="30"
          height="30"
          fill="white"
        >
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.476 2.027 7.782L0 32l8.455-2.018A15.934 15.934 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.31 13.31 0 01-6.824-1.88l-.488-.29-5.017 1.198 1.225-4.899-.317-.502A13.298 13.298 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.314-9.864c-.4-.2-2.367-1.168-2.733-1.302-.367-.133-.634-.2-.9.2-.267.4-1.034 1.302-1.267 1.568-.233.267-.467.3-.867.1-.4-.2-1.688-.623-3.215-1.984-1.188-1.061-1.99-2.372-2.224-2.772-.233-.4-.025-.616.175-.816.18-.18.4-.467.6-.7.2-.233.267-.4.4-.667.133-.267.067-.5-.033-.7-.1-.2-.9-2.167-1.234-2.967-.325-.78-.654-.674-.9-.686-.233-.012-.5-.015-.767-.015-.267 0-.7.1-1.067.5-.367.4-1.4 1.368-1.4 3.334s1.434 3.867 1.634 4.134c.2.267 2.822 4.307 6.836 6.04.956.413 1.7.66 2.283.845.959.306 1.832.263 2.52.16.769-.115 2.367-.968 2.7-1.902.333-.934.333-1.735.233-1.902-.1-.167-.367-.267-.767-.467z"/>
        </svg>
      </motion.button>
    </div>
  );
};

export default WhatsAppButton;
