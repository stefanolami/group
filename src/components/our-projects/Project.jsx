'use client'

import { motion, useTransform } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import { projects } from '../../data/data'
import { Link } from '@/navigation'

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
			className="h-screen w-full sticky top-0 flex origin-top flex-col xl:flex-row items-center justify-start xl:justify-center px-4 xl:gap-20"
			style={{
				y: position === projects.length ? undefined : y,
				background: card.background,
			}}
		>
			<div className="relative mx-auto xl:mx-0 w-[65%] xl:w-1/4 aspect-[365/248] mb-10 mt-24 xl:mt-0 xl:mb-20">
				<Image
					src={card.icon}
					alt={card.id}
					fill
					sizes="(max-width: 640px) 70vw, 35vw"
				/>
			</div>
			<div className="mx-auto xl:mx-0 w-[90%] xl:w-2/5">
				<p
					style={{ color: card.primary }}
					className="xl:hidden font-jose text-xs xl:text-[18px] xl:leading-[22px] text-justify"
				>
					{card.text}
				</p>
				<div>
					{card.text.map((t, index) => (
						<p
							key={index}
							style={{ color: card.primary }}
							className="hidden xl:block font-jose text-xs xl:text-[18px] xl:leading-[22px] text-justify mb-3"
						>
							{t}
						</p>
					))}
				</div>
				<Link
					style={{ background: card.primary }}
					href=""
					className="flex text-white items-center justify-center pt-[2px] mt-10 w-28 xl:w-48 h-6 xl:h-8 ml-auto text-xs xl:text-lg font-jose font-bold rounded-md shadow-md  hover:shadow-xl hover:brightness-90"
				>
					Read More
				</Link>
			</div>
		</motion.div>
	)
}
