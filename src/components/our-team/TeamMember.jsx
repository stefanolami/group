import Endorsement from './Endorsement'
import team from '@/data/team'

export default function TeamMember({ name }) {
	const member = Object.values(team).find((member) => member.path === name)
	console.log(member)

	return (
		<div className="w-[90%] xl:w-[70%] mx-auto">
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
			<div className="font-jose text-xs xl:text-lg text-justify mb-2 xl:mb-6">
				{member.introduction.map((element, index) => (
					<p
						className="mb-4 xl:mb-6"
						key={index}
					>
						{element}
					</p>
				))}
			</div>
			{member.paragraphs.map((paragraph, index) => (
				<div key={index}>
					<h3 className="font-unna font-bold text-xl xl:text-3xl mb-4 xl:mb-6">
						{paragraph.title}
					</h3>
					<div className="font-jose text-xs xl:text-lg mb-2 xl:mb-4 text-justify">
						{paragraph.content.map((element, index) => (
							<p
								className="mb-4 xl:mb-6"
								key={index}
							>
								{element}
							</p>
						))}
					</div>
					{paragraph.endorsement && (
						<div>
							<Endorsement endorsement={paragraph.endorsement} />
						</div>
					)}
				</div>
			))}
			<div className="mt-10">
				<h3 className="font-unna font-bold text-xl xl:text-3xl xl:mb-2">
					Contact
				</h3>
				<span className="w-full h-[2px] bg-black block"></span>
				<ul className="font-jose text-xs xl:text-lg mt-2">
					{member.contact.phone && <li>{member.contact.phone}</li>}
					{member.contact.email && <li>{member.contact.email}</li>}
					{member.contact.address && (
						<li>{member.contact.address}</li>
					)}
				</ul>
			</div>
		</div>
	)
}
