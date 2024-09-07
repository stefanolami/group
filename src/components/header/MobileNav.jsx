'use client'

import { motion, MotionConfig } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link } from '../../navigation'
import MobileLocaleSwitcher from './MobileLocaleSwitcher'

export default function MobileNav({ messages }) {
	const [active, setActive] = useState(false)

	useEffect(() => {
		if (active) {
			document.body.classList.add('overflow-y-hidden')
		} else {
			document.body.classList.remove('overflow-y-hidden')
		}
	}, [active])

	return (
		<div className="md:hidden flex flex-row font-unna">
			<MobileLocaleSwitcher />
			<MotionConfig
				transition={{
					duration: 0.4,
					ease: 'easeInOut',
				}}
			>
				<motion.button
					initial={false}
					onClick={() => setActive((pv) => !pv)}
					className="relative h-10 w-10 ml-3 rounded-full z-50 bg-primary-light scale-90"
					animate={active ? 'open' : 'closed'}
				>
					<motion.span
						className="absolute h-1 w-6 bg-white rounded-sm"
						style={{
							left: '50%',
							top: '34%',
							x: '-50%',
							y: '-50%',
						}}
						variants={{
							open: {
								rotate: ['0deg', '0deg', '45deg'],
								top: ['34%', '50%', '50%'],
							},
							closed: {
								rotate: ['45deg', '0deg', '0deg'],
								top: ['50%', '50%', '34%'],
							},
						}}
					/>
					<motion.span
						className="absolute h-1 w-6 bg-white rounded-sm"
						style={{
							left: '50%',
							top: '50%',
							x: '-50%',
							y: '-50%',
						}}
						variants={{
							open: {
								rotate: ['0deg', '0deg', '-45deg'],
							},
							closed: {
								rotate: ['-45deg', '0deg', '0deg'],
							},
						}}
					/>
					<motion.span
						className="absolute h-1 w-6 bg-white rounded-sm"
						style={{
							left: '50%',
							bottom: '34%',
							x: '-50%',
							y: '50%',
						}}
						variants={{
							open: {
								rotate: ['0deg', '0deg', '45deg'],
								left: '50%',
								bottom: ['34%', '50%', '50%'],
							},
							closed: {
								rotate: ['45deg', '0deg', '0deg'],
								left: '50%',
								bottom: ['50%', '50%', '34%'],
							},
						}}
					/>
				</motion.button>
				<motion.div>
					<motion.div
						className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur flex flex-col justify-around items-center"
						initial={false}
						animate={active ? 'open' : 'closed'}
						variants={{
							open: {
								x: 0,
								opacity: 1,
								pointerEvents: 'auto',
							},
							closed: {
								x: '100%',
								opacity: 0,
								pointerEvents: 'none',
							},
						}}
					>
						<nav className="flex flex-col justify-center gap-4 items-center text-white">
							<Link
								onClick={() => setActive(false)}
								href="/our-team"
							>
								{messages.ourTeam}
							</Link>
							<Link
								onClick={() => setActive(false)}
								href="/our-pillars"
							>
								{messages.ourPillars}
							</Link>
							<Link
								onClick={() => setActive(false)}
								href="/our-products"
							>
								{messages.ourProducts}
							</Link>
							<Link
								onClick={() => setActive(false)}
								href="/our-projects"
							>
								{messages.ourProjects}
							</Link>
							<Link
								onClick={() => setActive(false)}
								href="/contact"
							>
								{messages.contact}
							</Link>
						</nav>
					</motion.div>
				</motion.div>
			</MotionConfig>
		</div>
	)
}
