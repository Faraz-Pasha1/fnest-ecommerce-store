import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus, ShoppingCart } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { motion, AnimatePresence } from 'framer-motion';

const QuickViewModal = () => {
  const { quickViewProduct, setQuickViewProduct, addToCart } = useShop();
  const [qty, setQty] = useState(0);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedSku, setSelectedSku] = useState(null);

  useEffect(() => {
    if (quickViewProduct?.hasVariants) {
      setSelectedType(quickViewProduct.variants?.types ? quickViewProduct.variants.types[0] : null);
      setSelectedSku(quickViewProduct.variants?.skus ? quickViewProduct.variants.skus[0] : null);
    } else {
      setSelectedType(null);
      setSelectedSku(null);
    }
    setQty(0);
  }, [quickViewProduct]);

  if (!quickViewProduct) return null;

  const handleClose = () => {
    setQuickViewProduct(null);
    setQty(0);
  };

  const currentPrice = quickViewProduct.hasVariants && selectedType && quickViewProduct.variants.details[selectedType] 
    ? quickViewProduct.variants.details[selectedType].price 
    : quickViewProduct.price;

  const currentItems = quickViewProduct.hasVariants && selectedType && quickViewProduct.variants.details[selectedType]?.items 
    ? quickViewProduct.variants.details[selectedType].items 
    : quickViewProduct.insideBag;

  const displayImage = quickViewProduct.hasVariants && selectedType && quickViewProduct.variants.details[selectedType]?.image
    ? quickViewProduct.variants.details[selectedType].image
    : quickViewProduct.image;

  const handleAddToCart = () => {
    addToCart({ ...quickViewProduct, price: currentPrice, selectedType, selectedSku }, qty === 0 ? 1 : qty);
    setQty(0);
    handleClose();
  };

  const insideBagTags = currentItems ? currentItems.split(',').map(i => i.trim()) : [];
  const productIngredients = quickViewProduct.ingredients ? quickViewProduct.ingredients.split(',').map(i => i.trim()) : [];
  const displayIngredients = productIngredients.length > 0 ? productIngredients : insideBagTags;

  const bestUseForTags = quickViewProduct.bestUseFor ? quickViewProduct.bestUseFor.split(',').map(i => i.trim()) : [];

  return (
    <AnimatePresence>
      {quickViewProduct && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-1 md:p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-7xl max-h-[95vh] overflow-y-auto flex flex-col md:flex-row shadow-2xl"
          >
            <button 
              onClick={handleClose}
              className="absolute top-2 right-2 md:top-4 md:right-4 z-[70] bg-white/80 backdrop-blur-sm md:bg-transparent rounded-full p-2 md:p-0 text-dark-gray hover:text-dark-maroon transition-colors shadow-md md:shadow-none"
            >
              <X size={24} />
            </button>

            {/* Left: Image */}
            <div className="w-full md:w-1/2 p-4 md:p-8 bg-premium-bg flex items-center justify-center">
              <img 
                src={displayImage} 
                alt={quickViewProduct.title}
                className="w-full h-auto object-cover shadow-lg"
              />
            </div>

            {/* Right: Details */}
            <div className="w-full md:w-1/2 p-4 md:p-12 flex flex-col justify-start">
              <div className="space-y-6">
                <div>
                  <h3 className="text-[28px] md:text-3xl font-playfair font-bold text-dark-gray mb-2">{quickViewProduct.title}</h3>
                  <p className="text-olive-green text-[14px] md:text-sm uppercase tracking-widest font-semibold">{quickViewProduct.subtitle || 'Premium Collection'}</p>
                </div>

                <div className="flex items-center space-x-4">
                  <span className="text-2xl font-bold text-royal-blue">Rs.{currentPrice}</span>
                  {quickViewProduct.wasPrice && (
                    <span className="text-gray-400 line-through text-lg">Rs.{quickViewProduct.wasPrice}</span>
                  )}
                </div>

                {/* Variants Selection */}
                {quickViewProduct.hasVariants && (
                  <div className="space-y-4 pt-2 border-t border-light-gray/20">
                    {quickViewProduct.variants.types && (
                      <div className="flex flex-col gap-2">
                        <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Type</span>
                        <div className="flex flex-wrap gap-2">
                          {quickViewProduct.variants.types.map(type => (
                            <button 
                              key={type}
                              onClick={() => setSelectedType(type)}
                              className={`text-xs uppercase tracking-widest px-4 py-2 border transition-colors ${selectedType === type ? 'border-royal-blue bg-royal-blue text-white shadow-md' : 'border-light-gray/30 text-dark-gray hover:border-royal-blue/50'}`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                    {quickViewProduct.variants.skus && (
                      <div className="flex flex-col gap-2">
                        <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">SKU</span>
                        <div className="flex flex-wrap gap-2">
                          {quickViewProduct.variants.skus.map(sku => (
                            <button 
                              key={sku}
                              onClick={() => setSelectedSku(sku)}
                              className={`text-xs uppercase tracking-widest px-4 py-2 border transition-colors ${selectedSku === sku ? 'border-royal-blue bg-royal-blue text-white shadow-md' : 'border-light-gray/30 text-dark-gray hover:border-royal-blue/50'}`}
                            >
                              {sku}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <div className="space-y-4">
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Product Code: <span className="text-dark-gray font-bold">{quickViewProduct.code || 'SKU-001'}</span></p>
                  <p className="text-gray-600 leading-relaxed text-xs">
                    {quickViewProduct.description || 'N/A.'}
                  </p>
                  
                  {/* Tags Grouped */}
                  <div className="flex flex-col gap-3 pt-2">
                    {quickViewProduct.netWeight && quickViewProduct.netWeight !== "N/A" && (
                      <div className="flex flex-wrap gap-2 items-center">
                        <span className="text-sm text-gray-500 uppercase tracking-widest font-bold mr-2">Weight</span>
                        <span className="inline-block px-3 py-1 bg-premium-bg border border-light-gray/20 text-xs text-dark-gray rounded-sm tracking-widest font-semibold cursor-default">
                          {quickViewProduct.netWeight}
                        </span>
                      </div>
                    )}

                    {displayIngredients.length > 0 && (
                      <div className="flex flex-col gap-1.5">
                        <span className="text-sm text-gray-500 tracking-widest font-bold">Ingredients</span>
                        <div className="flex flex-wrap gap-1.5">
                          {displayIngredients.map((tag, idx) => (
                            <span key={idx} className="inline-block px-3 py-1 bg-premium-bg border border-light-gray/20 text-[10px] text-dark-gray rounded-sm uppercase tracking-wider font-semibold cursor-default">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {bestUseForTags.length > 0 && (
                      <div className="flex flex-col gap-1.5 pt-2">
                        <span className="text-sm text-gray-500 tracking-widest font-bold">Best For</span>
                        <div className="flex flex-wrap gap-1.5">
                          {bestUseForTags.map((tag, idx) => (
                            <span key={idx} className="inline-block px-3 py-1 bg-premium-bg border border-light-gray/20 text-[10px] text-dark-gray rounded-sm uppercase tracking-wider font-semibold cursor-default">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="pt-2 flex items-center space-x-6">
                    <a href={quickViewProduct.blogLink || "/blog"} className="text-xs text-royal-blue uppercase tracking-widest font-bold hover:text-dark-maroon transition-colors underline">
                      Read Our Blog
                    </a>
                    <Link onClick={handleClose} to={`/product/${quickViewProduct.id}`} className="text-xs text-royal-blue uppercase tracking-widest font-bold hover:text-dark-maroon transition-colors underline">
                      View Full Details
                    </Link>
                  </div>
                </div>

                <div className="pt-2 border-t border-light-gray/20">
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center border border-light-gray rounded-none px-4 py-2">
                      <button 
                        onClick={() => setQty(Math.max(0, qty - 1))}
                        className="text-dark-gray hover:text-royal-blue disabled:opacity-30"
                        disabled={qty <= 0}
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-12 text-center font-semibold">{qty}</span>
                      <button 
                        onClick={() => setQty(qty + 1)}
                        className="text-dark-gray hover:text-royal-blue"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    
                    <button 
                      onClick={handleAddToCart}
                      className="btn-premium flex-grow flex items-center justify-center pb-2 space-x-3"
                    >
                      <ShoppingCart size={18} />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>

                </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default QuickViewModal;
