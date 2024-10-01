import Image from 'next/image'

import ContactForm from './ContactForm'
import ContactMap from './ContactMap'

export default function Contact() {
	return (
		<div className="w-[90%] xl:w-[75%] mx-auto">
			<div className="w-full xl:flex flex-row items-start justify-center gap-32">
				<ContactForm />
				<div className="w-full xl:w-[45%] mt-10 xl:mt-0">
					<h2 className="font-unna font-bold text-lg xl:text-3xl xl:text-center text-primary mb-6">
						Brussels Head Office
					</h2>
					<div className="w-full flex items-center justify-center">
						<div className="flex-col items-start justify-center">
							<div className="flex flex-row xl:flex-col justify-start items-center gap-3 mb-2 xl:mb-6">
								<div className="w-9 xl:w-16 h-9 xl:h-16 relative">
									<Image
										src={'/logos/contact-address.png'}
										alt="Address logo"
										fill
										sizes="(max-width: 640px) 10vw, 7vw"
									/>
								</div>
								<div>
									<span className="block font-jose text-xs xl:text-lg font-primary xl:text-center">
										Rue de la Loi 81 A
									</span>
									<span className="block font-jose text-xs xl:text-lg font-primary xl:text-center">
										1040 Brussels – Belgium
									</span>
								</div>
							</div>
							<div className="flex flex-row xl:flex-col justify-start items-center gap-3  mb-2 xl:mb-6">
								<div className="w-9 xl:w-16 h-9 xl:h-16 relative">
									<Image
										src={'/logos/contact-email.png'}
										alt="Email logo"
										fill
										sizes="(max-width: 640px) 10vw, 7vw"
									/>
								</div>
								<div>
									<span className="block font-jose text-xs xl:text-lg font-primary">
										info@grupontap.com
									</span>
								</div>
							</div>
							<div className="flex flex-row xl:flex-col justify-start items-center gap-3">
								<div className="w-9 xl:w-16 h-9 xl:h-16 relative">
									<Image
										src={'/logos/contact-phone.png'}
										alt="Phone logo"
										fill
										sizes="(max-width: 640px) 10vw, 7vw"
									/>
								</div>
								<div>
									<span className="block font-jose text-xs xl:text-lg font-primary">
										+32 (0) 485 38 22 21
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
