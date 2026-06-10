import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Eye, Lock, Database, UserCheck, Phone } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[35vh] bg-dark-gray flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: 'url(/gridimages/fnest-shehad-beri-sidr-honey-pure-organic-nutrition-digestive-shifa.jpeg)' }} />
        <div className="relative text-center z-10 px-4">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-royal-blue text-xs uppercase tracking-[0.5em] font-bold mb-4">FNEST Policies</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-playfair font-bold text-white tracking-tighter">Privacy Policy</motion.h1>
        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Intro */}
          <div>
            <p className="text-gray-400 text-xs uppercase tracking-widest mb-4">Last Updated: June 2026</p>
            <p className="text-gray-500 text-lg leading-relaxed">
              FNEST is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information when you interact with our website or place an order with us.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="bg-premium-bg rounded-2xl p-8 border border-light-gray/20">
            <div className="flex items-center gap-3 mb-6">
              <Database className="text-royal-blue" size={28} />
              <h2 className="text-2xl font-playfair font-bold text-dark-gray">Information We Collect</h2>
            </div>
            <ul className="space-y-3 text-gray-500">
              <li><strong className="text-dark-gray">Contact Information:</strong> Name, phone number, and delivery address provided when placing an order via WhatsApp or our website.</li>
              <li><strong className="text-dark-gray">Order Details:</strong> Products ordered, quantity, and price information.</li>
              <li><strong className="text-dark-gray">Usage Data:</strong> Information about how you browse and interact with our website (pages visited, time spent, device type).</li>
              <li><strong className="text-dark-gray">Communication:</strong> Messages you send us via WhatsApp, email, or our contact form.</li>
            </ul>
          </div>

          {/* How We Use Your Information */}
          <div className="bg-premium-bg rounded-2xl p-8 border border-light-gray/20">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="text-royal-blue" size={28} />
              <h2 className="text-2xl font-playfair font-bold text-dark-gray">How We Use Your Information</h2>
            </div>
            <ul className="space-y-3 text-gray-500">
              <li className="flex items-start gap-3"><UserCheck size={18} className="text-royal-blue mt-0.5 flex-shrink-0" /><span>To process and fulfill your orders.</span></li>
              <li className="flex items-start gap-3"><UserCheck size={18} className="text-royal-blue mt-0.5 flex-shrink-0" /><span>To send order confirmations and delivery updates via WhatsApp.</span></li>
              <li className="flex items-start gap-3"><UserCheck size={18} className="text-royal-blue mt-0.5 flex-shrink-0" /><span>To respond to your queries and provide customer support.</span></li>
              <li className="flex items-start gap-3"><UserCheck size={18} className="text-royal-blue mt-0.5 flex-shrink-0" /><span>To improve our website, products, and services.</span></li>
              <li className="flex items-start gap-3"><UserCheck size={18} className="text-royal-blue mt-0.5 flex-shrink-0" /><span>To send promotional offers (only if you have opted in).</span></li>
            </ul>
          </div>

          {/* Data Security */}
          <div className="bg-premium-bg rounded-2xl p-8 border border-light-gray/20">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="text-royal-blue" size={28} />
              <h2 className="text-2xl font-playfair font-bold text-dark-gray">Data Security</h2>
            </div>
            <p className="text-gray-500 leading-relaxed">
              We take the security of your personal data seriously. We do not sell, rent, or trade your personal information to third parties. Your data is only shared with courier services strictly for the purpose of order delivery. All communications via WhatsApp are end-to-end encrypted.
            </p>
          </div>

          {/* Your Rights */}
          <div className="bg-premium-bg rounded-2xl p-8 border border-light-gray/20">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="text-royal-blue" size={28} />
              <h2 className="text-2xl font-playfair font-bold text-dark-gray">Your Rights</h2>
            </div>
            <ul className="space-y-3 text-gray-500">
              <li className="flex items-start gap-3"><UserCheck size={18} className="text-royal-blue mt-0.5 flex-shrink-0" /><span>You have the right to request access to the personal data we hold about you.</span></li>
              <li className="flex items-start gap-3"><UserCheck size={18} className="text-royal-blue mt-0.5 flex-shrink-0" /><span>You can request correction or deletion of your personal information at any time.</span></li>
              <li className="flex items-start gap-3"><UserCheck size={18} className="text-royal-blue mt-0.5 flex-shrink-0" /><span>You may opt out of promotional communications at any time by messaging us on WhatsApp.</span></li>
            </ul>
          </div>

          {/* Cookies */}
          <div className="bg-premium-bg rounded-2xl p-8 border border-light-gray/20">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="text-royal-blue" size={28} />
              <h2 className="text-2xl font-playfair font-bold text-dark-gray">Cookies</h2>
            </div>
            <p className="text-gray-500 leading-relaxed">
              Our website may use basic cookies to improve your browsing experience (e.g., remembering your cart items). We do not use tracking cookies for advertising purposes. By continuing to use our website, you consent to the use of necessary cookies.
            </p>
          </div>

          {/* Changes to Policy */}
          <div className="p-6 border border-royal-blue/20 rounded-2xl bg-royal-blue/5">
            <p className="text-gray-500 text-sm leading-relaxed">
              <strong className="text-dark-gray">Policy Updates:</strong> We may update this privacy policy from time to time. Any significant changes will be communicated via our website or WhatsApp. Continued use of our services after changes constitutes your acceptance of the updated policy.
            </p>
          </div>

          {/* Contact */}
          <div className="text-center py-8 border-t border-light-gray/20">
            <p className="text-gray-500 mb-4">Have privacy concerns or questions?</p>
            <a href="https://wa.me/923710132188" target="_blank" rel="noopener noreferrer" className="btn-premium inline-flex items-center gap-2">
              <Phone size={16} /> Contact Us on WhatsApp
            </a>
          </div>

          {/* Back Links */}
          <div className="flex gap-6 justify-center text-sm">
            <Link to="/shipping-policy" className="text-royal-blue hover:underline">← Shipping Policy</Link>
            <Link to="/return-exchange" className="text-royal-blue hover:underline">← Return &amp; Exchange</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
