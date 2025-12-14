import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { restaurantInfo } from '@/data/restaurantInfo';

export const LocationSection = () => {
    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                    backgroundSize: '32px 32px'
                }}
            />

            <Container className="relative z-10">
                <SectionHeader
                    title="Visit Us"
                    subtitle="Find Your Way"
                    alignment="center"
                />

                <div className="mt-16 grid lg:grid-cols-12 gap-8">
                    {/* Info Card - Overlaps on Desktop */}
                    <div className="lg:col-span-4 lg:col-start-2 bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl relative z-20 border border-gray-100">
                        <div className="space-y-10">
                            {/* Address */}
                            <div className="flex gap-5">
                                <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center flex-shrink-0 text-red-600">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg mb-2">Location</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {restaurantInfo.address.street}<br />
                                        {restaurantInfo.address.district}
                                    </p>
                                    <a
                                        href={restaurantInfo.address.mapLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-red-600 font-bold text-sm mt-3 hover:gap-3 transition-all"
                                    >
                                        Get Directions <Navigation size={14} />
                                    </a>
                                </div>
                            </div>

                            {/* Hours */}
                            <div className="flex gap-5">
                                <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center flex-shrink-0 text-orange-600">
                                    <Clock size={24} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-gray-900 text-lg mb-2">Opening Hours</h3>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        {restaurantInfo.hours.map((item) => (
                                            <li key={item.day} className="flex justify-between border-b border-gray-50 pb-1 last:border-0">
                                                <span className="font-medium">{item.day}</span>
                                                <span>{item.time}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Contact */}
                            <div className="flex gap-5">
                                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-600">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg mb-2">Contact</h3>
                                    <p className="text-gray-600 mb-1">{restaurantInfo.contact.phone}</p>
                                    <p className="text-gray-600 text-sm">{restaurantInfo.contact.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map & Image Grid */}
                    <div className="lg:col-span-7 grid grid-cols-2 lg:flex lg:flex-col gap-2 lg:gap-8 relative z-10 h-full">
                        {/* Map */}
                        <div className="h-[300px] lg:h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                            <iframe
                                width="100%"
                                height="100%"
                                id="gmap_canvas"
                                src="https://maps.google.com/maps?q=6029+Forest+Ln,+Dallas,+TX+75230&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight={0}
                                marginWidth={0}
                                className="w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                            ></iframe>
                        </div>

                        {/* Storefront Image */}
                        <div className="relative h-[300px] lg:hidden rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white group">
                            <img
                                src="/mainentry.png"
                                alt="Madina Restaurant Entrance"
                                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent">
                                <p className="text-white font-bold font-serif text-sm md:text-lg">Main Entrance</p>
                                <p className="text-gray-300 text-[10px] md:text-sm">Welcome to Madina</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

