import React from 'react';
import { CATEGORIES } from '@/data/menuItems';

interface CategoryFilterProps {
    activeCategory: string;
    onCategoryChange: (id: string) => void;
    categories?: typeof CATEGORIES;
}

export const CategoryFilter = ({ activeCategory, onCategoryChange, categories = CATEGORIES }: CategoryFilterProps) => (
    <div className="flex overflow-x-auto pb-4 mb-12 gap-3 justify-start md:justify-center no-scrollbar px-2">
        {categories.map(cat => (
            <button
                key={cat.id}
                onClick={() => onCategoryChange(cat.id)}
                className={`px-6 py-3 rounded-full whitespace-nowrap text-sm font-bold transition-all duration-300 ${activeCategory === cat.id
                    ? 'bg-gray-900 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-500 border border-gray-100 hover:border-red-200'
                    }`}
            >
                {cat.label}
            </button>
        ))}
    </div>
);
