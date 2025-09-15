import { Link } from '@/i18n/routing'
import { team, managingTeam } from '@/data/team'
import Image from 'next/image'

export default function OurTeam() {
	const managingTeamArray = Object.values(managingTeam)
	const teamArray = Object.values(team)
	return (
		<div className="pt-8 lg:pt-20 pb-16 lg:pb-32 w-[90%] lg:w-[75%] max-w-[600px] lg:max-w-[1200px] mx-auto">
			<h1 className="font-unna font-bold text-xl lg:text-[48px] text-center text-primary mb-6 lg:mb-10">
				OUR TEAM
			</h1>
			<div className="mx-auto lg:w-1/2 grid grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-5 mb-4 lg:mb-5">
				{managingTeamArray.map((member, index) => (
					<Link
						href={`/our-team/${member.path}`}
						key={member.path}
						className="w-full aspect-[265/390] relative border-primary shadow-md hover:shadow-2xl group"
					>
						<Image
							alt={`${member.name} Picture`}
							src={member.img}
							fill
							sizes="(max-width: 640px) 50vw, 20vw"
						/>
						<div className="w-full h-[20%] absolute bottom-0 bg-primary group-hover:bg-primary-light z-20 text-white font-jose text-xs lg:text-lg text-center flex items-center flex-col justify-center">
							<span className="font-bold">{member.imgName}</span>
							<span>{member.imgTitle}</span>
						</div>
					</Link>
				))}
			</div>
			<div className="hidden lg:block">
				<div className="mx-auto lg:w-3/4 grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
					{teamArray.map((member, index) =>
						index < 3 ? (
							<Link
								href={`/our-team/${member.path}`}
								key={member.path}
								className="w-full aspect-[265/390] relative border-primary shadow-md hover:shadow-2xl group"
							>
								<Image
									alt={`${member.name} Picture`}
									src={member.img}
									fill
									sizes="(max-width: 640px) 50vw, 20vw"
								/>
								<div className="w-full h-[20%] absolute bottom-0 bg-primary group-hover:bg-primary-light z-20 text-white font-jose text-xs lg:text-lg text-center flex items-center flex-col justify-center">
									<span className="font-bold">
										{member.imgName}
									</span>
									<span>{member.imgTitle}</span>
								</div>
							</Link>
						) : null
					)}
				</div>
				<div className="mx-auto mt-5 lg:w-3/4 grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 ">
					{teamArray.map((member, index) =>
						index >= 3 ? (
							<Link
								href={`/our-team/${member.path}`}
								key={member.path}
								className="w-full aspect-[265/390] relative border-primary shadow-md hover:shadow-2xl group"
							>
								<Image
									alt={`${member.name} Picture`}
									src={member.img}
									fill
									sizes="(max-width: 640px) 50vw, 20vw"
								/>
								<div className="w-full h-[20%] absolute bottom-0 bg-primary group-hover:bg-primary-light z-20 text-white font-jose text-xs lg:text-lg text-center flex items-center flex-col justify-center">
									<span className="font-bold">
										{member.imgName}
									</span>
									<span>{member.imgTitle}</span>
								</div>
							</Link>
						) : null
					)}
				</div>
			</div>
			<div className="lg:hidden">
				<div className="mx-auto lg:w-3/4 grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
					{teamArray.map((member, index) => (
						<Link
							href={`/our-team/${member.path}`}
							key={member.path}
							className="w-full aspect-[265/390] relative border-primary shadow-md hover:shadow-2xl group"
						>
							<Image
								alt={`${member.name} Picture`}
								src={member.img}
								fill
								sizes="(max-width: 640px) 50vw, 20vw"
							/>
							<div className="w-full h-[20%] absolute bottom-0 bg-primary group-hover:bg-primary-light z-20 text-white font-jose text-xs lg:text-lg text-center flex items-center flex-col justify-center">
								<span className="font-bold">
									{member.imgName}
								</span>
								<span>{member.imgTitle}</span>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}
