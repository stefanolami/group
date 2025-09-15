import { getTranslations } from 'next-intl/server'
import OurPillars from '../../../components/our-pillars/OurPillars'

export async function generateMetadata({ params }) {
	const { locale } = await params
	const t = await getTranslations({
		locale,
		namespace: 'Index' /* replace with metadata file */,
	})

	return {
		title: 'Our Pillars',
	}
}

export default async function OurPillarsPage({ params }) {
	const { locale } = await params
	return <OurPillars />
}
