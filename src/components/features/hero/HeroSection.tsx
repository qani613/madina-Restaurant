import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Utensils, ChevronRight } from 'lucide-react';
import { VideoModal } from '@/components/ui/VideoModal';

export const HeroSection = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);

    const [videoOpen, setVideoOpen] = React.useState(false);

    return (
        <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-gray-900">
            {/* Background */}
            <motion.div
                style={{ y: y1 }}
                className="absolute inset-0 z-0 opacity-60"
            >
                <img
                    src="https://images.unsplash.com/photo-1511690656952-34342d5c2895?q=80&w=2000&auto=format&fit=crop"
                    alt="Atmospheric Dining"
                    className="w-full h-full object-cover scale-110"
                />
            </motion.div>
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 text-center md:text-left w-full grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-red-400 mb-6">
                        <Utensils size={14} />
                        <span className="text-xs font-bold uppercase tracking-widest">Est. 1995</span>
                    </div>

                    <h1 className="text-4xl md:text-8xl font-serif font-bold text-white leading-[0.9] mb-6 tracking-tight">
                        Taste <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-300">
                            The Horn.
                        </span>
                    </h1>

                    <p className="text-gray-300 text-lg md:text-xl font-light mb-8 max-w-md mx-auto md:mx-0 leading-relaxed">
                        Where the spices of the East meet the soul of Africa. Experience modern Somali cuisine in an immersive setting.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-red-600/30 flex items-center justify-center gap-2"
                        >
                            Order Now <ChevronRight size={18} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setVideoOpen(true)}
                            className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20"
                        >
                            Watch Video
                        </motion.button>
                    </div>
                </motion.div>

                {/* Floating Abstract Element */}
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="hidden md:block relative"
                >
                    {/* Glass Card */}
                    <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-[2rem] max-w-sm ml-auto transform rotate-3 hover:rotate-0 transition-transform duration-500 cursor-pointer group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-amber-500 rounded-[2rem] opacity-20 group-hover:opacity-40 blur-xl transition-opacity"></div>
                        <div className="flex items-center gap-4 mb-4">
                            <img
                                src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=150&auto=format&fit=crop"
                                className="w-16 h-16 rounded-2xl object-cover"
                                alt="Tea"
                            />
                            <div>
                                <h4 className="text-white font-serif font-bold text-xl">Shaah Cadays</h4>
                                <p className="text-gray-400 text-sm">Spiced Milk Tea</p>
                            </div>
                            <div className="ml-auto text-red-400 font-bold text-xl">$5</div>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Brewed with cardamom, cloves, and cinnamon. The perfect start or end to your meal.
                        </p>
                    </div>
                </motion.div>
            </div>

            <VideoModal
                isOpen={videoOpen}
                onClose={() => setVideoOpen(false)}
                videoId="ysz5S6PUM-U" // Placeholder food cinematic video
            />
        </section>
    );
};
