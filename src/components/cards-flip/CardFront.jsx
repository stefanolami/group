import Image from 'next/image'

export default function CardFront({ element }) {
	return (
		<div className="bg-grey flip-card-front w-full h-full flex items-center justify-center">
			<div className="relative w-[70%] aspect-[359/244]">
				<Image
					src={`${element.grid}.png`}
					alt="Pillar Logo"
					fill
					sizes="(max-width: 640px) 50vw, 20vw"
				/>
			</div>
		</div>
	)
}
