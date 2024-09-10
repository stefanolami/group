'use client'

import { useScroll, motion, useTransform } from 'framer-motion'
import React, { useRef, useEffect } from 'react'
import Product from './Product'

import { products } from '../../data/data'

export default function OurProducts() {
	const ref = useRef(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	})
	let cardHeight
	useEffect(() => {
		cardHeight = window.innerHeight
	})
	return (
		<div className="-mt-24 xl:-mt-44  xl:pt-20 -mb-16 xl:-mb-32 bg-consulting-primary">
			<div className="hidden xl:block w-full h-10 bg-consulting-primary" />
			<div
				ref={ref}
				className="relative -mt-8 "
			>
				{products.map((product, index) => (
					<Product
						key={product.id}
						card={product}
						position={index + 1}
						scrollYProgress={scrollYProgress}
						cardHeight={cardHeight}
					/>
				))}
			</div>
		</div>
	)
}
