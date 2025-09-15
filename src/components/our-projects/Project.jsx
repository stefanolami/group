'use client'

import { motion, useTransform } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import { projects } from '../../data/data'
import { Link } from '@/i18n/routing'

export default function Project({
	position,
	card,
	scrollYProgress,
	cardHeight,
}) {
	const scaleFromPct = (position - 1) / projects.length
	const y = useTransform(scrollYProgress, [scaleFromPct, 1], [0, -cardHeight])

	return (
		<motion.div
			id={card.id}
			className="h-screen w-full sticky top-0 flex origin-top flex-col lg:flex-row items-center justify-start lg:justify-center px-4 lg:gap-20"
			style={{
				y: position === projects.length ? undefined : y,
				background: card.background,
			}}
		>
			<div className="relative mx-auto lg:mx-0 w-[65%] lg:w-1/4 aspect-[365/248] mb-10 mt-24 lg:mt-0 lg:mb-20">
				<Image
					src={card.icon}
					alt={card.id}
					fill
					sizes="(max-width: 640px) 70vw, 35vw"
				/>
			</div>
			<div className="mx-auto lg:mx-0 w-[90%] lg:w-2/5">
				<p
					style={{ color: card.primary }}
					className="lg:hidden font-jose text-xs lg:text-[18px] lg:leading-[22px] text-justify"
				>
					{card.text}
				</p>
				<div>
					{card.text.map((t, index) => (
						<p
							key={index}
							style={{ color: card.primary }}
							className="hidden lg:block font-jose text-xs lg:text-[18px] lg:leading-[22px] text-justify mb-3"
						>
							{t}
						</p>
					))}
				</div>
				{card.link.length > 0 ? (
					<Link
						href={card.link}
						className="bg-black text-white flex items-center justify-center pt-[2px] mt-10 w-28 lg:w-48 h-6 lg:h-8 ml-auto text-xs lg:text-lg font-jose font-bold rounded-md shadow-md hover:shadow-xl hover:brightness-90"
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
