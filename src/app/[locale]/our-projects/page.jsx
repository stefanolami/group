import { getTranslations } from 'next-intl/server'
import OurProjects from '../../../components/our-projects/OurProjects'

export async function generateMetadata({ params }) {
	const { locale } = await params
	const t = await getTranslations({
		locale,
		namespace: 'Index' /* replace with metadata file */,
	})

	return {
		title: 'Our Projects',
	}
}

export default async function OurProjectsPage({ params }) {
	const { locale } = await params
	return <OurProjects />
}
