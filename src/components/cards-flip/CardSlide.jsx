'use client'

import { motion, useAnimationControls } from 'framer-motion'

import CardFront from './CardFront'
import CardBack from './CardBack'

export default function CardSlide({ pillar }) {
	const controls = useAnimationControls()

	const handleHover = () => {
		controls.start('slide')
		console.log('hover')
	}

	const endHover = () => {
		controls.start('initial')
	}

	return (
		<motion.div
			className="relative flex items-center justify-center w-full h-full overflow-hidden"
			onHoverStart={handleHover}
			onHoverEnd={endHover}
		>
			<CardFront pillar={pillar} />
			<motion.div
				className="absolute left-0 w-full h-full z-10"
				variants={{
					initial: {
						y: '100%',
					},
					slide: {
						y: 0,
					},
					exit: {
						y: 144,
					},
				}}
				transition={{
					duration: 0.4,
					ease: 'easeInOut',
				}}
				initial="initial"
				animate={controls}
			>
				<CardBack pillar={pillar} />
			</motion.div>
		</motion.div>
	)
}
