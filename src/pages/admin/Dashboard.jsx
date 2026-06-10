import React, { useState } from 'react';
import { LayoutDashboard, Package, FolderPlus, LogOut, Upload, X, CheckCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';

const AdminDashboard = () => {
  const { user, isAdmin, logout } = useAuth();
  const [success, setSuccess] = useState(false);
  const [images, setImages] = useState([]);

  const [productData, setProductData] = useState({
    title: '',
    subtitle: '',
    priceNow: '',
    priceWas: '',
    category: 'Watches',
    description: ''
  });

  if (!isAdmin) {
    return <Navigate to="/login" replace />;
  }

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (images.length + files.length <= 6) {
      setImages([...images, ...files]);
    } else {
      alert("Maximum 6 images allowed");
    }
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saving product:", { ...productData, images });
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
    // Reset form
    setProductData({
      title: '',
      subtitle: '',
      priceNow: '',
      priceWas: '',
      category: 'Watches',
      description: ''
    });
    setImages([]);
  };

  return (
    <div className="flex min-h-[90vh] bg-premium-bg">
      {/* Sidebar */}
      <aside className="w-64 bg-dark-gray text-white p-8 space-y-12">
        <div>
          <h2 className="text-xl font-bold uppercase tracking-widest border-b border-white/10 pb-4 mb-8">Admin Portal</h2>
          <nav className="space-y-4">
            <button className="flex items-center space-x-3 text-sm text-royal-blue font-bold uppercase tracking-widest bg-white/5 w-full p-4">
              <LayoutDashboard size={18} />
              <span>Dashboard</span>
            </button>
            <button className="flex items-center space-x-3 text-sm text-gray-400 hover:text-white transition-colors uppercase tracking-widest p-4 w-full text-left">
              <Package size={18} />
              <span>Products</span>
            </button>
            <button className="flex items-center space-x-3 text-sm text-gray-400 hover:text-white transition-colors uppercase tracking-widest p-4 w-full text-left">
              <FolderPlus size={18} />
              <span>Categories</span>
            </button>
          </nav>
        </div>
        <button onClick={logout} className="flex items-center space-x-3 text-sm text-dark-maroon hover:text-red-500 font-bold uppercase tracking-widest p-4 w-full">
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-12">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12 flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-playfair font-bold text-dark-gray">Upload New Product</h1>
              <p className="text-gray-400 uppercase tracking-widest text-xs mt-2">Manage your luxury inventory</p>
            </div>
            {success && (
              <div className="flex items-center space-x-2 text-green-600 bg-green-50 px-6 py-3 border border-green-200 animate-fade-in">
                <CheckCircle size={18} />
                <span className="text-xs uppercase tracking-widest font-bold">Product Saved Successfully!</span>
              </div>
            )}
          </header>

          <form onSubmit={handleSubmit} className="bg-white p-12 shadow-xl space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Product Title</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-premium-bg border-none px-4 py-3 text-sm focus:ring-1 focus:ring-royal-blue"
                  value={productData.title}
                  onChange={(e) => setProductData({...productData, title: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Subtitle / Badge</label>
                <input 
                  type="text" 
                  className="w-full bg-premium-bg border-none px-4 py-3 text-sm focus:ring-1 focus:ring-royal-blue"
                  value={productData.subtitle}
                  onChange={(e) => setProductData({...productData, subtitle: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Price (Now)</label>
                <input 
                  type="number" 
                  required
                  className="w-full bg-premium-bg border-none px-4 py-3 text-sm focus:ring-1 focus:ring-royal-blue"
                  value={productData.priceNow}
                  onChange={(e) => setProductData({...productData, priceNow: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Price (Was)</label>
                <input 
                  type="number" 
                  className="w-full bg-premium-bg border-none px-4 py-3 text-sm focus:ring-1 focus:ring-royal-blue"
                  value={productData.priceWas}
                  onChange={(e) => setProductData({...productData, priceWas: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Category</label>
                <select 
                  className="w-full bg-premium-bg border-none px-4 py-3 text-sm focus:ring-1 focus:ring-royal-blue"
                  value={productData.category}
                  onChange={(e) => setProductData({...productData, category: e.target.value})}
                >
                  <option>Watches</option>
                  <option>Bags</option>
                  <option>Clothing</option>
                  <option>Accessories</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Description</label>
              <textarea 
                rows="4"
                className="w-full bg-premium-bg border-none px-4 py-3 text-sm focus:ring-1 focus:ring-royal-blue"
                value={productData.description}
                onChange={(e) => setProductData({...productData, description: e.target.value})}
              />
            </div>

            {/* Image Upload */}
            <div className="space-y-4">
              <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Product Gallery (Max 6)</label>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {images.map((img, idx) => (
                  <div key={idx} className="relative aspect-square bg-premium-bg border border-light-gray/20">
                    <img src={URL.createObjectURL(img)} className="w-full h-full object-cover" alt="upload" />
                    <button 
                      onClick={() => removeImage(idx)}
                      className="absolute -top-2 -right-2 bg-dark-maroon text-white rounded-full p-1 shadow-lg"
                    >
                      <X size={12} />
                    </button>
                  </div>
                ))}
                {images.length < 6 && (
                  <label className="aspect-square bg-premium-bg border-2 border-dashed border-gray-200 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
                    <Upload className="text-gray-300" size={24} />
                    <span className="text-[10px] uppercase tracking-widest font-bold text-gray-300 mt-2">Upload</span>
                    <input type="file" className="hidden" multiple accept="image/*" onChange={handleImageUpload} />
                  </label>
                )}
              </div>
            </div>

            <div className="pt-8 border-t border-light-gray/20 text-right">
               <button type="submit" className="btn-premium px-16">
                 Publish Product
               </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
