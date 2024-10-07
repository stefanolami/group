import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: {
		default: 'T&P Group',
		template: '%s - T&P Group',
	},
	description: 'Time&Place Group',
	openGraph: {
		title: 'T&P Group',
		description: 'Right TIME. Right PLACE. Your IMPACT.',
		url: 'https://www.groupontap.com',
		siteName: 'T&P Group',
		images: [
			{
				url: 'https://group-sage.vercel.app/android-chrome-1024x1024.png', // Must be an absolute URL
				width: 1024,
				height: 1024,
			},
			{
				url: 'https://group-sage.vercel.app/android-chrome-512x512.png', // Must be an absolute URL
				width: 512,
				height: 512,
			},
			{
				url: 'https://group-sage.vercel.app/android-chrome-192x192.png', // Must be an absolute URL
				width: 192,
				height: 192,
				alt: 'My custom alt',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
}

export default function RootLayout({
	children,
	params: { locale },
}: {
	children: React.ReactNode
	params: { locale: string }
}) {
	return children
}
