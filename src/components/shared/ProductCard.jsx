import React, { useState } from 'react';
import { ShoppingCart, Eye, Plus, Minus } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { addToCart, setQuickViewProduct, cart } = useShop();
  
  const [localQty, setLocalQty] = useState(0);

  // Variants state
  const [selectedType, setSelectedType] = useState(product.hasVariants && product.variants?.types ? product.variants.types[0] : null);
  const [selectedSku, setSelectedSku] = useState(product.hasVariants && product.variants?.skus ? product.variants.skus[0] : null);



  const currentPrice = product.hasVariants && selectedType && product.variants.details[selectedType] 
    ? product.variants.details[selectedType].price 
    : product.price;

  const currentItems = product.hasVariants && selectedType && product.variants.details[selectedType]?.items 
    ? product.variants.details[selectedType].items 
    : product.insideBag;

  const displayImage = product.hasVariants && selectedType && product.variants.details[selectedType]?.image
    ? product.variants.details[selectedType].image
    : product.image;

  const displayHoverImage = product.hasVariants && selectedType && product.variants.details[selectedType]?.hoverImage
    ? product.variants.details[selectedType].hoverImage
    : product.hoverImage;

  const insideBagTags = currentItems ? currentItems.split(',').map(i => i.trim()) : [];
  const bestUseForTags = product.bestUseFor ? product.bestUseFor.split(',').map(i => i.trim()) : [];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="product-card group border border-dark-gray/10 overflow-hidden bg-white shadow-sm hover:border-royal-blue/30 transition-all duration-500 flex flex-col h-[400px] md:h-full"
    >
      <Link to={`/product/${product.id}`} className="relative aspect-square overflow-hidden bg-premium-bg flex-shrink-0 block">
        {/* Hover (secondary) image — sits beneath, always visible */}
        {displayHoverImage && (
          <img
            src={displayHoverImage}
            alt={`${product.title} alternate view`}
            className="absolute inset-0 w-full h-full object-cover scale-105"
          />
        )}
        {/* Primary image — fades out on hover to reveal hoverImage */}
        <img 
          src={displayImage} 
          alt={product.title} 
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:opacity-0 group-hover:scale-105"
        />
        
        {/* Overlay Actions */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0 z-20">
          {/* <button 
            onClick={(e) => { e.preventDefault(); addToCart({ ...product, price: currentPrice, selectedType, selectedSku }, localQty === 0 ? 1 : localQty); setLocalQty(0); }}
            className="w-10 h-10 bg-white/10 backdrop-blur-md text-white hover:bg-green-700 hover:text-white flex items-center justify-center transition-all duration-300 shadow-xl border border-white/20"
            title="Add to Cart"
          >
            <ShoppingCart size={18} />
          </button> */}
          <button 
            onClick={(e) => { e.preventDefault(); setQuickViewProduct(product); }}
            className="w-10 h-10 bg-white/10 backdrop-blur-md text-white hover:bg-green-700 hover:text-white flex items-center justify-center transition-all duration-300 shadow-xl border border-white/20"
            title="Quick View"
          >
            <Eye size={18} />
          </button>
        </div>
      </Link>

      <div className="p-4 space-y-3 flex flex-col flex-grow">
        <div className="flex flex-col space-y-1">
          <Link to={`/product/${product.id}`}>
            <h3 className="text-[14px] md:text-sm font-medium font-poppins text-dark-gray group-hover:text-royal-blue transition-colors duration-300 line-clamp-2 leading-snug">
              {product.title}
            </h3>
          </Link>
          <div className="flex items-center space-x-2 pt-1">
            <p className="text-[12px] md:text-lg font-semibold text-dark-gray">Rs. {currentPrice}</p>
            {product.wasPrice && (
              <p className="text-[10px] md:text-xs text-gray-400 line-through">Rs. {product.wasPrice}</p>
            )}
          </div>
        </div>





        <div className="pt-3 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2 mt-auto">
          <div className="flex items-center justify-between bg-premium-bg rounded-none p-0.5 border border-light-gray/20 h-8 md:h-10 w-full md:w-auto">
            <button 
              onClick={(e) => { e.preventDefault(); setLocalQty(Math.max(0, localQty - 1)); }}
              className="px-2 md:px-3 text-gray-500 hover:text-royal-blue disabled:opacity-30 transition-colors h-full flex items-center"
              disabled={localQty <= 0}
            >
              <Minus size={12} />
            </button>
            <span className="w-4 md:w-6 text-center text-[10px] md:text-xs font-bold text-dark-gray">{localQty}</span>
            <button 
              onClick={(e) => { e.preventDefault(); setLocalQty(localQty + 1); }}
              className="px-2 md:px-3 text-gray-500 hover:text-royal-blue transition-colors h-full flex items-center"
            >
              <Plus size={12} />
            </button>
          </div>

          <button 
            onClick={(e) => { 
              e.preventDefault(); 
              addToCart({ ...product, price: currentPrice, selectedType, selectedSku }, localQty === 0 ? 1 : localQty); 
              setLocalQty(0); 
            }}
            className="w-full md:w-auto px-2 md:px-6 h-8 md:h-10 bg-dark-gray text-white rounded-none uppercase tracking-widest font-semibold text-[10px] md:text-[13px] hover:bg-green-700 shadow-sm hover:shadow-green-700/20 transition-all duration-300 transform active:scale-95 whitespace-nowrap flex items-center justify-center"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
