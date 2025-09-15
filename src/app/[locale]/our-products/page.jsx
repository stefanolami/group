import { getTranslations } from 'next-intl/server'
import OurProducts from '../../../components/our-products/OurProducts'

export async function generateMetadata({ params }) {
	const { locale } = await params
	const t = await getTranslations({
		locale,
		namespace: 'Index' /* replace with metadata file */,
	})

	return {
		title: 'Our Products',
	}
}

export default async function OurPillarsPage({ params }) {
	const { locale } = await params
	const t = await getTranslations('Index')
	return <OurProducts />
}
