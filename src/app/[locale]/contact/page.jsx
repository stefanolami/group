import { getTranslations } from 'next-intl/server'
import Contact from '@/components/contact/Contact'

export async function generateMetadata({ params }) {
	const { locale } = await params
	const t = await getTranslations({
		locale,
		namespace: 'Index' /* replace with metadata file */,
	})

	return {
		title: 'Contact',
	}
}

export default async function ContactPage({ params }) {
	const { locale } = await params
	const t = await getTranslations('Index')
	return <Contact />
}
