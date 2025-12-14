import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';

const REVIEWS = [
    {
        id: 1,
        name: "Local Guide",
        rating: 5,

        text: `Dine in | $10–20
Cafe Medina offers an authentic taste of Somali cuisine with a warm, homely touch. I had the pleasure of trying their mixed plate, which included a delightful variety of beef, lamb, and chicken. The portion sizes are incredibly generous – our group of four shared a single plate and still had leftovers to take home!

The food is absolutely delicious and earns a solid 10 out of 10 from me. Additionally, the cafe has a dedicated prayer space, making it a welcoming spot for everyone.`,
        date: "2 weeks ago"
    },
    {
        id: 2,
        name: "Phillip Smith",
        rating: 5,
        text: `$10–20
Was only in town for a week and decided to try this place because it was close to my office. Food was excellent and will definitely be back when I'm in town again. I had the rice with lamb and it was the best meal I've had in a long time.`,
        date: "1 month ago"
    },
    {
        id: 3,
        name: "DJ P",
        rating: 5,
        text: "Any time I drive around Dallas I try to avoid cafe madina but this delicious food takes me as hostage every time If you madina you can’t go back",
        date: "3 weeks ago"
    }
];

export const ReviewsSection = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-100/50 blur-[100px] rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

            <Container className="relative z-10">
                <SectionHeader
                    title="Guest Love"
                    subtitle="What People Say"
                />

                <div className="grid md:grid-cols-3 gap-8 mt-16">
                    {REVIEWS.map((review, index) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-50 p-8 rounded-[2rem] relative group hover:shadow-lg transition-shadow duration-300"
                        >
                            <Quote className="absolute top-8 right-8 text-red-100 group-hover:text-red-200 transition-colors" size={48} />

                            <div className="flex gap-1 text-yellow-500 mb-6">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={18} fill="currentColor" />
                                ))}
                            </div>

                            <p className="text-gray-600 leading-relaxed mb-8 relative z-10">
                                &quot;{review.text}&quot;
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold font-serif">
                                    {review.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                                    <div className="flex items-center gap-2 text-xs text-gray-400">
                                        <span>Google Review</span>
                                        <span>•</span>
                                        <span>{review.date}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="https://www.google.com/search?sa=X&sca_esv=8e6e5ddd94282f4d&sxsrf=AE3TifO7HRhHla7qGLKMYGYCby32fVjyxQ:1764661129297&q=cafe+madina+dallas&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E2c3MUAwHWzRzStmbzm3P2hJpSFgNcQ8Pg5Hgz6wxiNCm8bwU21VWfSK05k4i9-5TxkXBARkkCL-gLWmM3cbhyEEjpyc&ved=2ahUKEwin3Ir-sp6RAxWmmYkEHcs_LGIQrrQLegQIOxAA&biw=1920&bih=962&dpr=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md hover:border-red-100 transition-all duration-300 group"
                    >
                        <img
                            src="/google.png"
                            alt="Google"
                            className="w-5 h-5"
                        />
                        <span className="text-sm font-bold text-gray-700 group-hover:text-red-600 transition-colors">
                            Read more reviews on Google
                        </span>
                    </a>
                </div>
            </Container>
        </section>
    );
};
