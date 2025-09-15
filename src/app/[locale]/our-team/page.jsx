import { getTranslations } from 'next-intl/server'
import OurTeam from '../../../components/our-team/OurTeam'

export async function generateMetadata({ params }) {
	const { locale } = await params
	const t = await getTranslations({
		locale,
		namespace: 'Index' /* replace with metadata file */,
	})

	return {
		title: 'Our Team',
	}
}

export default async function OurTeamPage({ params }) {
	const { locale } = await params
	const t = await getTranslations('Index')
	return <OurTeam />
}
