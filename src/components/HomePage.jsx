'use client'

import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { pillars, products, projects } from '@/data/data'
import CardSlide from '@/components/cards-flip/CardSlide'
import { useStore } from '@/store/store'

export default function HomePage() {
	const setPillar = useStore((state) => state.setPillar)
	const setProduct = useStore((state) => state.setProduct)
	const setProject = useStore((state) => state.setProject)
	return (
		<div
			id="home"
			className="pb-16 lg:pb-32 w-full lg:w-3/4 max-w-[1250px] mx-auto"
		>
			<div className="mt-6 lg:mt-16 relative mx-auto w-3/4 lg:w-[45%] aspect-[550/160]">
				<Image
					src={'/logos/group-logo-home.png'}
					alt="Group Logo"
					fill
					sizes="(max-width: 640px) 70vw, 40vw"
				/>
			</div>
			<div className="font-jose mx-auto w-4/5 lg:w-4/5 text-primary text-sm lg:text-2xl flex flex-col items-center justify-center gap-4">
				<p className="mt-2 text-center">
					With international presence and local access, Time&Place
					Group provides integral approaches to impacting
					decision-making.
				</p>
				<p className="mt-4 text-center">
					The Group is designed to develop and implement tools with
					two approaches in mind:
				</p>
				<ul className="list-disc list-inside text-center">
					<li>
						Nourishing your decision-making through information,
						knowledge, strategic advice, education, training and
						professional opportunities;
					</li>
					<li>
						Building your channels of access to governments,
						regulatory bodies, public procurement, financing and
						funding agencies, your current and future customers,
						your peers, and public opinion.
					</li>
				</ul>
				<p className="mt-4 text-center">
					Powered by people, and just a little bit of AI.
				</p>
			</div>
			<div className="bg-primary w-4/5 mx-auto lg:w-full h-[2px] mt-10"></div>
			<h2>OUR PILLARS</h2>
			<div className="w-full px-[10%] py-2 lg:px-0 lg:py-0 bg-white grid grid-cols-2 grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-3 lg:gap-6">
				{pillars.map((pillar) => {
					return (
						<Link
							href={`/our-pillars`}
							key={pillar.id}
							className="relative w-full aspect-[360/288]"
							onClick={() => setPillar(pillar.id)}
						>
							<CardSlide element={pillar} />
						</Link>
					)
				})}
			</div>
			<div className="bg-primary w-4/5 mx-auto lg:w-full h-[2px] mt-10"></div>
			<h2>OUR PRODUCTS</h2>
			<div className="w-full px-[10%] py-2 lg:px-0 lg:py-0 bg-white grid grid-cols-2 grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-3 lg:gap-6">
				{products.map((product) => {
					return (
						<Link
							href={`/our-products`}
							key={product.id}
							className="relative w-full aspect-[360/288]"
							onClick={() => setProduct(product.id)}
						>
							<CardSlide element={product} />
						</Link>
					)
				})}
			</div>
			<div className="bg-primary w-4/5 mx-auto lg:w-full h-[2px] mt-10"></div>
			<h2>OUR PROJECTS</h2>
			<div className="w-full px-[10%] py-2 lg:px-0 lg:py-0 bg-white mx-auto grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6">
				{projects.map((project) => {
					return (
						<Link
							href={`/our-projects`}
							key={project.id}
							className="relative w-full aspect-[360/288]"
							onClick={() => setProject(project.id)}
						>
							<CardSlide element={project} />
						</Link>
					)
				})}
			</div>
		</div>
	)
}
