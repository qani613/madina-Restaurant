import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Star, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { MenuItem } from '@/data/menuItems';

interface DishCardProps {
    item: MenuItem;
    onClick: (item: MenuItem) => void;
}

export const DishCard = ({ item, onClick }: DishCardProps) => (
    <motion.div
        layoutId={`card-container-${item.id}`}
        onClick={() => onClick(item)}
        whileHover={{ y: -8 }}
        className="group relative bg-white rounded-[2rem] p-3 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-gray-100"
    >
        {/* Hover "Spotlight" Effect (Red) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-red-500/20 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        {/* Image Container */}
        <motion.div
            layoutId={`image-${item.id}`}
            className="relative h-64 w-full rounded-[1.5rem] overflow-hidden mb-4"
        >
            <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

            <div className="absolute top-3 left-3 flex gap-2">
                {item.popular && <Badge color="red">Best Seller</Badge>}
            </div>

            <div className="absolute bottom-3 left-3 text-white">
                <div className="flex items-center gap-1 text-xs font-medium mb-1 bg-black/30 backdrop-blur-md px-2 py-1 rounded-full w-fit">
                    <Clock size={12} /> {item.stats.time}
                </div>
            </div>
        </motion.div>

        {/* Content */}
        <div className="px-2 pb-2">
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-serif font-bold text-gray-900 leading-tight w-3/4">
                    {item.name}
                </h3>
                <span className="text-lg font-bold text-red-600">
                    ${item.price}
                </span>
            </div>

            <p className="text-gray-500 text-sm line-clamp-2 mb-4 font-light">
                {item.desc}
            </p>

            <div className="flex items-center justify-between mt-auto border-t border-gray-50 pt-3">
                <div className="flex items-center gap-1 text-yellow-500">
                    <Star size={14} fill="currentColor" />
                    <span className="text-xs font-bold text-gray-900">4.9</span>
                    <span className="text-xs text-gray-400">(120)</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                    Details <ArrowRight size={14} />
                </div>
            </div>
        </div>
    </motion.div>
);
