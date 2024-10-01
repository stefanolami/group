import Image from 'next/image'

export default function CardBack({ element }) {
	return (
		<div className="relative w-full h-full flex items-center justify-center">
			<Image
				src={`${element.grid}-back.png`}
				alt="Pillar Logo"
				fill
				sizes="(max-width: 640px) 50vw, 20vw"
			/>
		</div>
	)
}
