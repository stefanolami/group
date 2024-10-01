import Image from 'next/image'
import { Link } from '@/navigation'
import { pillars, products, projects } from '@/data/data'
import CardSlide from '@/components/cards-flip/CardSlide'

export default function HomePage() {
	return (
		<div
			id="home"
			className="-mb-32 w-4/5 xl:w-3/4 max-w-[1250px] mx-auto"
		>
			<div className="mt-6 xl:mt-16 relative mx-auto w-3/4 xl:w-[45%] aspect-[550/160]">
				<Image
					src={'/logos/group-logo-home.png'}
					alt="Group Logo"
					fill
				/>
			</div>
			<p className="mt-2 font-jose mx-auto w-4/5 xl:w-4/5 text-primary text-sm xl:text-2xl text-center">
				With international presence and local access, Time&Place Group a
				holistic approach to impacting decision-making and making
				decisions. 
			</p>
			<h2>OUR PILLARS</h2>
			<div className="w-full grid grid-cols-2 grid-rows-3 xl:grid-cols-3 xl:grid-rows-2 gap-3 xl:gap-6">
				{pillars.map((pillar, index) => {
					return (
						<Link
							href={`/our-pillars?p=${pillar.id}`}
							key={index}
							className="relative w-full aspect-[360/288]"
						>
							<CardSlide element={pillar} />
						</Link>
					)
				})}
			</div>
			<h2>OUR PRODUCTS</h2>
			<div className="w-full grid grid-cols-2 grid-rows-3 xl:grid-cols-3 xl:grid-rows-2 gap-3 xl:gap-6">
				{products.map((product, index) => {
					return (
						<Link
							href={`/our-products?p=${product.id}`}
							key={index}
							className="relative w-full aspect-[360/288]"
						>
							<CardSlide element={product} />
						</Link>
					)
				})}
			</div>
			<h2>OUR PROJECTS</h2>
			<div className="w-full grid grid-cols-2 grid-rows-3 xl:grid-cols-3 xl:grid-rows-2 gap-3 xl:gap-6">
				{projects.map((project, index) => {
					return (
						<Link
							href={`/our-projects?p=${project.id}`}
							key={index}
							className="relative w-full aspect-[360/288]"
						>
							<CardSlide element={project} />
						</Link>
					)
				})}
			</div>
		</div>
	)
}
