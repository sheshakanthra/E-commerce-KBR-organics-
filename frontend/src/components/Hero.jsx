import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
	return (
		<section className="relative h-[90vh] w-full overflow-hidden flex items-center">
			{/* Background Image with Overlay */}
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-slow-zoom"
				style={{ backgroundImage: `url('/images/hero-new.png')` }}
			/>
			<div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary/70 to-transparent" />

			<div className="container mx-auto relative z-10 px-4">
				<div className="max-w-2xl text-white">
					<span className="inline-block py-1 px-3 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-medium mb-6 backdrop-blur-sm">
						100% Organic & Fresh
					</span>
					<h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
						Mannin Suvai, <br />
						<span className="text-accent">Manadhin Nambikkai</span>
					</h1>
					<p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-lg">
						Experience the true taste of nature with our locally sourced, chemical-free organic produce delivered straight to your doorstep.
					</p>
					<div className="flex flex-wrap gap-4">
						<Link to="/products" className="px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent-hover transition-all shadow-lg hover:shadow-accent/30 transform hover:-translate-y-1">
							Shop Now
						</Link>
						<Link to="/about" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all">
							Learn Our Story
						</Link>
					</div>
				</div>
			</div>

			{/* Decorative Elements */}
			<div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface to-transparent" />
		</section>
	)
}