import React from 'react'

export default function About() {
    return (
        <div className="bg-surface min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2070&auto=format&fit=crop"
                        alt="Organic Farm"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
                </div>
                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <span className="block text-accent font-medium tracking-[0.2em] uppercase mb-4 animate-fade-in-up">Our Story</span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight animate-fade-in-up delay-100">
                        Rooted in Nature, <br /> Grown with Love.
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light animate-fade-in-up delay-200">
                        Bringing the purest, chemical-free organic produce from our soil directly to your home.
                    </p>
                </div>
            </div>

            {/* Purity & Trust Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl transform rotate-2 group-hover:rotate-1 transition-transform duration-500"></div>
                            <img
                                src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80"
                                alt="Pure Turmeric"
                                className="relative rounded-xl shadow-2xl w-full h-[500px] object-cover transform transition-transform duration-500 group-hover:scale-[1.01]"
                            />
                        </div>
                        <div className="space-y-8">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary-dark text-sm font-medium tracking-wide">
                                100% PURE & NATURAL
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-dark leading-tight">
                                The Essence of <span className="text-accent italic">Purity</span>
                            </h2>
                            <p className="text-text-muted text-lg leading-relaxed">
                                At KBR Organics, purity isn't just a buzzword—it's our promise. We believe that food should be as nature intended: free from synthetic fertilizers, harmful pesticides, and genetic modifications.
                            </p>
                            <p className="text-text-muted text-lg leading-relaxed">
                                Every grain of rice, every pinch of spice, and every drop of oil is a testament to our commitment to traditional farming methods that honor the earth and nourish your body.
                            </p>

                            <div className="grid grid-cols-2 gap-6 pt-4">
                                <div className="flex flex-col gap-2">
                                    <span className="text-3xl font-serif font-bold text-primary">100%</span>
                                    <span className="text-sm text-text-muted uppercase tracking-wider">Chemical Free</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-3xl font-serif font-bold text-primary">0%</span>
                                    <span className="text-sm text-text-muted uppercase tracking-wider">Preservatives</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1 space-y-8">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium tracking-wide">
                                TRUSTED BY FAMILIES
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-dark leading-tight">
                                A Legacy of <span className="text-secondary italic">Trust</span>
                            </h2>
                            <p className="text-text-muted text-lg leading-relaxed">
                                Building trust takes time, and we've built ours from the ground up. We work directly with local farmers, ensuring fair trade and complete transparency in our supply chain.
                            </p>
                            <p className="text-text-muted text-lg leading-relaxed">
                                When you choose KBR Organics, you're not just buying groceries; you're becoming part of a community that values health, sustainability, and the authentic taste of tradition.
                            </p>
                            <button className="mt-4 px-8 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                View Our Certificates
                            </button>
                        </div>
                        <div className="order-1 md:order-2 relative group">
                            <div className="absolute -inset-4 bg-gradient-to-l from-secondary/20 to-primary/20 rounded-2xl transform -rotate-2 group-hover:-rotate-1 transition-transform duration-500"></div>
                            <img
                                src="https://images.unsplash.com/photo-1595815769817-19054ffe612d?q=80&w=1000&auto=format&fit=crop"
                                alt="Farmer Hands"
                                className="relative rounded-xl shadow-2xl w-full h-[500px] object-cover transform transition-transform duration-500 group-hover:scale-[1.01]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="bg-primary/5 py-24 px-4">
                <div className="container mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-dark mb-6">Our Core Values</h2>
                        <p className="text-text-muted">Guided by principles that put the planet and people first.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Sustainable Farming",
                                desc: "We practice regenerative agriculture to restore soil health and biodiversity.",
                                icon: "🌱"
                            },
                            {
                                title: "Farm to Table",
                                desc: "Eliminating middlemen to ensure you get the freshest produce at fair prices.",
                                icon: "🚜"
                            },
                            {
                                title: "Quality Assured",
                                desc: "Rigorous quality checks at every stage to guarantee premium organic standards.",
                                icon: "✨"
                            }
                        ].map((value, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                                <div className="text-4xl mb-6">{value.icon}</div>
                                <h3 className="text-xl font-serif font-bold text-primary-dark mb-3">{value.title}</h3>
                                <p className="text-text-muted leading-relaxed">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
