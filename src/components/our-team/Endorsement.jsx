export default function Endorsement({ endorsement }) {
	return (
		<div className="w-screen lg:w-full -ml-[5vw] lg:ml-0 bg-primary-light p-6 lg:px-16 lg:py-8 flex flex-col justify-between items-center overflow text-white">
			<div className="font-jose text-xs italic lg:text-xl text-justify mb-4">
				{endorsement.content.map((element, index) => (
					<p
						className="mb-4 lg:mb-6"
						key={index}
					>
						{element}
					</p>
				))}
			</div>
			<div className="flex flex-col items-end w-full">
				<span className="font-jose text-xs lg:text-xl italic font-bold text-right block">
					{endorsement.name}
				</span>
				<span className="font-jose text-xs lg:text-xl italic text-right block">
					{endorsement.title}
				</span>
			</div>
		</div>
	)
}
