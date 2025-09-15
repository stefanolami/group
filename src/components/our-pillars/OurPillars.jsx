'use client'

import { useScroll } from 'framer-motion'
import React, { useRef, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Pillar from './Pillar'
import { useStore } from '@/store/store'

import { pillars } from '../../data/data'

export default function OurPillars() {
	const pillar = useStore((state) => state.pillar)
	const setPillar = useStore((state) => state.setPillar)
	const ref = useRef(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	})
	let cardHeight
	useEffect(() => {
		//eslint-disable-next-line
		cardHeight = window.innerHeight
		if (pillar) {
			const element = document.getElementById(pillar)
			element?.scrollIntoView({ behavior: 'instant' })
			setPillar('')
		}
	})
	return (
		<div className="pt-8 lg:pt-20 pb-16 lg:pb-32">
			<div className="-mt-24 lg:-mt-44  lg:pt-20 -mb-16 lg:-mb-32 bg-consulting-primary">
				<div className="hidden lg:block w-full h-10 bg-consulting-primary" />
				<div
					ref={ref}
					className="relative -mt-8 "
				>
					{pillars.map((pillar, index) => (
						<Pillar
							key={pillar.id}
							card={pillar}
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
