import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface IconWrapperProps {
    icon: LucideIcon;
    onClick?: () => void;
    className?: string;
}

export const IconWrapper = ({ icon: Icon, onClick, className = "" }: IconWrapperProps) => (
    <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClick}
        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${className}`}
    >
        <Icon size={20} />
    </motion.button>
);
