import { Link } from '../../navigation'
import { cn } from '@/utils/cn'
import DesktopLocaleSwitcher from './DesktopLocaleSwitcher'

export default function DesktopNav({ messages, changed }) {
	/* const links = ['about', 'prices', 'deals', 'gallery', 'contacts'] */
	return (
		<div className="hidden md:flex flex-row justify-between items-center gap-12 h-full">
			<nav className="grid grid-cols-5 text-center uppercase h-full *:px-4 text-base">
				{/* {links.map((link) => {
					return (
						<Link
							className={cn(
								'hover:scale-110 flex items-center justify-center hover:bg-[#FFFFFF40] hover:shadow-md',
								changed && 'hover:bg-beige3'
							)}
							href={`/${link}`}
							key={link}
						>
							{messages[link]}
						</Link>
					)
				})} */}
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

/* const NavLink = ({ linkName, changed, messages }) => {
	return (
		<Link
			className={cn(
				'hover:scale-110 flex items-center justify-center',
				changed && 'hover:bg-beige3'
			)}
			href={`/${linkName}`}
		>
			{messages.linkName}
		</Link>
	)
} */
