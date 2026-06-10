import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Truck, Clock, MapPin, CheckCircle, AlertCircle, Phone } from 'lucide-react';

const ShippingPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[35vh] bg-dark-gray flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: 'url(/gridimages/fnest-mukhwas-mouth-freshener-digestive-daily-meal-tradition.jpeg)' }} />
        <div className="relative text-center z-10 px-4">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-royal-blue text-xs uppercase tracking-[0.5em] font-bold mb-4">FNEST Policies</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-playfair font-bold text-white tracking-tighter">Shipping Policy</motion.h1>
        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Intro */}
          <div>
            <p className="text-gray-500 text-lg leading-relaxed">
              At FNEST, we are committed to delivering your premium products safely and on time. Please read our shipping policy carefully to understand how we handle your orders.
            </p>
          </div>

          {/* Delivery Areas */}
          <div className="bg-premium-bg rounded-2xl p-8 border border-light-gray/20">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="text-royal-blue" size={28} />
              <h2 className="text-2xl font-playfair font-bold text-dark-gray">Delivery Areas</h2>
            </div>
            <ul className="space-y-3 text-gray-500">
              <li className="flex items-start gap-3"><CheckCircle size={18} className="text-royal-blue mt-0.5 flex-shrink-0" /><span><strong className="text-dark-gray">Within Karachi:</strong> Next-day delivery is available for most orders placed before 11:00 AM, if order amount above Rs.1000</span></li>
              <li className="flex items-start gap-3"><CheckCircle size={18} className="text-royal-blue mt-0.5 flex-shrink-0" /><span><strong className="text-dark-gray">Other Major Cities (Lahore, Islamabad, Rawalpindi, Peshawar, Quetta):</strong> Will be available soon.</span></li>
              {/* <li className="flex items-start gap-3"><CheckCircle size={18} className="text-royal-blue mt-0.5 flex-shrink-0" /><span><strong className="text-dark-gray">Remote Areas:</strong> 4–7 business days depending on courier availability.</span></li> */}
            </ul>
          </div>

          {/* Processing Time */}
          <div className="bg-premium-bg rounded-2xl p-8 border border-light-gray/20">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="text-royal-blue" size={28} />
              <h2 className="text-2xl font-playfair font-bold text-dark-gray">Processing Time</h2>
            </div>
            <ul className="space-y-3 text-gray-500">
              <li className="flex items-start gap-3"><CheckCircle size={18} className="text-royal-blue mt-0.5 flex-shrink-0" /><span>Orders are processed within <strong className="text-dark-gray">1–2 business days</strong> after confirmation.</span></li>
              <li className="flex items-start gap-3"><CheckCircle size={18} className="text-royal-blue mt-0.5 flex-shrink-0" /><span>Orders placed on weekends or public holidays are processed the next business day.</span></li>
              <li className="flex items-start gap-3"><CheckCircle size={18} className="text-royal-blue mt-0.5 flex-shrink-0" /><span>You will receive a WhatsApp confirmation message once your order has been dispatched.</span></li>
            </ul>
          </div>

          {/* Shipping Charges */}
          <div className="bg-premium-bg rounded-2xl p-8 border border-light-gray/20">
            <div className="flex items-center gap-3 mb-6">
              <Truck className="text-royal-blue" size={28} />
              <h2 className="text-2xl font-playfair font-bold text-dark-gray">Shipping Charges</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-500">
                <thead>
                  <tr className="border-b border-light-gray/30">
                    <th className="text-left py-3 text-dark-gray uppercase tracking-widest font-bold text-xs">Location</th>
                    <th className="text-left py-3 text-dark-gray uppercase tracking-widest font-bold text-xs">Delivery Time</th>
                    <th className="text-left py-3 text-dark-gray uppercase tracking-widest font-bold text-xs">Charges</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-light-gray/20">
                  <tr><td className="py-3">Within Karachi</td><td className="py-3">3 to 5 days</td><td className="py-3 text-royal-blue font-bold">Rs.200 or Free (orders above Rs. 3000)</td></tr>
                  <tr><td className="py-3">Other Cities</td><td className="py-3">will be confirmed soon</td><td className="py-3">will be confirmed soon</td></tr>
                  {/* <tr><td className="py-3">Remote Areas</td><td className="py-3">4 to 7 days</td><td className="py-3">To be confirmed.</td></tr> */}
                </tbody>
              </table>
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-premium-bg rounded-2xl p-8 border border-light-gray/20">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="text-dark-maroon" size={28} />
              <h2 className="text-2xl font-playfair font-bold text-dark-gray">Important Notes</h2>
            </div>
            <ul className="space-y-3 text-gray-500">
              <li className="flex items-start gap-3"><AlertCircle size={18} className="text-dark-maroon mt-0.5 flex-shrink-0" /><span>FNEST is not responsible for delays caused by courier services, weather, or other factors beyond our control.</span></li>
              <li className="flex items-start gap-3"><AlertCircle size={18} className="text-dark-maroon mt-0.5 flex-shrink-0" /><span>Please ensure your delivery address and contact number are correct when placing an order.</span></li>
              <li className="flex items-start gap-3"><AlertCircle size={18} className="text-dark-maroon mt-0.5 flex-shrink-0" /><span>For perishable or delicate items (chocolates, gift bouquets), orders must be received by someone at the delivery address.</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center py-8 border-t border-light-gray/20">
            <p className="text-gray-500 mb-4">Have questions about your shipment?</p>
            <a href="https://wa.me/923710132188" target="_blank" rel="noopener noreferrer" className="btn-premium inline-flex items-center gap-2">
              <Phone size={16} /> Contact Us on WhatsApp
            </a>
          </div>

          {/* Back Links */}
          <div className="flex gap-6 justify-center text-sm">
            <Link to="/return-exchange" className="text-royal-blue hover:underline">Return &amp; Exchange Policy →</Link>
            <Link to="/privacy-policy" className="text-royal-blue hover:underline">Privacy Policy →</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShippingPolicy;
