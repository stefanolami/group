'use client'

import { useScroll, motion, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import Image from 'next/image'
import { pillars } from '../../data/data'
import { Link } from '@/i18n/routing'

export default function Pillar({
	position,
	card,
	scrollYProgress,
	cardHeight,
}) {
	const scaleFromPct = (position - 1) / pillars.length
	const y = useTransform(scrollYProgress, [scaleFromPct, 1], [0, cardHeight])

	return (
		<motion.div
			id={card.id}
			className="h-screen w-full sticky top-0 flex origin-top flex-col lg:flex-row items-center justify-start lg:justify-center px-4 lg:gap-20"
			style={{
				y: position === pillars.length ? undefined : y,
				background: card.primary,
			}}
		>
			<div className="relative mx-auto lg:mx-0 w-[65%] lg:w-1/4 aspect-[385/267] mb-16 mt-40 lg:mt-20 lg:mb-40">
				<Image
					src={`/logos${card.icon}`}
					alt={card.id}
					fill
					sizes="(max-width: 640px) 70vw, 35vw"
				/>
			</div>
			<div className="mx-auto lg:mx-0 w-[90%] lg:w-2/5">
				<p
					style={{ color: card.tertiary }}
					className="font-jose text-xs lg:text-xl text-justify"
				>
					{card.text}
				</p>
				{card.link.length > 0 ? (
					<Link
						style={{
							background: card.secondary,
							color: card.primary,
						}}
						href={card.link}
						className="flex items-center justify-center pt-[2px] mt-10 w-28 lg:w-48 h-6 lg:h-8 ml-auto text-xs lg:text-lg font-jose font-bold rounded-md shadow-md hover:shadow-xl hover:brightness-90"
						target="_blank"
					>
						{card.message}
					</Link>
				) : (
					<p
						style={{ color: card.tertiary }}
						className="font-jose text-xs lg:text-xl text-right mt-10"
					>
						{card.message}
					</p>
				)}
			</div>
		</motion.div>
	)
}
