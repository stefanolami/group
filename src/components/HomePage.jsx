import Image from 'next/image'
import { Link } from '@/navigation'
import { pillars, products } from '@/data/data'

export default function HomePage() {
	return (
		<div
			id="home"
			className="-mb-32"
		>
			<h2>OUR PILLARS</h2>
			<div className="bg-grey w-full py-[10%] xl:py-20 flex flex-row flex-wrap justify-center items-center gap-x-[12%] gap-y-8 xl:gap-[4%]">
				{pillars.map((pillar, index) => {
					return (
						<Link
							href={`/our-pillars`}
							key={index}
							className="relative w-[30%] xl:w-[9%] aspect-[359/244]"
						>
							<Image
								src={`/logos/grid/${pillar.id}.png`}
								alt="Pillar Logo"
								fill
								sizes="(max-width: 640px) 50vw, 15vw"
							/>
						</Link>
					)
				})}
			</div>
			<h2>OUR PRODUCTS</h2>
			<div className="bg-grey w-full py-[10%] xl:py-20 flex flex-row flex-wrap justify-center items-center gap-x-[12%] gap-y-8 xl:gap-[7%]">
				{products.map((product, index) => {
					return (
						<Link
							href={`/our-products`}
							key={index}
							className="relative w-[30%] xl:w-[10%] aspect-[473/210]"
						>
							<Image
								src={product.icon}
								alt="Product Logo"
								fill
								sizes="(max-width: 640px) 50vw, 15vw"
							/>
						</Link>
					)
				})}
			</div>
			<h2>OUR PROJECTS</h2>
			<div className="bg-grey w-full h-80"></div>
		</div>
	)
}
