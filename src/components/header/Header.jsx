'use client'

import { Link } from '@/i18n/routing'
import { useState, useEffect } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import Image from 'next/image'
import { usePathname } from '@/i18n/routing'

import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

export default function Header(messages) {
	const navTrans = messages?.messages?.Navigation
	const { scrollY } = useScroll()

	const path = usePathname()

	const [hidden, setHidden] = useState(false)
	const [inverted, setInverted] = useState(false)
	const [style, setStyle] = useState({ background: '#4F5648', color: '#FFF' })
	const [icon, setIcon] = useState('/logos/group-logo.png')

	useMotionValueEvent(scrollY, 'change', (latest) => {
		const previous = scrollY.getPrevious()
		if (latest > previous && latest > 200) {
			setHidden(true)
		} else {
			setHidden(false)
		}
	})

	useEffect(() => {
		if (path !== '/') {
			setStyle({ background: '#FFF', color: '#4F5648' })
			setIcon('/logos/group-logo-green.png')
			setInverted(true)
		} else {
			setStyle({ background: '#4F5648', color: '#FFF' })
			setIcon('/logos/group-logo.png')
			setInverted(false)
		}
	}, [path])

	return (
		<motion.div
			variants={{
				visible: {
					y: 0,
					backgroundColor: style.background,
					color: style.color,
				},
				hidden: {
					y: '-100%',
					/* backgroundColor: '#FFFFFF00', */
					color: '#fff',
				},
			}}
			animate={hidden ? 'hidden' : 'visible'}
			transition={{ duration: 0.3, ease: 'easeInOut' }}
			className={
				'fixed top-0 w-full text-white z-50 px-6 md:px-10 xl:px-[7%] flex justify-between items-center h-16 xl:h-24'
			}
		>
			<Link
				className="pl-6 md:pl-0 md:py-4 xl:py-7 w-[124px] xl:w-[231px] aspect-[694/186] relative xl:scale-75"
				href="/"
			>
				<Image
					src={icon}
					alt="T&P Logo"
					fill
					sizes="(max-width: 640px) 40vw, 40vw"
				/>
			</Link>

			<DesktopNav
				inverted={inverted}
				messages={navTrans}
			/>

			<MobileNav messages={navTrans} />
		</motion.div>
	)
}
