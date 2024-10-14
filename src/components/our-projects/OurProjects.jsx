'use client'

import { useScroll } from 'framer-motion'
import React, { useRef, useEffect } from 'react'
import Project from './Project'
import { useStore } from '@/store/store'

import { projects } from '../../data/data'

export default function OurProjects() {
	const project = useStore((state) => state.project)
	const setProject = useStore((state) => state.setProject)
	const ref = useRef(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	})
	let cardHeight
	useEffect(() => {
		//eslint-disable-next-line
		cardHeight = window.innerHeight
		if (project) {
			const element = document.getElementById(project)
			element?.scrollIntoView({ behavior: 'instant' })
			setProject('')
		}
	})
	return (
		<div className="pt-8 xl:pt-20 pb-16 xl:pb-32 ">
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
		</div>
	)
}
