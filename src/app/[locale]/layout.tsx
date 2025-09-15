// import { jose, unna } from '@/app/fonts'
import { Suspense } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import HeaderWrapper from '@/components/header/HeaderWrapper'
import Footer from '@/components/footer/Footer'
import Loading from '@/components/Loading'
/* import GoogleAnalytics from '@/components/GoogleAnalytics' */
import CookieBanner from '@/components/CookieBanner'
// import { GoogleAnalytics } from '@next/third-parties/google'

// Can be imported from a shared config
const locales = ['en']

export function generateStaticParams() {
	return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const messages = await getMessages()
	return (
		<NextIntlClientProvider messages={messages}>
			<Suspense fallback={<Loading />}>
				<HeaderWrapper />
				<main className="">{children}</main>
				<CookieBanner />
				<Footer />
			</Suspense>
		</NextIntlClientProvider>
	)
}
