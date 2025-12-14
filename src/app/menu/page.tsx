'use client';

import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { MenuGrid } from '@/components/features/menu/MenuGrid';
import { CategoryFilter } from '@/components/features/menu/CategoryFilter';
import { DishDetailModal } from '@/components/features/menu/DishDetailModal';
import { Footer } from '@/components/layout/Footer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Container } from '@/components/layout/Container';
import { MENU_ITEMS, MenuItem } from '@/data/menuItems';

export default function MenuPage() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

    const filteredItems = activeCategory === 'all'
        ? MENU_ITEMS
        : MENU_ITEMS.filter(item => item.category === activeCategory);

    return (
        <div className="font-sans text-gray-900 bg-white selection:bg-red-100 selection:text-red-900 min-h-screen flex flex-col">
            <Navbar variant="page" />

            <main className="flex-grow pt-32 pb-24 bg-gray-50">
                <Container>
                    <SectionHeader
                        title="Full Menu"
                        subtitle="Explore Our Flavors"
                    />

                    <CategoryFilter
                        activeCategory={activeCategory}
                        onCategoryChange={setActiveCategory}
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
            </main>

            <Footer />
        </div>
    );
}
