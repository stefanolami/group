'use client'

export default function ErrorBoundary() {
	return (
		<div className="px-[10%] h-screen flex-col gap-5 text-lg xl:text-2xl font-jose flex items-center justify-center text-center bg-primary text-white -mt-16 xl:-mt-24">
			We&apos;re sorry, this team member doesn&apos;t seem to exist. Make
			sure the name is correct and try again.
		</div>
	)
}
