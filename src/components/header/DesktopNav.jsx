import { Link } from '../../navigation'
import DesktopLocaleSwitcher from './DesktopLocaleSwitcher'

export default function DesktopNav({ messages, changed }) {
	return (
		<div className="hidden md:flex flex-row justify-between items-center gap-12 h-full font-unna">
			<nav className="grid grid-cols-5 text-center uppercase h-full *:px-4 text-base">
				<Link
					className="hover:scale-110 hover:bg-primary-light flex items-center justify-center"
					href="/our-team"
				>
					{messages.ourTeam}
				</Link>

				<Link
					className="hover:scale-110 hover:bg-primary-light flex items-center justify-center"
					href="/our-pillars"
				>
					{messages.ourPillars}
				</Link>
				<Link
					className="hover:scale-110 hover:bg-primary-light flex items-center justify-center"
					href="/our-products"
				>
					{messages.ourProducts}
				</Link>
				<Link
					className="hover:scale-110 hover:bg-primary-light flex items-center justify-center"
					href="/our-projects"
				>
					{messages.ourProjects}
				</Link>
				<Link
					className="hover:scale-110 hover:bg-primary-light flex items-center justify-center"
					href="/contact"
				>
					{messages.contact}
				</Link>
			</nav>
			<DesktopLocaleSwitcher />
		</div>
	)
}
