import Image from 'next/image'
import Link from 'next/link'

export default function NotFoundHeader() {
	return (
		<div
			className={
				'fixed top-0 w-full text-white z-50 px-6 md:px-10 xl:px-[7%] flex justify-between items-center h-16 xl:h-24 bg-primary'
			}
		>
			<Link
				className="pl-6 md:pl-0 md:py-4 xl:py-7 w-[124px] xl:w-[231px] aspect-[694/186] relative xl:scale-75"
				href="/"
			>
				<Image
					src="/logos/group-logo.png"
					alt="T&P Logo"
					fill
					sizes="(max-width: 640px) 40vw, 40vw"
				/>
			</Link>
		</div>
	)
}
