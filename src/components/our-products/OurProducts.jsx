'use client'

import { useScroll } from 'framer-motion'
import React, { useRef, useEffect } from 'react'
import Product from './Product'
import { useStore } from '@/store/store'

import { products } from '../../data/data'

export default function OurProducts() {
	const product = useStore((state) => state.product)
	const setProduct = useStore((state) => state.setProduct)
	const ref = useRef(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	})
	let cardHeight
	useEffect(() => {
		//eslint-disable-next-line
		cardHeight = window.innerHeight
		if (product) {
			const element = document.getElementById(product)
			element?.scrollIntoView({ behavior: 'instant' })
			setProduct('')
		}
	})
	return (
		<div className="pt-8 lg:pt-20 pb-16 lg:pb-32 ">
			<div className="-mt-24 lg:-mt-44  lg:pt-20 -mb-16 lg:-mb-32 bg-grey">
				<div className="hidden lg:block w-full h-10" />
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
		</div>
	)
}
