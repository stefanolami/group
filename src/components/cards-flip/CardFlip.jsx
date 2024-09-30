'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

import CardFront from './CardFront'
import CardBack from './CardBack'

export default function CardFlip({ pillar }) {
	const [isFlipped, setIsFlipped] = useState(false)

	return (
		<div className="flex items-center justify-center w-full h-full">
			<div
				className="flip-card w-full h-full"
				onMouseEnter={() => setIsFlipped(true)}
				onMouseLeave={() => setIsFlipped(false)}
			>
				<motion.div
					className="flip-card-inner w-full h-full flex items-center justify-center"
					initial={false}
					animate={{ rotateY: isFlipped ? 180 : 360 }}
					transition={{ duration: 0.2, animationDirection: 'normal' }}
				>
					<CardFront pillar={pillar} />
					<CardBack pillar={pillar} />
				</motion.div>
			</div>
		</div>
	)
}
