import React from 'react';
import { useShop } from '../../context/ShopContext';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const ToastNotification = () => {
  const { notification } = useShop();

  return (
    <AnimatePresence>
      {notification && (
        <motion.div
          initial={{ opacity: 0, x: 50, y: 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 50, y: 0 }}
          className="fixed top-24 right-4 z-[100] flex items-center space-x-3 bg-white px-4 py-3 shadow-lg border border-light-gray/20 rounded-md"
        >
          <CheckCircle2 size={20} className="text-green-500" />
          <span className="text-sm font-semibold text-dark-gray">{notification}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ToastNotification;
