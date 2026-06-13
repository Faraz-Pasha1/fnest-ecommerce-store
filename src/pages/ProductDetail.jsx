import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useShop } from '../context/ShopContext';
import { ShoppingCart, Star, ArrowLeft, Plus, Minus, Check, Wallet, ShieldCheck, ThumbsUp, Truck, RefreshCw, BadgeCheck, MessageCircle, User } from 'lucide-react';
import { PRODUCTS1 } from '../components/home/SplitSection1';
import { PRODUCTS2 } from '../components/home/SplitSection2';
import { PRODUCTS3 } from '../components/home/SplitSection3';
import { PRODUCTS4 } from '../components/home/SplitSection4';

const ALL_PRODUCTS = [...PRODUCTS1, ...PRODUCTS2, ...PRODUCTS3, ...PRODUCTS4];

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart, updateQuantity, cart } = useShop();

  // In a real app, you'd fetch the product by ID here. 
  const foundProduct = ALL_PRODUCTS.find(p => p.id === parseInt(id));
  
  const product = foundProduct || {
    id: parseInt(id) || 1,
    title: "Premium Product Name",
    subtitle: "Exclusive Collection",
    price: 1500,
    wasPrice: 1800,
    code: `SKU-${id}00`,
    description: "Experience the ultimate in luxury and quality with this premium item. Crafted with meticulous attention to detail, it stands out with its exceptional design and unmatched durability. Perfect for those who appreciate the finer things in life.",
    longDescription: "Our premium collection represents the pinnacle of craftsmanship. Every piece is carefully selected to ensure the highest standards. This product features state-of-the-art materials that provide both comfort and longevity. Whether for personal use or as a distinguished gift, it delivers satisfaction guaranteed.",
    image: "/images/placeholder.jpg",
    hoverImage: "/images/placeholder-hover.jpg",
    category: "Premium",
    features: [
      "100% Authentic Material",
      "Hand-crafted precision",
      "Sustainable packaging",
      "Extended warranty"
    ]
  };

  const cartItem = cart.find(item => item.id === product.id);
  const qtyInCart = cartItem ? cartItem.quantity : 0;

  const [selectedType, setSelectedType] = useState(null);
  const [selectedSku, setSelectedSku] = useState(null);
  const [localQty, setLocalQty] = useState(0);

  // Comments state
  const [comments, setComments] = useState([]);
  const [commentName, setCommentName] = useState('');
  const [commentText, setCommentText] = useState('');
  const [commentRating, setCommentRating] = useState(5);

  // Load comments
  useEffect(() => {
    const savedComments = localStorage.getItem(`product_${id}_comments`);
    if (savedComments) {
      try {
        setComments(JSON.parse(savedComments));
      } catch (e) {
        console.error("Failed to parse comments", e);
      }
    } else {
      setComments([]);
    }
  }, [id]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!commentName.trim() || !commentText.trim()) return;

    const newComment = {
      id: Date.now(),
      name: commentName,
      text: commentText,
      rating: commentRating,
      date: new Date().toLocaleDateString()
    };

    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    localStorage.setItem(`product_${id}_comments`, JSON.stringify(updatedComments));

    setCommentName('');
    setCommentText('');
    setCommentRating(5);
  };

  useEffect(() => {
    if (product?.hasVariants) {
      setSelectedType(product.variants?.types ? product.variants.types[0] : null);
      setSelectedSku(product.variants?.skus ? product.variants.skus[0] : null);
    } else {
      setSelectedType(null);
      setSelectedSku(null);
    }
  }, [product]);

  const currentPrice = product.hasVariants && selectedType && product.variants.details[selectedType] 
    ? product.variants.details[selectedType].price 
    : product.price;

  const currentItems = product.hasVariants && selectedType && product.variants.details[selectedType]?.items 
    ? product.variants.details[selectedType].items 
    : product.insideBag;

  const insideBagTags = currentItems ? currentItems.split(',').map(i => i.trim()) : [];
  const productIngredients = product.ingredients ? product.ingredients.split(',').map(i => i.trim()) : [];
  const displayIngredients = productIngredients.length > 0 ? productIngredients : insideBagTags;

  const bestUseForTags = product.bestUseFor ? product.bestUseFor.split(',').map(i => i.trim()) : [];

  const displayImage = product.hasVariants && selectedType && product.variants.details[selectedType]?.image
    ? product.variants.details[selectedType].image
    : product.image;

  const [selectedImage, setSelectedImage] = useState(displayImage);
  
  useEffect(() => {
    setSelectedImage(displayImage);
    window.scrollTo(0, 0);
  }, [id, displayImage]);

  const allImages = [displayImage, product.hoverImage].filter(Boolean);

  const TRUST_BADGES = [
    { icon: Wallet, title: "Cash on Delivery", desc: "Pay when you receive" },
    { icon: ShieldCheck, title: "Safe Product", desc: "100% secure packaging" },
    { icon: ThumbsUp, title: "100% Trust", desc: "Verified authentic items" },
    { icon: Truck, title: "Fast Delivery", desc: "Karachi within 3-5 days" },
    { icon: RefreshCw, title: "Easy Return", desc: "7-10 day replacement" },
    { icon: BadgeCheck, title: "Quality Product", desc: "Premium standards" }
  ];

  return (
    <div className="bg-white min-h-screen pt-24 pb-16">
      <div className="w-full px-[20px] md:px-[60px] max-w-[1800px] mx-auto">
        
        {/* Breadcrumb / Back Link */}
        <Link to="/" className="inline-flex items-center text-gray-500 hover:text-royal-blue transition-colors mb-8 text-sm">
          <ArrowLeft size={16} className="mr-2" />
          Back to Home
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Images Section */}
          <div className="space-y-4">
            <motion.div 
              key={selectedImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="aspect-square bg-premium-bg rounded-xl overflow-hidden relative shadow-sm border border-light-gray/20"
            >
              {selectedImage ? (
                <img src={selectedImage} alt={product.title} className="w-full h-full object-cover" />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <span className="text-xl font-playfair tracking-widest uppercase">Product Image {id}</span>
                </div>
              )}
            </motion.div>
            
            {allImages.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2">
                {allImages.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-300 ${selectedImage === img ? 'border-royal-blue' : 'border-transparent opacity-60 hover:opacity-100'}`}
                  >
                    <img src={img} alt={`${product.title} thumbnail ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col py-4"
          >
            <p className="text-royal-blue text-xs uppercase tracking-[0.3em] font-bold mb-2">
              {product.category}
            </p>
            <h1 className="text-3xl md:text-4xl font-playfair font-bold text-dark-gray mb-4">
              {product.title}
            </h1>
            
            {/* Star Rating Removed */}

            <div className="flex items-center space-x-3 mb-6 border-b border-gray-100 pb-6">
              <p className="text-2xl font-semibold text-green-600">Rs. {currentPrice}</p>
              {product.wasPrice && (
                <p className="text-lg text-gray-400 line-through">Rs. {product.wasPrice}</p>
              )}
            </div>

            {/* Variants Selection */}
            {product.hasVariants && (
              <div className="space-y-4 mb-6 border-b border-light-gray/20 pb-6">
                {product.variants.types && (
                  <div className="flex flex-col gap-2">
                    <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Type</span>
                    <div className="flex flex-wrap gap-2">
                      {product.variants.types.map(type => (
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
                {product.variants.skus && (
                  <div className="flex flex-col gap-2">
                    <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">SKU</span>
                    <div className="flex flex-wrap gap-2">
                      {product.variants.skus.map(sku => (
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

            <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Product Code: <span className="text-dark-gray font-bold">{product.code || 'SKU-001'}</span></p>

            <div className="mb-8 space-y-4">
              <h3 className="text-lg font-playfair font-bold text-dark-gray">Description</h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
              {product.longDescription && (
                <p className="text-gray-500 leading-relaxed text-sm">
                  {product.longDescription}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-4 mb-8 pt-4 border-t border-light-gray/20">
              {product.netWeight && product.netWeight !== "N/A" && (
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-sm text-gray-500 uppercase tracking-widest font-bold mr-2">Weight</span>
                  <span className="inline-block px-3 py-1 bg-premium-bg border border-light-gray/20 text-xs text-dark-gray rounded-sm tracking-widest font-semibold cursor-default">
                    {product.netWeight}
                  </span>
                </div>
              )}

              {displayIngredients.length > 0 && (
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-gray-500 uppercase tracking-widest font-bold">{product.bagLabel || 'Ingredients'}</span>
                  <div className="flex flex-wrap gap-1.5">
                    {displayIngredients.map((tag, idx) => (
                      <span key={idx} className="inline-block px-3 py-1 bg-premium-bg border border-light-gray/20 text-[13px] text-dark-gray rounded-sm capitalize tracking-wider cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {bestUseForTags.length > 0 && (
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-gray-500 uppercase tracking-widest font-bold">Best For</span>
                  <div className="flex flex-wrap gap-1.5">
                    {bestUseForTags.map((tag, idx) => (
                      <span key={idx} className="inline-block px-3 py-1 bg-premium-bg border border-light-gray/20 text-[13px] text-dark-gray rounded-sm capitalize tracking-wider cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {product.features && product.features.length > 0 && (
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-dark-gray uppercase tracking-wider mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 text-sm">
                      <Check size={16} className="text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Small Trust Badges */}
            {/* <div className="flex flex-wrap gap-4 mt-auto mb-6">
              {TRUST_BADGES.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div key={idx} className="flex items-center text-[10px] text-gray-500 font-semibold uppercase tracking-widest" title={badge.desc}>
                    <Icon size={14} className="mr-1.5 text-royal-blue" />
                    {badge.title}
                  </div>
                );
              })}
            </div> */}

            {/* Actions */}
            <div className="flex flex-row items-center gap-3">
              <div className="flex items-center bg-premium-bg border border-light-gray/20 h-14 shrink-0">
                <button 
                  onClick={() => setLocalQty(Math.max(0, localQty - 1))}
                  className="px-3 md:px-4 h-full text-gray-500 hover:text-royal-blue disabled:opacity-30 transition-colors"
                  disabled={localQty <= 0}
                >
                  <Minus size={16} />
                </button>
                <span className="w-8 md:w-12 text-center font-bold text-dark-gray">{localQty}</span>
                <button 
                  onClick={() => setLocalQty(localQty + 1)}
                  className="px-3 md:px-4 h-full text-gray-500 hover:text-royal-blue transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>

              <button 
                onClick={() => {
                  addToCart({ ...product, price: currentPrice, selectedType, selectedSku }, localQty === 0 ? 1 : localQty);
                  setLocalQty(0);
                }}
                className="flex-1 h-14 bg-dark-gray text-white flex items-center justify-center space-x-2 hover:bg-green-700 transition-colors duration-300 uppercase tracking-widest text-sm font-semibold px-2"
              >
                <ShoppingCart size={18} className="shrink-0" />
                <span className="text-xs md:text-sm whitespace-nowrap">Add To Cart</span>
              </button>
            </div>

          </motion.div>
        </div>

        {/* End of Page Trust Section */}
        <div className="mt-20 border-t border-light-gray/20 pt-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-playfair font-bold text-dark-gray mb-4">Why Choose FNEST?</h3>
            <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Our Commitment to Excellence</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8">
            {TRUST_BADGES.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center p-3  bg-premium-bg rounded-xl border border-light-gray/10 hover:border-royal-blue/30 transition-colors cursor-default">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-3 md:mb-4 text-royal-blue">
                    <Icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <h4 className="text-[10px] md:text-sm font-bold uppercase tracking-wider text-dark-gray mb-1.5 md:mb-2">{badge.title}</h4>
                  <p className="text-[9px] md:text-xs text-gray-500 leading-relaxed">{badge.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Comments Section */}
        <div className="mt-24 max-w-4xl mx-auto border-t border-light-gray/20 pt-16">
          <div className="flex items-center space-x-3 mb-8">
            <MessageCircle className="text-royal-blue" size={28} />
            <h3 className="text-[22px] md:text-3xl font-playfair font-bold text-dark-gray">Customer Reviews</h3>
          </div>

          {/* Comment Form */}
          <div className="bg-premium-bg p-8 rounded-2xl border border-light-gray/20 mb-12 shadow-sm">
            <h4 className="text-sm uppercase tracking-[0.2em] font-bold text-dark-gray mb-6">Leave a Review</h4>
            <form onSubmit={handleCommentSubmit} className="space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">Your Rating</label>
                <div className="flex space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setCommentRating(star)}
                      className="focus:outline-none"
                    >
                      <Star size={20} className={star <= commentRating ? "text-yellow-400 fill-current" : "text-gray-300"} />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">Your Name</label>
                <input 
                  type="text" 
                  value={commentName}
                  onChange={(e) => setCommentName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full bg-white border border-light-gray/30 rounded-lg px-4 py-3 text-dark-gray text-sm focus:outline-none focus:border-royal-blue transition-colors shadow-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">Your Review</label>
                <textarea 
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Share your thoughts about this product..."
                  className="w-full bg-white border border-light-gray/30 rounded-lg px-4 py-3 text-dark-gray text-sm focus:outline-none focus:border-royal-blue transition-colors shadow-sm resize-none"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                className="bg-royal-blue text-white px-8 py-3 rounded-lg uppercase tracking-widest text-sm font-semibold hover:bg-dark-gray transition-colors duration-300 shadow-md"
              >
                Submit Review
              </button>
            </form>
          </div>

          {/* Comments List */}
          <div className="space-y-6">
            <h4 className="text-sm uppercase tracking-[0.2em] font-bold text-dark-gray mb-6">
              Reviews ({comments.length})
            </h4>
            
            {comments.length === 0 ? (
              <p className="text-gray-500 text-sm italic">Be the first to review this product.</p>
            ) : (
              comments.map((comment) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={comment.id} 
                  className="bg-white p-6 rounded-xl border border-light-gray/10 shadow-sm"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-premium-bg rounded-full flex items-center justify-center text-royal-blue border border-light-gray/20">
                        <User size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-dark-gray">{comment.name}</p>
                        <p className="text-[10px] text-gray-400 uppercase tracking-wider">{comment.date}</p>
                      </div>
                    </div>
                    {/* Display rating */}
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => <Star key={i} size={14} className={i < (comment.rating || 5) ? "fill-current" : "text-gray-300"} />)}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed ml-13 pl-13">
                    {comment.text}
                  </p>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
