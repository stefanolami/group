import Image from 'next/image'
import { Link } from '@/navigation'
import { pillars, products, projects } from '@/data/data'
import CardSlide from '@/components/cards-flip/CardSlide'

export default function HomePage() {
	return (
		<div
			id="home"
			className="pb-16 xl:pb-32 w-full xl:w-3/4 max-w-[1250px] mx-auto"
		>
			<div className="mt-6 xl:mt-16 relative mx-auto w-3/4 xl:w-[45%] aspect-[550/160]">
				<Image
					src={'/logos/group-logo-home.png'}
					alt="Group Logo"
					fill
				/>
			</div>
			<p className="mt-2 font-jose mx-auto w-4/5 xl:w-4/5 text-primary text-sm xl:text-2xl text-center">
				With international presence and local access, a holistic
				approach to impacting decision-making and making decisions.
			</p>
			<h2>OUR PILLARS</h2>
			<div className="w-full px-[10%] py-2 xl:px-0 xl:py-0 bg-grey xl:bg-white grid grid-cols-2 grid-rows-3 xl:grid-cols-3 xl:grid-rows-2 gap-3 xl:gap-6">
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
			<div className="w-full px-[10%] py-2 xl:px-0 xl:py-0 bg-grey xl:bg-white grid grid-cols-2 grid-rows-3 xl:grid-cols-3 xl:grid-rows-2 gap-3 xl:gap-6">
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
			<div className="w-full xl:w-2/3 px-[10%] py-2 xl:px-0 xl:py-0 bg-grey xl:bg-white mx-auto grid grid-cols-2 xl:grid-cols-2 gap-3 xl:gap-6">
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
