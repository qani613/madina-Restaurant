'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';

export default function AboutPage() {
    return (
        <div className="font-sans text-gray-900 bg-white selection:bg-red-100 selection:text-red-900 min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow bg-gray-900 text-white overflow-hidden relative pt-32 pb-24">
                {/* Decorative Blobs */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                <Container className="grid md:grid-cols-2 gap-16 items-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-red-500 rounded-tl-[2rem]"></div>
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[600px] group">
                            <img
                                src="Family Meal at Cafe Madina.png"
                                alt="Interior"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8">
                                <p className="font-serif text-2xl italic leading-relaxed text-gray-100">
                                    &quot;We don&apos;t just serve food; we serve memories of a Mogadishu sunset.&quot;
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="text-red-500 font-bold tracking-widest uppercase text-sm mb-2 block">Our Heritage</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">More Than Just<br />Ingredients.</h2>

                        <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed">
                            <p>
                                Madina Restaurant began as a small family gathering spot. We brought our recipes across oceans, strictly preserving the traditional cooking methods of using clay pots and wood fires.
                            </p>
                            <p>
                                Our famous <span className="text-white font-bold border-b border-red-500 pb-1">Xawaash</span> spice blend is prepared in-house weekly. It contains over 15 individual spices toasted to perfection.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8 mt-12">
                            <div>
                                <div className="text-4xl font-bold text-white mb-1">25+</div>
                                <div className="text-sm text-gray-500 uppercase tracking-wider">Years of Tradition</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-white mb-1">100%</div>
                                <div className="text-sm text-gray-500 uppercase tracking-wider">Halal Certified</div>
                            </div>
                        </div>
                    </motion.div>
                </Container>
            </main>

            <Footer />
        </div>
    );
}
