import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import QuickViewModal from '../shared/QuickViewModal';
import WhatsAppButton from '../shared/WhatsAppButton';
import ToastNotification from '../shared/ToastNotification';
import ScrollToTop from '../../utils/ScrollToTop';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-premium-bg">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <QuickViewModal />
      <WhatsAppButton />
      <ToastNotification />
    </div>
  );
};

export default Layout;
