'use client'

export default function ErrorBoundary({ error }) {
	return (
		<div className="w-full h-screen flex-col gap-5  text-2xl font-jose flex items-center justify-center bg-primary text-white -mt-16 xl:-mt-24">
			We&apos;re sorry, but something went wrong.
		</div>
	)
}
