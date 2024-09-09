import { Link } from '../../navigation'
import DesktopLocaleSwitcher from './DesktopLocaleSwitcher'

export default function DesktopNav({ messages, inverted }) {
	return (
		<div
			id="desktop-nav"
			className="hidden md:flex flex-row justify-between items-center gap-12 h-full font-unna"
		>
			<nav className="grid grid-cols-5 text-center uppercase h-full *:px-4 text-base">
				<Link
					className={
						inverted
							? 'hover:text-white hover:bg-primary-light'
							: 'hover:bg-primary-light'
					}
					href="/our-team"
				>
					{messages.ourTeam}
				</Link>

				<Link
					className={
						inverted
							? 'hover:text-white hover:bg-primary-light'
							: 'hover:bg-primary-light'
					}
					href="/our-pillars"
				>
					{messages.ourPillars}
				</Link>
				<Link
					className={
						inverted
							? 'hover:text-white hover:bg-primary-light'
							: 'hover:bg-primary-light'
					}
					href="/our-products"
				>
					{messages.ourProducts}
				</Link>
				<Link
					className={
						inverted
							? 'hover:text-white hover:bg-primary-light'
							: 'hover:bg-primary-light'
					}
					href="/our-projects"
				>
					{messages.ourProjects}
				</Link>
				<Link
					className={
						inverted
							? 'hover:text-white hover:bg-primary-light'
							: 'hover:bg-primary-light'
					}
					href="/contact"
				>
					{messages.contact}
				</Link>
			</nav>
			<DesktopLocaleSwitcher />
		</div>
	)
}
