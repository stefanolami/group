import Endorsement from './Endorsement'
import team from '@/data/team'

export default function TeamMember({ name }) {
	const member = Object.values(team).find((member) => member.path === name)
	console.log(member)

	return (
		<div className="w-[90%] xl:w-[75%] mx-auto">
			<div className="w-full flex flex-row items-start justify-between mb-8">
				<div className="mt-4 xl:mt-8">
					<h2 className="font-unna font-bold text-base xl:text-[48px] mb-4 xl:mb-8 uppercase">
						{member.name}
					</h2>
					<ul className="font-jose text-[10px] xl:text-lg italic">
						{member.titles.map((title, index) => (
							<li key={index}>{title}</li>
						))}
					</ul>
				</div>
				<div className="bg-primary-light w-1/4 aspect-[6/9]"></div>
			</div>
			<div className="font-jose text-xs text-justify mb-8">
				{member.introduction}
			</div>
			{member.paragraphs.map((paragraph, index) => (
				<div key={index}>
					<h3 className="font-unna font-bold text-xl mb-4">
						{paragraph.title}
					</h3>
					<p className="font-jose text-xs mb-4 text-justify">
						{paragraph.content}
					</p>
					{paragraph.endorsement && (
						<div>
							<Endorsement endorsement={paragraph.endorsement} />
						</div>
					)}
				</div>
			))}
		</div>
	)
}
