import React, { useState } from 'react'
import { useCart } from '../context/CartContext'

export default function ProductCard({ p }) {
	const { addToCart } = useCart()
	const [selectedOption, setSelectedOption] = useState(null)

	// Helper to parse price
	const getBasePrice = (priceStr) => {
		return parseFloat(String(priceStr).replace(/[^0-9.]/g, '')) || 0
	}

	// Generate options based on unit
	const getOptions = () => {
		const unit = p.unit ? p.unit.toLowerCase() : ''
		if (unit === 'kg') {
			return [
				{ label: '250g', multiplier: 0.25 },
				{ label: '500g', multiplier: 0.5 },
				{ label: '1 kg', multiplier: 1 },
				{ label: '2 kg', multiplier: 2 },
			]
		} else if (unit === '100g') {
			return [
				{ label: '100g', multiplier: 1 },
				{ label: '250g', multiplier: 2.5 },
				{ label: '500g', multiplier: 5 },
				{ label: '1 kg', multiplier: 10 },
			]
		} else if (unit === 'l' || unit === 'liter' || unit === 'litre') {
			return [
				{ label: '500ml', multiplier: 0.5 },
				{ label: '1 L', multiplier: 1 },
			]
		} else {
			// Default for bunch, pcs, etc.
			return [
				{ label: `1 ${p.unit || 'pc'}`, multiplier: 1 },
				{ label: `2 ${p.unit || 'pcs'}`, multiplier: 2 },
				{ label: `5 ${p.unit || 'pcs'}`, multiplier: 5 },
			]
		}
	}

	const options = getOptions()
	// Initialize with the option that matches multiplier 1, or the first one
	const currentOption = selectedOption || options.find(o => o.multiplier === 1) || options[0]

	const handleAddToCart = () => {
		const basePrice = getBasePrice(p.price)
		const finalPrice = basePrice * currentOption.multiplier

		const itemToAdd = {
			...p,
			id: `${p.id}-${currentOption.label.replace(/\s+/g, '')}`, // Unique ID for variant
			title: `${p.title} (${currentOption.label})`,
			price: finalPrice,
			unit: currentOption.label,
			originalId: p.id
		}
		addToCart(itemToAdd)
	}

	const displayPrice = (getBasePrice(p.price) * currentOption.multiplier).toFixed(0)

	return (
		<div className="bg-white rounded-xl md:rounded-2xl shadow-card hover:shadow-xl transition-all duration-300 group overflow-hidden flex flex-col h-full border border-surface-secondary">
			<div className="relative h-36 md:h-48 overflow-hidden">
				<img
					src={p.image}
					alt={p.title}
					className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
				/>
				<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
					{/* Quick actions can go here */}
				</div>
			</div>

			<div className="p-3 md:p-5 flex flex-col flex-1">
				<h3 className="text-sm md:text-lg font-serif font-bold text-text-main mb-1 group-hover:text-primary transition-colors line-clamp-1">
					{p.title}
				</h3>
				<p className="hidden md:block text-sm text-text-muted mb-4 line-clamp-2 flex-1">
					{p.description || 'Freshly harvested organic produce, grown with care and love for nature.'}
				</p>

				{/* Weight Selector */}
				<div className="mb-2 md:mb-4 mt-auto">
					<label className="text-[10px] md:text-xs text-text-muted uppercase tracking-wider block mb-1">Select Qty</label>
					<div className="relative">
						<select
							value={currentOption.label}
							onChange={(e) => {
								const opt = options.find(o => o.label === e.target.value)
								setSelectedOption(opt)
							}}
							className="w-full py-1.5 px-2 bg-surface border border-gray-200 rounded-lg text-xs md:text-sm focus:outline-none focus:border-primary transition-colors appearance-none"
						>
							{options.map(opt => (
								<option key={opt.label} value={opt.label}>
									{opt.label}
								</option>
							))}
						</select>
						<span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
								<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
							</svg>
						</span>
					</div>
				</div>

				<div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pt-2 border-t border-gray-50">
					<div className="flex flex-row md:flex-col items-baseline md:items-start justify-between">
						<span className="hidden md:block text-xs text-text-muted uppercase tracking-wider">Price</span>
						<span className="text-base md:text-xl font-bold text-primary-dark">
							₹{displayPrice}
						</span>
					</div>
					<button
						onClick={handleAddToCart}
						className="w-full md:w-auto bg-primary text-white px-3 py-1.5 md:py-2 rounded-lg shadow-md hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 text-xs md:text-sm font-medium active:scale-95 transform"
					>
						Add
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 md:w-4 md:h-4">
							<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
						</svg>
					</button>
				</div>
			</div>
		</div>
	)
}