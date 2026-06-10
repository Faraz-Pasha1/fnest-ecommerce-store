import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Trash2, Plus, Minus, Send, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useShop();
  const WHATSAPP_NUMBER = '923710132188'; // Pakistan country code 92

  const [fullName, setFullName] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [orderError, setOrderError] = useState('');

  const SHIPPING_CHARGE = 200;
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const grandTotal = subtotal + SHIPPING_CHARGE;
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleWhatsAppOrder = () => {
    if (cart.length === 0) return;

    if (!fullName.trim() || !shippingAddress.trim()) {
      setOrderError('Please enter your full name and shipping address to proceed.');
      return;
    }
    setOrderError('');

    const orderId = 'ORDER ID: ' + Math.floor(100000 + Math.random() * 900000);

    let message = `*FNEST ORDER* [${orderId}]\n\n`;
    message += `*Customer Details:*\n`;
    message += `Name: ${fullName}\n`;
    message += `Address: ${shippingAddress}\n\n`;
    message += `*Order Items:*\n\n`;
    
    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.title}*\n`;
      message += `   - Code: ${item.code}\n`;
      message += `   - Qty: ${item.quantity}\n`;
      message += `   - Price: Rs. ${item.price}\n\n`;
    });

    message += `*Subtotal:* Rs. ${subtotal}\n`;
    message += `*Shipping:* Rs. ${SHIPPING_CHARGE}\n`;
    message += `*Total Amount:* Rs. ${grandTotal}\n\n`;
    message += `Please confirm availability. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
    clearCart();
  };

  return (
    <div className="cart-page min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-dark-gray flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1591341731326-faecfb665126?q=80&w=2000&auto=format&fit=crop)' }}
        />
        <div className="relative text-center z-10 px-4">
          <p className="text-green-400 text-xs uppercase tracking-[0.5em] font-bold mb-4">Your Selection</p>
          <h1 className="text-4xl md:text-7xl font-playfair font-bold text-white tracking-tighter">Shopping Bag</h1>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          {cart.length === 0 ? (
            <div className="text-center py-32 bg-premium-bg space-y-8 rounded-3xl">
               <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto shadow-2xl">
                 <ShoppingBag className="text-gray-300" size={40} />
               </div>
               <h3 className="text-3xl font-playfair font-bold text-dark-gray">Your bag is empty.</h3>
               <p className="text-gray-500 max-w-sm mx-auto">Discover our premium collections and find something exceptional to add to your cart.</p>
               <Link to="/shop" className="btn-premium inline-block">Continue Shopping</Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Product List */}
              <div className="lg:col-span-2 space-y-4">
                <AnimatePresence>
                  {cart.map((item) => (
                    <motion.div 
                      key={item.id}
                      layout
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="flex flex-row items-center gap-3 md:gap-5 p-2 md:p-5 bg-premium-bg rounded-2xl border border-light-gray/20 hover:border-royal-blue/30 transition-all duration-300"
                    >
                      <div className="w-20 h-20 overflow-hidden rounded-xl shadow-lg flex-shrink-0">
                         <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                      
                      <div className="flex-grow min-w-0">
                        <div className="flex justify-between items-start gap-2">
                           <div className="min-w-0">
                             <h3 className="text-[16px] md:text-sm md:text-base font-playfair font-bold text-dark-gray leading-tight">{item.title}</h3>
                             <p className="text-[13px] md:text-sm text-gray-400 uppercase tracking-widest ">{item.code}</p>
                             <p className="text-[14px] md:text-sm font-semibold text-dark-gray ">Rs. {item.price}</p>
                           </div>
                           <div className="flex items-center gap-3 flex-shrink-0">
                             <div className="flex items-center space-x-2 bg-white rounded-full px-3 py-1.5 shadow-sm border border-light-gray/10">
                               <button 
                                 onClick={() => updateQuantity(item.id, -1)}
                                 className="text-gray-400 hover:text-royal-blue"
                               >
                                 <Minus size={13} />
                               </button>
                               <span className="w-5 text-center text-sm font-bold font-playfair">{item.quantity}</span>
                               <button 
                                 onClick={() => updateQuantity(item.id, 1)}
                                 className="text-gray-400 hover:text-royal-blue"
                               >
                                 <Plus size={13} />
                               </button>
                             </div>
                             <button 
                               onClick={() => removeFromCart(item.id)}
                               className="text-gray-400 hover:text-dark-maroon transition-colors"
                             >
                               <Trash2 size={16} />
                             </button>
                           </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="sticky top-32 bg-dark-gray text-white p-5 rounded-3xl shadow-2xl space-y-5">
                   <h3 className="text-2xl font-playfair text-center font-bold border-b border-white/10 pb-4">Order Summary</h3>
                   
                   <div className="space-y-4">
                      {cart.map((item) => (
                         <div key={item.id} className="flex justify-between items-start gap-3">
                           <div className="flex-1 min-w-0">
                             <p className="text-gray-200 text-sm font-semibold leading-tight">{item.title}</p>
                             <p className="text-gray-300 text-xs mt-0.5">Rs. {item.price} x {item.quantity}</p>
                           </div>
                           <span className="text-white font-bold text-sm whitespace-nowrap">Rs. {item.price * item.quantity}</span>
                         </div>
                      ))}
                      
                      <div className="border-t border-white/10 pt-4 space-y-2">
                        <div className="flex justify-between text-gray-300 text-xs uppercase tracking-widest">
                          <span>Delivery Fee <span className="normal-case text-[12px] text-gray-300 ml-1">(3-5 days)</span></span>
                          <span className="text-green-400 font-bold">Rs. {SHIPPING_CHARGE}</span>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                         <span className="font-playfair text-base italic text-gray-300">Grand Total</span>
                         <span className="text-2xl font-bold text-white tracking-tighter">Rs. {grandTotal}</span>
                      </div>
                   </div>

                   <div className="space-y-4 pt-4 border-t border-white/10">
                     <div>
                       <label className="block text-xs uppercase tracking-widest text-gray-300 mb-2">Full Name</label>
                       <input 
                         type="text" 
                         value={fullName}
                         onChange={(e) => setFullName(e.target.value)}
                         className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-green-400 transition-colors"
                         placeholder="Enter your name"
                       />
                     </div>
                     <div>
                       <label className="block text-xs uppercase tracking-widest text-gray-300 mb-2">Shipping Address</label>
                       <textarea 
                         value={shippingAddress}
                         onChange={(e) => setShippingAddress(e.target.value)}
                         className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-green-400 transition-colors resize-none"
                         rows="3"
                         placeholder="Enter complete shipping address"
                       ></textarea>
                     </div>
                     
                     {orderError && <p className="text-red-400 text-xs">{orderError}</p>}
                   </div>

                   <div className="space-y-3">
                     <button 
                       onClick={handleWhatsAppOrder}
                       className="w-full bg-green-600 hover:bg-white hover:text-royal-blue py-5 rounded-full flex items-center justify-center space-x-3 uppercase tracking-[0.25em] font-bold text-xs transition-all duration-500 shadow-xl"
                     >
                       <Send size={16} />
                       <span>Order via WhatsApp</span>
                     </button>
                     <p className="text-[9px] text-gray-500 text-center uppercase tracking-widest opacity-60">
                        Secure Checkout via Direct Message
                     </p>
                   </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Cart;
