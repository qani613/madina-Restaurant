import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Phone, Calendar, Users } from 'lucide-react';
import { restaurantInfo } from '@/data/restaurantInfo';

export const CateringSection = () => {
    return (
        <section id="catering" className="py-24 bg-red-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
                    backgroundSize: '32px 32px'
                }}
            />

            {/* Decorative Gradient */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-500/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <Container className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-red-300 font-bold tracking-widest uppercase text-sm mb-2 block">Events & Parties</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                            Unforgettable<br />Catering
                        </h2>

                        <div className="space-y-6 text-red-50 text-lg leading-relaxed mb-8">
                            <p>
                                Delight your guests with Authentic Somali East African Cuisine. Elevate your next event with our exceptional catering services. Whether you're hosting a corporate gathering, wedding reception, or special celebration, our team is dedicated to creating an unforgettable culinary experience.
                            </p>
                            <p>
                                With a diverse menu inspired by Traditional Somali East African Cuisine, we offer a unique and flavorful selection that will leave your guests delighted and satisfied.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href={`tel:${restaurantInfo.contact.phone}`}
                                className="inline-flex items-center justify-center gap-2 bg-white text-red-900 px-8 py-4 rounded-full font-bold hover:bg-red-50 transition-colors"
                            >
                                <Phone size={20} />
                                Call to Discuss
                            </a>
                            <div className="flex items-center gap-6 px-4 py-2">
                                <div className="flex items-center gap-2 text-red-200">
                                    <Users size={20} />
                                    <span className="text-sm font-medium">Any Size Group</span>
                                </div>
                                <div className="flex items-center gap-2 text-red-200">
                                    <Calendar size={20} />
                                    <span className="text-sm font-medium">Custom Menus</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -top-4 -right-4 w-24 h-24 border-t-4 border-r-4 border-red-400/30 rounded-tr-[2rem]"></div>
                        <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-4 border-l-4 border-red-400/30 rounded-bl-[2rem]"></div>

                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/10 aspect-square lg:aspect-[4/5]">
                            <img
                                src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1000&auto=format&fit=crop"
                                alt="Catering Spread"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8">
                                <p className="text-white font-serif text-xl italic">
                                    "Trust us to handle the details while you focus on making memories."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
