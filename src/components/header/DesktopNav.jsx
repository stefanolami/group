import { Link } from '@/i18n/routing'
import { usePathname } from '@/i18n/routing'
// import DesktopLocaleSwitcher from './DesktopLocaleSwitcher'

export default function DesktopNav({ messages, inverted }) {
	const path = usePathname()
	return (
		<div
			id="desktop-nav"
			className="hidden md:flex flex-row justify-between items-center gap-12 h-full font-unna font-bold"
		>
			<nav className="grid grid-cols-5 text-center uppercase h-full *:px-4 md:text-xs xl:text-base">
				<Link
					className={`relative 
						${path.startsWith('/our-team') ? 'active-link' : ''}
						${
							inverted
								? 'hover:text-white hover:bg-primary-light'
								: 'hover:bg-primary-light'
						}`}
					href="/our-team"
				>
					{messages.ourTeam}
				</Link>

				<Link
					className={`relative 
						${path == '/our-pillars' ? 'active-link' : ''}
						${
							inverted
								? 'hover:text-white hover:bg-primary-light'
								: 'hover:bg-primary-light'
						}`}
					href="/our-pillars"
				>
					{messages.ourPillars}
				</Link>
				<Link
					className={`relative 
						${path == '/our-products' ? 'active-link' : ''}
						${
							inverted
								? 'hover:text-white hover:bg-primary-light'
								: 'hover:bg-primary-light'
						}`}
					href="/our-products"
				>
					{messages.ourProducts}
				</Link>
				<Link
					className={`relative 
						${path == '/our-projects' ? 'active-link' : ''}
						${
							inverted
								? 'hover:text-white hover:bg-primary-light'
								: 'hover:bg-primary-light'
						}`}
					href="/our-projects"
				>
					{messages.ourProjects}
				</Link>
				<Link
					className={`relative 
						${path == '/contact' ? 'active-link' : ''}
						${
							inverted
								? 'hover:text-white hover:bg-primary-light'
								: 'hover:bg-primary-light'
						}`}
					href="/contact"
				>
					{messages.contact}
				</Link>
			</nav>
			{/* <DesktopLocaleSwitcher /> */}
		</div>
	)
}
