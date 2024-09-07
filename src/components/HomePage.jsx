import Image from 'next/image'
import { Link } from '@/navigation'

export default function HomePage() {
	const icons = [
		'consulting-logo.png',
		'funding-logo.png',
		'marketing-logo.png',
		'production-logo.png',
		'institute-logo.png',
	]
	return (
		<div className="-mb-32">
			<h2 className="font-unna font-bold text-2xl text-center mt-12 mb-6">
				OUR PILLARS
			</h2>
			<div className="bg-grey w-full py-[10%] flex flex-row flex-wrap justify-center items-center gap-8">
				{icons.map((icon, index) => {
					return (
						<Link
							href=""
							key={index}
							className="relative w-1/3 aspect-[359/244]"
						>
							<Image
								src={`/logos/${icon}`}
								alt="Pillar Logo"
								fill
								sizes="(max-width: 640px) 50vw, 15vw"
							/>
						</Link>
					)
				})}
				<Link
					href=""
					className="relative w-1/3 aspect-[482/183]"
				>
					<Image
						src="/logos/spaces-logo.png"
						alt="Pillar Logo"
						fill
						sizes="(max-width: 640px) 50vw, 15vw"
					/>
				</Link>

				{/* <ul>
					{icons.map((icon, index) => {
						return (
							<li key={index} className="relative w-full h-full">
								<Image
									src={`/logos/${icon}`}
									alt="Pillar Logo"
									fill
									sizes="(max-width: 640px) 50vw, 15vw"
								/>
							</li>
						)
					})}
				</ul> */}
			</div>
			<h2 className="font-unna font-bold text-2xl text-center mt-12 mb-6">
				OUR PRODUCTS
			</h2>
			<div className="bg-grey w-full h-80"></div>
			<h2 className="font-unna font-bold text-2xl text-center mt-12 mb-6">
				OUR PROJECTS
			</h2>
			<div className="bg-grey w-full h-80"></div>
		</div>
	)
}
