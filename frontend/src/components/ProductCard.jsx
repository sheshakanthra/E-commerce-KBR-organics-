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
		<div className="bg-white rounded-2xl shadow-card hover:shadow-xl transition-all duration-300 group overflow-hidden flex flex-col h-full border border-surface-secondary">
			<div className="relative h-48 overflow-hidden">
				<img
					src={p.image}
					alt={p.title}
					className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
				/>
				<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
					{/* Quick actions can go here */}
				</div>
			</div>

			<div className="p-5 flex flex-col flex-1">
				<h3 className="text-lg font-serif font-bold text-text-main mb-1 group-hover:text-primary transition-colors line-clamp-1">
					{p.title}
				</h3>
				<p className="text-sm text-text-muted mb-4 line-clamp-2 flex-1">
					{p.description || 'Freshly harvested organic produce, grown with care and love for nature.'}
				</p>

				{/* Weight Selector */}
				<div className="mb-4">
					<label className="text-xs text-text-muted uppercase tracking-wider block mb-1">Select Quantity</label>
					<select
						value={currentOption.label}
						onChange={(e) => {
							const opt = options.find(o => o.label === e.target.value)
							setSelectedOption(opt)
						}}
						className="w-full p-2 bg-surface border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary transition-colors"
					>
						{options.map(opt => (
							<option key={opt.label} value={opt.label}>
								{opt.label}
							</option>
						))}
					</select>
				</div>

				<div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
					<div className="flex flex-col">
						<span className="text-xs text-text-muted uppercase tracking-wider">Price</span>
						<span className="text-xl font-bold text-primary-dark">
							₹{displayPrice}
						</span>
					</div>
					<button
						onClick={handleAddToCart}
						className="bg-primary text-white px-4 py-2 rounded-lg shadow-md hover:bg-primary-dark transition-colors flex items-center gap-2 text-sm font-medium active:scale-95 transform"
					>
						Add
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
							<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
						</svg>
					</button>
				</div>
			</div>
		</div>
	)
}