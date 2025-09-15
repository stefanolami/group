import { getTranslations } from 'next-intl/server'
import HomePage from '@/components/HomePage'
import Hero from '@/components/Hero'

export default async function Home({ params }) {
	const { locale } = await params
	const t = await getTranslations('Index')
	return (
		<>
			<Hero />
			{/* <div className="w-full h-screen"></div> */}
			<HomePage />
		</>
	)
}
