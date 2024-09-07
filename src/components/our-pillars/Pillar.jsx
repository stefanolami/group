'use client'

import { useScroll, motion, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import Image from 'next/image'
import { pillars } from '../../data/data'

const CARD_HEIGHT = 500

export default function Pillar({ position, card, scrollYProgress }) {
	const scaleFromPct = (position - 1) / pillars.length
	const y = useTransform(
		scrollYProgress,
		[scaleFromPct, 1],
		[0, -CARD_HEIGHT]
	)
	const isOddCard = position % 2

	return (
		<motion.div
			id={card.id}
			className="pillar w-full sticky top-0 flex origin-top flex-col items-center justify-center px-4"
			style={{
				y: position === pillars.length ? undefined : y,
				background: card.primary,
				color: card.secondary,
			}}
		>
			<div className="relative mx-auto w-2/4 aspect-[385/267] mt-8 mb-8">
				<Image
					src={`/logos/${card.id}-logo.png`}
					alt={card.id}
					fill
					sizes="60vw"
				/>
			</div>
			<p className="mx-auto w-[90%] font-jose text-xs text-justify">
				{card.text}
			</p>
		</motion.div>
	)
}
