import { Link } from '@/navigation'
import team from '@/data/team'

export default function OurTeam() {
	const teamArray = Object.values(team)
	return (
		<div className="w-[90%] xl:w-[75%] mx-auto">
			<h1 className="font-unna font-bold text-xl xl:text-[48px] text-center text-black mb-6 xl:mb-10">
				OUR TEAM
			</h1>
			<div className="w-[90%] mx-auto mb-6 xl:mb-16 text-[10px] xl:text-xl text-[#FF0000] text-center font-jose">
				<p className="mb-4 xl:mb-0">
					A strategic communications and public affairs agency which
					brings together a Europe-wide network of experts in
					government relations, legal affairs, association management,
					EU funding, and reputation management.
				</p>
				<p className="">
					The select network includes former political
					decision-makers, Commission officials, association Directors
					and multinational CEOs, as well as award-winning lawyers.
					The consultancy combines tacit knowledge, sectoral expertise
					and professional prowess to give tailored and holistic
					solutions.
				</p>
			</div>
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
