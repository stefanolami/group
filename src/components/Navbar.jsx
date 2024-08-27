'use client'

import { Link } from '../navigation'

export default function Navbar({ messages }) {
	const { home, map } = messages
	return (
		<div className="flex py-6 flex-row justify-between items-center">
			<nav className="flex flex-row justify-center items-center gap-4">
				<Link href="/">{home}</Link>
				<Link href="/map">{map}</Link>
			</nav>
		</div>
	)
}
