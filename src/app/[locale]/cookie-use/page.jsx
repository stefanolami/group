import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'
import OurProjects from '../../../components/our-projects/OurProjects'

export async function generateMetadata({ params: { locale } }) {
	const t = await getTranslations({
		locale,
		namespace: 'Index' /* replace with metadata file */,
	})

	return {
		title: t('title'),
	}
}

export default function CookieUsePage({ params: { locale } }) {
	unstable_setRequestLocale(locale)
	const t = useTranslations('Index')
	return <OurProjects />
}
