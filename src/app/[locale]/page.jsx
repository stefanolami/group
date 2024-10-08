import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'
import HomePage from '@/components/HomePage'
import Hero from '@/components/Hero'

export default function Home({ params: { locale } }) {
	unstable_setRequestLocale(locale)
	const t = useTranslations('Index')
	return (
		<>
			<Hero />
			{/* <div className="w-full h-screen"></div> */}
			<HomePage />
		</>
	)
}
