import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'T&P Group',
	description: 'Time&Place Group',
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
