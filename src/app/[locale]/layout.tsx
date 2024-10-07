import { jose, unna } from '@/app/fonts'
import { unstable_setRequestLocale } from 'next-intl/server'
import { Suspense } from 'react'
import HeaderWrapper from '@/components/header/HeaderWrapper'
import Footer from '@/components/footer/Footer'
import Loading from '@/components/Loading'
/* import GoogleAnalytics from '@/components/GoogleAnalytics' */
import CookieBanner from '@/components/CookieBanner'
import { GoogleAnalytics } from '@next/third-parties/google'

// Can be imported from a shared config
const locales = ['en']

export function generateStaticParams() {
	return locales.map((locale) => ({ locale }))
}

export default function LocaleLayout({
	children,
	params: { locale },
}: {
	children: React.ReactNode
	params: { locale: string }
}) {
	unstable_setRequestLocale(locale)
	return (
		<html
			lang={locale}
			className={`${jose.variable} ${unna.variable}`}
		>
			<GoogleAnalytics gaId={'G-MEJHPJY420'} />
			<body className="relative pt-16 xl:pt-24 pb-[85px] xl:pb-[200px] min-h-screen">
				<Suspense fallback={<Loading />}>
					<HeaderWrapper />
					<main className="">{children}</main>
					<CookieBanner />
					<Footer />
				</Suspense>
			</body>
		</html>
	)
}
