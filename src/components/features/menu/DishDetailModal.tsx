import React from 'react';
import { motion } from 'framer-motion';
import { X, Flame, Clock, ChefHat, ShoppingBag, Heart } from 'lucide-react';
import { MenuItem } from '@/data/menuItems';

interface DishDetailModalProps {
    item: MenuItem | null;
    onClose: () => void;
}

export const DishDetailModal = ({ item, onClose }: DishDetailModalProps) => {
    if (!item) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/60"
            />

            <motion.div
                layoutId={`card-container-${item.id}`}
                className="relative w-full max-w-5xl bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-[80vh] z-10"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 bg-white/20 backdrop-blur-lg p-2 rounded-full hover:bg-white text-white hover:text-black transition-all"
                >
                    <X size={24} />
                </button>

                {/* Left: Image */}
                <motion.div
                    layoutId={`image-${item.id}`}
                    className="w-full md:w-1/2 h-64 md:h-auto relative"
                >
                    <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
                    <div className="absolute bottom-4 left-4 text-white md:hidden">
                        <h2 className="text-2xl font-serif font-bold">{item.name}</h2>
                    </div>
                </motion.div>

                {/* Right: Content */}
                <div className="w-full md:w-1/2 p-6 md:p-12 overflow-y-auto bg-white flex flex-col">
                    <div className="hidden md:block">
                        <h2 className="text-4xl font-serif font-bold text-gray-900 mb-2">
                            {item.name}
                        </h2>
                        <div className="text-2xl font-bold text-red-600 mb-6">
                            ${item.price}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <p className="text-gray-600 text-lg leading-relaxed mb-8 font-light">
                            {item.fullDesc}
                        </p>

                        {/* Stats Grid */}
                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-3 mb-8">
                            {item.category === 'mains' ? (
                                <>
                                    <div className="bg-orange-50 p-4 rounded-2xl text-center border border-orange-100">
                                        <div className="w-8 h-8 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-2 text-orange-600 font-bold text-xs">
                                            R
                                        </div>
                                        <span className="text-[10px] font-bold uppercase text-gray-400 block tracking-wider">Option</span>
                                        <span className="font-bold text-gray-800">Rice</span>
                                    </div>
                                    <div className="bg-yellow-50 p-4 rounded-2xl text-center border border-yellow-100">
                                        <div className="w-8 h-8 mx-auto bg-yellow-100 rounded-full flex items-center justify-center mb-2 text-yellow-600 font-bold text-xs">
                                            P
                                        </div>
                                        <span className="text-[10px] font-bold uppercase text-gray-400 block tracking-wider">Option</span>
                                        <span className="font-bold text-gray-800">Pasta</span>
                                    </div>
                                    <div className="bg-red-50 p-4 rounded-2xl text-center border border-red-100">
                                        <div className="w-8 h-8 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-2 text-red-600 font-bold text-xs">
                                            M
                                        </div>
                                        <span className="text-[10px] font-bold uppercase text-gray-400 block tracking-wider">Option</span>
                                        <span className="font-bold text-gray-800">Mix</span>
                                    </div>
                                </>
                            ) : item.name.includes('Sambusa') ? (
                                <>
                                    <div className="bg-red-50 p-4 rounded-2xl text-center border border-red-100">
                                        <div className="w-8 h-8 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-2 text-red-600 font-bold text-xs">
                                            B
                                        </div>
                                        <span className="text-[10px] font-bold uppercase text-gray-400 block tracking-wider">Option</span>
                                        <span className="font-bold text-gray-800">Beef</span>
                                    </div>
                                    <div className="bg-orange-50 p-4 rounded-2xl text-center border border-orange-100">
                                        <div className="w-8 h-8 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-2 text-orange-600 font-bold text-xs">
                                            C
                                        </div>
                                        <span className="text-[10px] font-bold uppercase text-gray-400 block tracking-wider">Option</span>
                                        <span className="font-bold text-gray-800">Chicken</span>
                                    </div>
                                    <div className="bg-green-50 p-4 rounded-2xl text-center border border-green-100">
                                        <div className="w-8 h-8 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-2 text-green-600 font-bold text-xs">
                                            V
                                        </div>
                                        <span className="text-[10px] font-bold uppercase text-gray-400 block tracking-wider">Option</span>
                                        <span className="font-bold text-gray-800">Veggie</span>
                                    </div>
                                </>
                            ) : item.name === 'Bottled Soda' ? (
                                <>
                                    <div className="bg-red-50 p-4 rounded-2xl text-center border border-red-100">
                                        <div className="w-8 h-8 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-2 text-red-600 font-bold text-xs">
                                            C
                                        </div>
                                        <span className="text-[10px] font-bold uppercase text-gray-400 block tracking-wider">Option</span>
                                        <span className="font-bold text-gray-800">Coke</span>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-2xl text-center border border-blue-100">
                                        <div className="w-8 h-8 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-2 text-blue-600 font-bold text-xs">
                                            P
                                        </div>
                                        <span className="text-[10px] font-bold uppercase text-gray-400 block tracking-wider">Option</span>
                                        <span className="font-bold text-gray-800">Pepsi</span>
                                    </div>
                                    <div className="bg-green-50 p-4 rounded-2xl text-center border border-green-100">
                                        <div className="w-8 h-8 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-2 text-green-600 font-bold text-xs">
                                            S
                                        </div>
                                        <span className="text-[10px] font-bold uppercase text-gray-400 block tracking-wider">Option</span>
                                        <span className="font-bold text-gray-800">Sprite</span>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="bg-red-50 p-4 rounded-2xl text-center border border-red-100">
                                        <Flame className="w-5 h-5 mx-auto text-red-500 mb-2" />
                                        <span className="text-[10px] font-bold uppercase text-gray-400 block tracking-wider">Heat</span>
                                        <span className="font-bold text-gray-800">{item.stats.heat}</span>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-2xl text-center border border-blue-100">
                                        <Clock className="w-5 h-5 mx-auto text-blue-500 mb-2" />
                                        <span className="text-[10px] font-bold uppercase text-gray-400 block tracking-wider">Prep</span>
                                        <span className="font-bold text-gray-800">{item.stats.time}</span>
                                    </div>
                                    <div className="bg-green-50 p-4 rounded-2xl text-center border border-green-100">
                                        <ChefHat className="w-5 h-5 mx-auto text-green-500 mb-2" />
                                        <span className="text-[10px] font-bold uppercase text-gray-400 block tracking-wider">Chef</span>
                                        <span className="font-bold text-gray-800">{item.stats.chef}</span>
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="flex gap-4 mt-auto">
                            <button className="flex-1 bg-gray-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-red-600 transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2">
                                Add to Order <ShoppingBag size={18} />
                            </button>
                            <button className="w-14 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-colors">
                                <Heart size={20} />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};
