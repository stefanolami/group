import { Link } from '@/navigation'
import Image from 'next/image'

export default function Footer() {
	const socialMediaIcons = [
		'/social-media/facebook.png',
		'/social-media/instagram.png',
		'/social-media/linkedin.png',
		'/social-media/tiktok.png',
		'/social-media/whatsapp.png',
		'/social-media/x.png',
		'/social-media/youtube.png',
	]

	return (
		<div className="w-full bg-primary h-[85px] xl:h-[280px] py-1 absolute bottom-0 flex flex-col items-center justify-between text-white">
			<ul className="flex flex-row justify-center items-center gap-2 xl:gap-8 mt-2 xl:mt-12 mb-1">
				{socialMediaIcons.map((icon, index) => {
					return (
						<li
							key={index}
							className="w-4 xl:w-8 h-4 xl:h-8 relative"
						>
							<Link
								href=""
								className="w-full h-full"
							>
								{/* eslint-disable */}
								<img
									src={icon}
									alt="Social Media Icon"
									className="w-full h-full"
								></img>
								{/* eslint-enable */}
							</Link>
						</li>
					)
				})}
			</ul>
			<nav className="flex flex-row justify-center items-center leading-none text-[10px] xl:text-lg">
				<Link
					href="/cookie-use"
					className="font-unna text-center px-4 xl:px-16 border-r border-white"
				>
					COOKIE USE
				</Link>
				<Link
					href="/terms-and-conditions"
					className="font-unna text-center px-4 xl:px-16 border-r border-white"
				>
					TERMS AND CONDITIONS
				</Link>
				<Link
					href="privacy-policy"
					className="font-unna text-center px-4 xl:px-16"
				>
					PRIVACY POLICY
				</Link>
			</nav>
			<span className="block font-jose italic text-[8px] xl:text-base text-center mb-1 xl:mb-5">
				© 2024 Time&Place Group. All rights reserved.
			</span>
		</div>
	)
}
