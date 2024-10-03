import { Link } from '@/navigation'
import team from '@/data/team'
import Image from 'next/image'

export default function OurTeam() {
	const teamArray = Object.values(team)
	return (
		<div className="pt-8 xl:pt-20 pb-16 xl:pb-32 w-[90%] xl:w-[75%] mx-auto">
			<h1 className="font-unna font-bold text-xl xl:text-[48px] text-center text-black mb-6 xl:mb-10">
				OUR TEAM
			</h1>
			<div className="grid grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-5">
				{teamArray.map((member, index) => (
					<Link
						href={`/our-team/${member.path}`}
						key={index}
						className="w-full aspect-[265/390] relative border-primary shadow-md hover:shadow-2xl group"
					>
						<Image
							alt={`${member.name} Picture`}
							src={member.img}
							fill
							sizes="(max-width: 640px) 50vw, 20vw"
						/>
						<div className="w-full h-[20%] absolute bottom-0 bg-primary group-hover:bg-primary-light z-20 text-white font-jose font-bold text-xs xl:text-lg text-center flex items-center flex-col justify-center">
							<span>{member.imgName}</span>
							<span>title</span>
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}
