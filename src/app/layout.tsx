import './globals.css'
import { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import { jose, unna } from '@/app/fonts'

export const metadata: Metadata = {
	title: {
		default: 'Time&Place Group',
		template: '%s - Time&Place Group',
	},
	description: 'Time&Place Group',
	openGraph: {
		title: 'Time&Place Group',
		description: 'Right TIME. Right PLACE. Your IMPACT.',
		url: 'https://www.groupontap.com',
		siteName: 'Time&Place Group',
		images: [
			{
				url: 'https://groupontap.com/android-chrome-1024x1024.png', // Must be an absolute URL
				width: 1024,
				height: 1024,
			},
			{
				url: 'https://groupontap.com/android-chrome-512x512.png', // Must be an absolute URL
				width: 512,
				height: 512,
			},
			{
				url: 'https://groupontap.com/android-chrome-192x192.png', // Must be an absolute URL
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
	return (
		<html
			lang={locale}
			className={`${jose.variable} ${unna.variable}`}
		>
			<GoogleAnalytics gaId={'G-MEJHPJY420'} />
			<body className="relative pt-16 xl:pt-24 pb-[85px] xl:pb-[200px] min-h-screen">
				{children}
			</body>
		</html>
	)
}
