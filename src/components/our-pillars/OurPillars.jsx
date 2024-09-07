'use client'

import { useScroll, motion, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import Pillar from './Pillar'

import { pillars } from '../../data/data'

export default function OurPillars() {
	const ref = useRef(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	})
	return (
		<div className="-mt-24 bg-consulting-primary">
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
					/>
				))}
			</div>
		</div>
	)
}
