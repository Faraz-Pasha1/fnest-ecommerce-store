import React, { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/shared/ProductCard';

import { PRODUCTS1 } from '../components/home/SplitSection1';
import { PRODUCTS2 } from '../components/home/SplitSection2';
import { PRODUCTS3 } from '../components/home/SplitSection3';
import { PRODUCTS4 } from '../components/home/SplitSection4';

const PRODUCTS = [...PRODUCTS1, ...PRODUCTS2, ...PRODUCTS3, ...PRODUCTS4];
import { Search, ChevronDown, SlidersHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';

const Shop = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialCategory = searchParams.get('category') || 'All';
  const initialSearch = searchParams.get('search') || '';

  const [search, setSearch] = useState(initialSearch);
  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState('Newest');

  useEffect(() => {
    const catParam = searchParams.get('category');
    if (catParam) {
      setCategory(catParam);
    }
    const searchParam = searchParams.get('search');
    if (searchParam !== null) {
      setSearch(searchParam);
    } else {
      setSearch('');
    }
    window.scrollTo(0, 0);
  }, [location.search]);

  const categories = ['All', ...new Set(PRODUCTS.map(p => p.category))];

  const filteredProducts = useMemo(() => {
    let result = PRODUCTS.filter(p => 
      (category === 'All' || p.category === category) &&
      (p.title.toLowerCase().includes(search.toLowerCase()) || 
       (p.subtitle && p.subtitle.toLowerCase().includes(search.toLowerCase())) ||
       (p.description && p.description.toLowerCase().includes(search.toLowerCase())))
    );

    if (sort === 'Price Low-High') result.sort((a, b) => a.price - b.price);
    if (sort === 'Price High-Low') result.sort((a, b) => b.price - a.price);
    
    return result;
  }, [search, category, sort]);

  return (
    <div className="shop-page">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] bg-dark-gray flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: 'url(/shop/fnest-mukhwas-gift-celebration-trending-shopping.webp)' }}
        />
        <div className="relative text-center z-10">
          <h1 className="text-3xl md:text-8xl font-playfair font-bold text-white mb-2 tracking-tighter">Shop Collection</h1>
          <p className="text-green-400 text-[16px] md:text-[26px] uppercase tracking-[0.5em] font-bold">Premium Selections</p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-20 z-30 bg-white border-b border-light-gray/20 shadow-sm">
        <div className="w-full px-4 md:px-[60px] max-w-[1800px] mx-auto py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search */}
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search premium goods..."
                className="w-full bg-premium-bg border-none px-12 py-2 text-sm focus:ring-1 focus:ring-royal-blue"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* Filters */}
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <button className="flex items-center space-x-2 text-[14px] md:text-xs uppercase tracking-widest font-semi-bold border border-light-gray/30 px-4 py-2 hover:border-royal-blue transition-all">
                  <span>Category: {category}</span>
                  <ChevronDown size={14} />
                </button>
                <div className="absolute top-full left-0 mt-1 w-full bg-white shadow-xl border border-light-gray/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-40">
                  {categories.map(cat => (
                    <button 
                      key={cat}
                      onClick={() => setCategory(cat)}
                      className="w-full text-left px-4 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-premium-bg hover:text-royal-blue border-b border-light-gray/10 last:border-none"
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative group">
                <button className="flex items-center space-x-2 text-[14px] md:text-xs uppercase tracking-widest font-semi-bold border border-light-gray/30 px-4 py-2 hover:border-royal-blue transition-all">
                  <span>Sort By: {sort}</span>
                  <ChevronDown size={14} />
                </button>
                <div className="absolute top-full right-0 mt-1 w-full bg-white shadow-xl border border-light-gray/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-40">
                  {['Newest', 'Price Low-High', 'Price High-Low'].map(s => (
                    <button 
                      key={s}
                      onClick={() => setSort(s)}
                      className="w-full text-left px-4 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-premium-bg hover:text-royal-blue border-b border-light-gray/10 last:border-none"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-8">
        <div className="w-full px-1 md:px-[60px] max-w-[1800px] mx-auto">
          <div className="flex items-center justify-between mb-4">
            <p className="text-gray-400 text-[10px] uppercase tracking-widest">Showing {filteredProducts.length} Results</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-24 text-center">
              <p className="text-gray-400 text-lg font-playfair italic">No products found matching your search.</p>
              <button 
                onClick={() => { setSearch(''); setCategory('All'); }}
                className="mt-6 text-royal-blue uppercase tracking-widest text-xs font-bold border-b border-royal-blue pb-1"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Shop;
