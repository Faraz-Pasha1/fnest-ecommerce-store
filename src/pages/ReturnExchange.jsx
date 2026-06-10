import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RefreshCcw, CheckCircle, XCircle, AlertCircle, Phone } from 'lucide-react';

const ReturnExchange = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[35vh] bg-dark-gray flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: 'url(/gridimages/fnest-gift-bouquet-bags-celebation-birthday-event-ocassion-for-girls.png)' }} />
        <div className="relative text-center z-10 px-4">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-royal-blue text-xs uppercase tracking-[0.5em] font-bold mb-4">FNEST Policies</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-playfair font-bold text-white tracking-tighter">Return &amp; Exchange</motion.h1>
        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Intro */}
          <div>
            <p className="text-gray-500 text-lg leading-relaxed">
              At FNEST, your satisfaction is our priority. We want you to love every product you receive. If something isn't right, please read our return and exchange policy below.
            </p>
          </div>

          {/* Return Eligibility */}
          <div className="bg-premium-bg rounded-2xl p-8 border border-light-gray/20">
            <div className="flex items-center gap-3 mb-6">
              <RefreshCcw className="text-royal-blue" size={28} />
              <h2 className="text-2xl font-playfair font-bold text-dark-gray">Return Eligibility</h2>
            </div>
            <p className="text-gray-500 mb-6">Returns are accepted under the following conditions:</p>
            <ul className="space-y-3 text-gray-500">
              <li className="flex items-start gap-3"><CheckCircle size={18} className="text-royal-blue mt-0.5 flex-shrink-0" /><span>The item is <strong className="text-dark-gray">damaged, defective, or incorrect</strong> upon delivery.</span></li>
              <li className="flex items-start gap-3"><CheckCircle size={18} className="text-royal-blue mt-0.5 flex-shrink-0" /><span>The return request is made within <strong className="text-dark-gray">48 hours</strong> of receiving the order.</span></li>
              <li className="flex items-start gap-3"><CheckCircle size={18} className="text-royal-blue mt-0.5 flex-shrink-0" /><span>The product is in its <strong className="text-dark-gray">original, unopened packaging</strong> (for applicable items).</span></li>
              <li className="flex items-start gap-3"><CheckCircle size={18} className="text-royal-blue mt-0.5 flex-shrink-0" /><span>Photo evidence of the issue is provided via WhatsApp at the time of the complaint.</span></li>
            </ul>
          </div>

          {/* Non-Returnable Items */}
          <div className="bg-premium-bg rounded-2xl p-8 border border-light-gray/20">
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="text-dark-maroon" size={28} />
              <h2 className="text-2xl font-playfair font-bold text-dark-gray">Non-Returnable Items</h2>
            </div>
            <ul className="space-y-3 text-gray-500">
              <li className="flex items-start gap-3"><XCircle size={18} className="text-dark-maroon mt-0.5 flex-shrink-0" /><span>Opened or consumed food products (mukhwas, honey, chocolates), plesae note : it will be process on special cases.</span></li>
              <li className="flex items-start gap-3"><XCircle size={18} className="text-dark-maroon mt-0.5 flex-shrink-0" /><span>Custom-made or personalized gift bouquets and hampers.</span></li>
              <li className="flex items-start gap-3"><XCircle size={18} className="text-dark-maroon mt-0.5 flex-shrink-0" /><span>Items returned request are not accepted after the 48-hour window has passed.</span></li>
              <li className="flex items-start gap-3"><XCircle size={18} className="text-dark-maroon mt-0.5 flex-shrink-0" /><span>Products with missing original packaging or labels.</span></li>
            </ul>
          </div>

          {/* Exchange Process */}
          <div className="bg-premium-bg rounded-2xl p-8 border border-light-gray/20">
            <div className="flex items-center gap-3 mb-6">
              <RefreshCcw className="text-royal-blue" size={28} />
              <h2 className="text-2xl font-playfair font-bold text-dark-gray">Exchange Process</h2>
            </div>
            <ol className="space-y-4 text-gray-500">
              {[
                'Contact us on WhatsApp within 48 hours of receiving your order.',
                'Share clear photos/videos of the damaged or incorrect item.',
                'Our team will review your request within 24 hours.',
                'Once approved, we arrange pickup (in Karachi) or courier return.',
                'Replacement is dispatched within 2–3 business days of receiving the return.',
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-royal-blue text-white flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</span>
                  <span className="pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Refund Policy */}
          <div className="bg-premium-bg rounded-2xl p-8 border border-light-gray/20">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="text-royal-blue" size={28} />
              <h2 className="text-2xl font-playfair font-bold text-dark-gray">Refund Policy</h2>
            </div>
            <ul className="space-y-3 text-gray-500">
              <li className="flex items-start gap-3"><CheckCircle size={18} className="text-royal-blue mt-0.5 flex-shrink-0" /><span>Refunds are issued in the form of <strong className="text-dark-gray">store credit or replacement products</strong> only.</span></li>
              <li className="flex items-start gap-3"><CheckCircle size={18} className="text-royal-blue mt-0.5 flex-shrink-0" /><span>Cash refunds are only considered for orders that cannot be replaced due to stock unavailability.</span></li>
              <li className="flex items-start gap-3"><CheckCircle size={18} className="text-royal-blue mt-0.5 flex-shrink-0" /><span>Original shipping charges are non-refundable.</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center py-8 border-t border-light-gray/20">
            <p className="text-gray-500 mb-4">Need to report an issue with your order?</p>
            <a href="https://wa.me/923710132188" target="_blank" rel="noopener noreferrer" className="btn-premium inline-flex items-center gap-2">
              <Phone size={16} /> Contact Us on WhatsApp
            </a>
          </div>

          {/* Back Links */}
          <div className="flex gap-6 justify-center text-sm">
            <Link to="/shipping-policy" className="text-royal-blue hover:underline">← Shipping Policy</Link>
            <Link to="/privacy-policy" className="text-royal-blue hover:underline">Privacy Policy →</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReturnExchange;
