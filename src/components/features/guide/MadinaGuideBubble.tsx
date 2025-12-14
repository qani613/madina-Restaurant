import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChefHat, ArrowRight, X, MessageCircle } from 'lucide-react';

export const MadinaGuideBubble = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-24 right-4 z-40 md:bottom-8 md:right-8 flex flex-col items-end gap-2">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        className="bg-white p-4 rounded-2xl shadow-xl max-w-xs mb-2 border border-red-100"
                    >
                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                                <ChefHat className="text-red-600 w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-900">Madina Guide</p>
                                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                                    First time? I recommend the <span className="text-red-600 font-bold">Chicken Suqaar</span>. It&apos;s approachable but full of our signature spices!
                                </p>
                                <button className="mt-3 text-xs font-bold text-red-600 flex items-center gap-1 hover:gap-2 transition-all">
                                    Show me <ArrowRight size={12} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-900 text-white p-4 rounded-full shadow-lg shadow-red-500/20 hover:bg-red-600 transition-colors"
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
            </motion.button>
        </div>
    );
};
