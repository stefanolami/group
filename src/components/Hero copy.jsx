import Image from 'next/image'

export default function Hero() {
	return (
		<div
			id="hero"
			className="bg-primary h-svh xl:h-screen flex flex-col justify-end"
		>
			<div className="relative w-full aspect-[4000/2250]">
				<Image
					src={'/hero/hero.png'}
					alt="hero illustration"
					fill
					sizes="100vw"
					className="z-10"
				/>
			</div>
			<h1 className="text-white text-balance font-unna text-[40px] mb-16 ml-6 xl:hidden z-20">
				Right TIME. <br></br>Right PLACE. <br></br>Your IMPACT.
			</h1>
			<h1 className="hidden xl:block text-white font-unna text-[36px] text-center mb-5 z-20">
				Right TIME. Right PLACE. Your IMPACT.
			</h1>
		</div>
	)
}
