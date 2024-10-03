import type { Metadata } from 'next'
import { jose, unna } from '@/app/fonts'
import { unstable_setRequestLocale } from 'next-intl/server'
import { Suspense } from 'react'
import HeaderWrapper from '@/components/header/HeaderWrapper'
import Footer from '@/components/footer/Footer'
import Loading from '@/components/Loading'
import Head from 'next/head'

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
			<Head>
				<link
					rel="apple-touch-icon"
					sizes="144x144"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link
					rel="manifest"
					href="/site.webmanifest"
				/>
				<link
					rel="mask-icon"
					href="/safari-pinned-tab.svg"
					color="#5bbad5"
				/>
				<meta
					name="msapplication-TileColor"
					content="#da532c"
				/>
				<meta
					name="theme-color"
					content="#ffffff"
				/>
			</Head>
			<body className="relative pt-16 xl:pt-24 pb-[85px] xl:pb-[200px] min-h-screen">
				<Suspense fallback={<Loading />}>
					<HeaderWrapper />
					<main className="">{children}</main>
					<Footer />
				</Suspense>
			</body>
		</html>
	)
}
