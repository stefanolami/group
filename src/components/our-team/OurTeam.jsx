import { Link } from '@/navigation'
import team from '@/data/team'

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
					>
						<div className="bg-primary-light w-full aspect-[6/9]">
							{member.name}
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}
