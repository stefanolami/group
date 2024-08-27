'use client'

import { Link } from '../../navigation'
import { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { cn } from '@/utils/cn'

import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

export default function Header(messages) {
	const navTrans = messages?.messages?.Navigation
	const { scrollY } = useScroll()

	const [hidden, setHidden] = useState(false)

	useMotionValueEvent(scrollY, 'change', (latest) => {
		const previous = scrollY.getPrevious()
		if (latest > previous && latest > 200) {
			setHidden(true)
		} else {
			setHidden(false)
		}
	})

	return (
		<motion.div
			variants={{
				visible: {
					y: 0,
					backgroundColor: '#4F5648',
					color: '#fff',
				},
				hidden: {
					y: '-100%',
					backgroundColor: '#FFFFFF00',
					color: '#fff',
				},
			}}
			animate={hidden ? 'hidden' : 'visible'}
			transition={{ duration: 0.3, ease: 'easeInOut' }}
			className={
				'fixed top-0 w-full bg-transparent text-white z-50 md:px-10 xl:px-28  flex justify-between items-center h-16'
			}
		>
			<Link
				className="pl-6 md:pl-0 md:py-4 xl:py-7"
				href="/"
			>
				T&P
			</Link>

			<DesktopNav messages={navTrans} />

			<MobileNav messages={navTrans} />
		</motion.div>
	)
}
