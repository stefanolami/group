import Endorsement from './Endorsement'
import { team, managingTeam } from '@/data/team'
import Image from 'next/image'

export default function TeamMember({ name }) {
	let member
	if (name == 'glenn-cezanne' || name == 'corina-gheorgheza') {
		member = Object.values(managingTeam).find(
			(member) => member.path === name
		)
	} else {
		member = Object.values(team).find((member) => member.path === name)
	}

	return (
		<div className="w-[90%] lg:w-[70%] max-w-[1000px] mx-auto pt-8 lg:pt-20 pb-16 lg:pb-32 text-primary font-robo">
			<div className="w-full flex flex-row items-start justify-between mb-8">
				<div className=" lg:mt-8">
					<h2 className="font-robo font-bold text-xl lg:text-[40px] mb-4 lg:mb-8 uppercase">
						{member.name}
					</h2>
					<ul className="font-jose text-[10px] lg:text-lg italic">
						{member.titles.map((title, index) => (
							<li key={index}>{title}</li>
						))}
					</ul>
				</div>
				<div className="w-1/4 aspect-[265/390] relative shadow-lg">
					<Image
						alt={`${member.name} Picture`}
						src={member.img}
						fill
						sizes="(max-width: 640px) 50vw, 20vw"
					/>
				</div>
			</div>
			<div className="font-jose text-xs lg:text-lg text-justify">
				{member.introduction.map((element, index) => (
					<p
						className="mb-4 lg:mb-6"
						key={index}
					>
						{element}
					</p>
				))}
				{member.introductionEndorsement && (
					<div>
						<Endorsement
							endorsement={member.introductionEndorsement}
						/>
					</div>
				)}
			</div>
			{member.paragraphs.map((paragraph, index) => (
				<div
					key={index}
					className=" mt-8 lg:mt-16"
				>
					<h3 className="font-robo font-bold text-xl lg:text-3xl mb-4 lg:mb-6">
						{paragraph.title}
					</h3>
					<div className="font-jose text-xs lg:text-lg mb-2 lg:mb-4 text-justify">
						{paragraph.content.map((element, index) => (
							<p
								className="mb-4 lg:mb-6"
								key={index}
							>
								{element}
							</p>
						))}
					</div>
					{paragraph.list && (
						<ul className="font-jose text-xs lg:text-lg mb-2 lg:mb-4 text-justify list-disc pl-6">
							{paragraph.list.map((element, index) => (
								<li key={index}>{element}</li>
							))}
						</ul>
					)}
					{paragraph.endorsement && (
						<div>
							<Endorsement endorsement={paragraph.endorsement} />
						</div>
					)}
				</div>
			))}
			{member.path === 'kjeld-olesen' && (
				<p className="mb-4 lg:mb-6 font-jose text-xs lg:text-lg ">
					Kjeld speaks Danish, English, French and German.
				</p>
			)}
			<div className="mt-10">
				<h3 className="font-robo font-bold text-xl lg:text-3xl lg:mb-2">
					Contact
				</h3>
				<span className="w-full h-[2px] bg-black block"></span>
				<ul className="font-jose text-xs lg:text-lg mt-2">
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
