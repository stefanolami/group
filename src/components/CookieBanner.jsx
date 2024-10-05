'use client'

import { useState, useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '@/utils/storage'
import { Link } from '@/navigation'

export default function CookieBanner() {
	const [cookieConsent, setCookieConsent] = useState(null)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const storedCookieConsent = getLocalStorage('cookieConsent', null)
		setCookieConsent(storedCookieConsent)
		setIsLoading(false)
	}, [])

	useEffect(() => {
		if (cookieConsent !== null) {
			setLocalStorage('cookieConsent', cookieConsent)
		}
		const newValue = cookieConsent ? 'granted' : 'denied'
		if (typeof window !== 'undefined' && window.gtag) {
			window.gtag('consent', 'update', {
				analytics_storage: newValue,
			})
		}
	}, [cookieConsent])

	if (isLoading || cookieConsent !== null) {
		return null
	}

	return (
		<div className="fixed bottom-3 left-3 right-3 bg-white text-black p-4 rounded-md shadow-md z-40">
			<div className="container mx-auto flex justify-between items-center font-jose text-primary xl:text-lg">
				<p>
					We use cookies to ensure you get the best experience on our
					website. Learn more here:
					<Link
						href="/cookie-use"
						className="underline mx-3"
					>
						Cookie Use
					</Link>
					<Link
						href="/privacy-policy"
						className="underline"
					>
						Privacy Policy
					</Link>
				</p>
				<div>
					<button
						className="bg-primary-light shadow-md hover:shadow-xl text-white px-4 py-2 rounded mr-4 hover:scale-105"
						onClick={() => setCookieConsent(true)}
					>
						Accept
					</button>
					<button
						className="bg-primary shadow-md hover:shadow-xl text-white px-4 py-2 rounded hover:scale-105"
						onClick={() => setCookieConsent(false)}
					>
						Decline
					</button>
				</div>
			</div>
		</div>
	)
}
