import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: 'Other'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      if (login(formData.email, formData.password)) {
        navigate('/');
      }
    } else {
      if (signup(formData)) {
        navigate('/');
      }
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-7xl h-full max-h-[85vh] flex bg-white rounded-none shadow-2xl overflow-hidden relative">
        {/* Close Button */}
        <button 
          onClick={() => navigate('/')}
          className="absolute top-8 right-8 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white md:text-dark-gray border border-white/20 md:border-dark-gray/10 rounded-none flex items-center justify-center transition-all duration-300"
        >
          <X size={24} />
        </button>

        {/* Left Side: Image */}
        <div className="hidden lg:block w-1/2 relative bg-dark-gray overflow-hidden">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
            src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=2000&auto=format&fit=crop" 
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-gray/90 via-transparent to-transparent flex flex-col justify-end p-20 text-white">
            <h2 className="text-5xl font-playfair font-bold mb-6 tracking-tight">The Essence of Luxury</h2>
            <p className="text-royal-blue text-sm uppercase tracking-[0.4em] font-bold">Exclusive Access To Our Private Collections</p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:w-1/2 p-12 md:p-24 overflow-y-auto">
          <div className="max-w-md mx-auto">
            <div className="mb-16">
               <h1 className="text-3xl font-playfair font-bold text-royal-blue mb-4 tracking-tighter">FNEST.</h1>
               <h3 className="text-4xl font-playfair font-bold text-dark-gray mb-3">
                 {isLogin ? 'Sign In' : 'Join Us'}
               </h3>
               <p className="text-gray-400 text-sm font-light">
                 {isLogin 
                   ? 'Enter your details to continue your premium experience.' 
                   : 'Begin your journey with the world\'s finest lifestyle gallery.'}
               </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <AnimatePresence mode="wait">
                {!isLogin && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="grid grid-cols-2 gap-6"
                  >
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">First Name</label>
                       <input 
                         type="text" 
                         required 
                         className="w-full bg-premium-bg border-none px-5 py-4 text-sm focus:ring-1 focus:ring-royal-blue rounded-none"
                         value={formData.firstName}
                         onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Last Name</label>
                       <input 
                         type="text" 
                         required 
                         className="w-full bg-premium-bg border-none px-5 py-4 text-sm focus:ring-1 focus:ring-royal-blue rounded-none"
                         value={formData.lastName}
                         onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                       />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-2">
                 <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Email Address</label>
                 <div className="relative">
                   <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                   <input 
                     type="email" 
                     required 
                     className="w-full bg-premium-bg border-none px-14 py-4 text-sm focus:ring-1 focus:ring-royal-blue rounded-none"
                     value={formData.email}
                     onChange={(e) => setFormData({...formData, email: e.target.value})}
                   />
                 </div>
              </div>

              <div className="space-y-2">
                 <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Password</label>
                 <div className="relative">
                   <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                   <input 
                     type={showPassword ? "text" : "password"} 
                     required 
                     className="w-full bg-premium-bg border-none px-14 py-4 text-sm focus:ring-1 focus:ring-royal-blue rounded-none"
                     value={formData.password}
                     onChange={(e) => setFormData({...formData, password: e.target.value})}
                   />
                   <button 
                     type="button"
                     onClick={() => setShowPassword(!showPassword)}
                     className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300 hover:text-royal-blue"
                   >
                     {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                   </button>
                 </div>
              </div>

              <button type="submit" className="w-full btn-premium py-5 rounded-none flex items-center justify-center space-x-3 shadow-xl shadow-royal-blue/10">
                <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
                <ArrowRight size={20} />
              </button>

              <div className="relative pt-4">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-light-gray/20"></div></div>
                <div className="relative flex justify-center text-[10px] uppercase tracking-widest font-bold"><span className="px-6 bg-white text-gray-400">Luxury Connect</span></div>
              </div>

              <button type="button" className="w-full py-4 border border-light-gray/20 rounded-none flex items-center justify-center space-x-3 hover:bg-premium-bg transition-all">
                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-5 h-5" alt="Google" />
                <span className="text-xs uppercase tracking-widest font-bold text-dark-gray">Connect with Google</span>
              </button>
            </form>

            <div className="mt-16 text-center">
              <p className="text-sm text-gray-400 font-light">
                {isLogin ? "New to FNEST?" : "Already a member?"}
                <button 
                  onClick={() => setIsLogin(!isLogin)}
                  className="ml-2 text-royal-blue font-bold uppercase tracking-widest text-[10px] border-b-2 border-royal-blue/30 hover:border-royal-blue transition-all"
                >
                  {isLogin ? 'Create Account' : 'Sign In Now'}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
