import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { Container } from './Container';
import { IconWrapper } from '../ui/IconWrapper';

import Link from 'next/link';
import { restaurantInfo } from '../../data/restaurantInfo';

export const Footer = () => (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
        <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
                <div className="col-span-2 md:col-span-1">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white">
                            <span className="font-serif font-bold">M</span>
                        </div>
                        <span className="text-xl font-serif font-bold text-gray-900">Madina</span>
                    </div>
                    <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                        Authentic Somali cuisine served with modern elegance. Bringing the warmth of the horn to your table.
                    </p>
                    <div className="flex gap-4">
                        <IconWrapper icon={Instagram} className="bg-gray-50 text-gray-600 hover:bg-red-100 hover:text-red-600" />
                        <IconWrapper icon={Facebook} className="bg-gray-50 text-gray-600 hover:bg-red-100 hover:text-red-600" />
                        <IconWrapper icon={Twitter} className="bg-gray-50 text-gray-600 hover:bg-red-100 hover:text-red-600" />
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-gray-900 mb-6">Explore</h4>
                    <ul className="space-y-4 text-sm text-gray-500">
                        <li>
                            <Link href="/menu" className="hover:text-red-600 cursor-pointer transition-colors">
                                Menu
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-red-600 cursor-pointer transition-colors">
                                Our Story
                            </Link>
                        </li>
                        <li>
                            <Link href="/reserve" className="hover:text-red-600 cursor-pointer transition-colors">
                                Private Dining
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:text-red-600 cursor-pointer transition-colors">
                                Gift Cards
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-gray-900 mb-6">Visit Us</h4>
                    <ul className="space-y-4 text-sm text-gray-500">
                        <li>
                            <a
                                href={restaurantInfo.address.mapLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-red-600 transition-colors"
                            >
                                {restaurantInfo.address.street},<br />{restaurantInfo.address.district}
                            </a>
                        </li>
                        <li>{restaurantInfo.contact.phone}</li>
                        <li>{restaurantInfo.contact.email}</li>
                    </ul>
                </div>

                <div className="col-span-2 md:col-span-1">
                    <h4 className="font-bold text-gray-900 mb-6">Hours</h4>
                    <ul className="space-y-4 text-sm text-gray-500">
                        {restaurantInfo.hours.map((item) => (
                            <li key={item.day} className="flex justify-between">
                                <span>{item.day}</span>
                                <span>{item.time}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                <p>© {new Date().getFullYear()} Madina Restaurant. All rights reserved.</p>
                <div className="flex gap-6">
                    <span className="cursor-pointer hover:text-gray-900">Privacy</span>
                    <span className="cursor-pointer hover:text-gray-900">Terms</span>
                    <span className="cursor-pointer hover:text-gray-900">Sitemap</span>
                </div>
            </div>
        </Container>
    </footer>
);
