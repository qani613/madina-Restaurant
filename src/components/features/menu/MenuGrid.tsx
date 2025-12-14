import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DishCard } from './DishCard';
import { MenuItem } from '@/data/menuItems';

interface MenuGridProps {
    items: MenuItem[];
    onItemClick: (item: MenuItem) => void;
}

export const MenuGrid = ({ items, onItemClick }: MenuGridProps) => (
    <motion.div
        layout
        className="flex overflow-x-auto snap-x snap-mandatory pb-8 -mx-4 px-4 gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 sm:overflow-visible sm:pb-0 sm:mx-0 sm:px-0"
    >
        <AnimatePresence mode="popLayout">
            {items.map(item => (
                <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="min-w-[85vw] sm:min-w-0 snap-center"
                >
                    <DishCard item={item} onClick={onItemClick} />
                </motion.div>
            ))}
        </AnimatePresence>
    </motion.div>
);
