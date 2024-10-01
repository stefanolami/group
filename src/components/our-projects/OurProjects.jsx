'use client'

import { useScroll } from 'framer-motion'
import React, { useRef, useEffect } from 'react'
import Project from './Project'

import { projects } from '../../data/data'

export default function OurProjects() {
	const ref = useRef(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	})
	let cardHeight
	useEffect(() => {
		//eslint-disable-next-line
		cardHeight = window.innerHeight
	})
	return (
		<div className="-mt-24 xl:-mt-44  xl:pt-20 -mb-16 xl:-mb-32 bg-grey">
			<div className="hidden xl:block w-full h-10" />
			<div
				ref={ref}
				className="relative -mt-8 "
			>
				{projects.map((project, index) => (
					<Project
						key={project.id}
						card={project}
						position={index + 1}
						scrollYProgress={scrollYProgress}
						cardHeight={cardHeight}
					/>
				))}
			</div>
		</div>
	)
}
