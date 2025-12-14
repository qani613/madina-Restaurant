import React from 'react';

interface BadgeProps {
    children: React.ReactNode;
    color?: 'red' | 'glass';
}

export const Badge = ({ children, color = "red" }: BadgeProps) => (
    <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest ${color === "red"
            ? "bg-red-100 text-red-700"
            : "bg-white/20 backdrop-blur-md text-white"
        }`}>
        {children}
    </span>
);
