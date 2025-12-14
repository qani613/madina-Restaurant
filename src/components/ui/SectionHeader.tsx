import React from 'react';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    alignment?: 'center' | 'left';
}

export const SectionHeader = ({ title, subtitle, alignment = 'center' }: SectionHeaderProps) => (
    <div className={`mb-16 ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
        {subtitle && (
            <span className="text-red-600 font-bold tracking-[0.2em] text-sm uppercase block mb-3">
                {subtitle}
            </span>
        )}
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
            {title}
        </h2>
        {alignment === 'center' && (
            <div className="w-24 h-1 bg-red-500 mx-auto rounded-full" />
        )}
    </div>
);
