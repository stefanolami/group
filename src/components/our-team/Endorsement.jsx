export default function Endorsement({ endorsement }) {
	return (
		<div className="w-screen -ml-[5vw] mb-8 bg-primary-light p-6 flex flex-col justify-between items-center overflow text-white">
			<span className="font-jose text-xs italic text-justify mb-4">
				{endorsement.content}
			</span>
			<div className="flex flex-col items-end w-full">
				<span className="font-jose text-xs italic font-bold text-right block">
					{endorsement.name}
				</span>
				<span className="font-jose text-xs italic text-right block">
					{endorsement.title}
				</span>
			</div>
		</div>
	)
}
