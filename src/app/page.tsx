'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/features/hero/HeroSection';
import { MenuGrid } from '@/components/features/menu/MenuGrid';
import { CategoryFilter } from '@/components/features/menu/CategoryFilter';
import { DishDetailModal } from '@/components/features/menu/DishDetailModal';
import { MadinaGuideBubble } from '@/components/features/guide/MadinaGuideBubble';
import { Footer } from '@/components/layout/Footer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Container } from '@/components/layout/Container';
import { ReviewsSection } from '@/components/features/reviews/ReviewsSection';
import { LocationSection } from '@/components/features/location/LocationSection';
import { CateringSection } from '@/components/features/catering/CateringSection';
import { MENU_ITEMS, MenuItem, CATEGORIES } from '@/data/menuItems';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('mains');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="font-sans text-gray-900 bg-white selection:bg-red-100 selection:text-red-900 scroll-smooth">
      <Navbar />
      <HeroSection />

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-gray-50 min-h-screen relative overflow-hidden">
        {/* Decorative Blob */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-red-100/40 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <Container>
          <SectionHeader
            title="Our Menu"
            subtitle="Authentic Flavors"
          />

          <CategoryFilter
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            categories={[
              { id: 'mains', label: 'Mains' },
              { id: 'breakfast', label: 'Breakfast' },
              { id: 'starters', label: 'Starters' },
              { id: 'sides', label: 'Sides' },
              { id: 'drinks', label: 'Drinks' }
            ]}
          />

          <MenuGrid
            items={filteredItems}
            onItemClick={setSelectedItem}
          />
        </Container>

        <AnimatePresence>
          {selectedItem && (
            <DishDetailModal item={selectedItem} onClose={() => setSelectedItem(null)} />
          )}
        </AnimatePresence>
      </section>

      {/* Story Section */}
      <section id="heritage" className="py-24 bg-gray-900 text-white overflow-hidden relative">
        {/* Decorative Blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

        <Container className="grid md:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-red-500 rounded-tl-[2rem]"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[400px] md:h-[600px] group">
              <img
                src="setting.png"
                alt="Interior"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="font-serif text-2xl italic leading-relaxed text-gray-100">
                  &quot;We don&apos;t just serve food; we serve memories of a Mogadishu sunset.&quot;
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-red-500 font-bold tracking-widest uppercase text-sm mb-2 block">Our Heritage</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">More Than Just<br />Ingredients.</h2>

            <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed">
              <p>
                Madina Restaurant began as a small family gathering spot. We brought our recipes across oceans, strictly preserving the traditional cooking methods of using clay pots and wood fires.
              </p>
              <p>
                Our famous <span className="text-white font-bold border-b border-red-500 pb-1">Xawaash</span> spice blend is prepared in-house weekly. It contains over 15 individual spices toasted to perfection.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold text-white mb-1">25+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">Years of Tradition</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-1">100%</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">Halal Certified</div>
              </div>
            </div>

            <button className="mt-12 text-white border-b border-white pb-1 hover:text-red-400 hover:border-red-400 transition-colors flex items-center gap-2">
              Read Full Story <ArrowRight size={16} />
            </button>
          </motion.div>
        </Container>
      </section>

      <ReviewsSection />

      <CateringSection />

      <LocationSection />

      <Footer />

      {/* Interactive Elements */}
      <MadinaGuideBubble />

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-lg border-t border-gray-200 md:hidden z-40 flex items-center justify-between shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <div>
          <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wide">Delivery</p>
          <p className="text-sm font-bold text-gray-900">20-30 Mins</p>
        </div>
        <button className="bg-gray-900 text-white py-2 px-8 rounded-full font-bold text-sm hover:bg-red-600 transition-colors shadow-lg">
          Order Now
        </button>
      </div>
    </div>
  );
}
