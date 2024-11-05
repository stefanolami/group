import { use } from "react";
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'
import OurProducts from '../../../components/our-products/OurProducts'

export async function generateMetadata(props) {
    const params = await props.params;

    const {
        locale
    } = params;

    const t = await getTranslations({
		locale,
		namespace: 'Index' /* replace with metadata file */,
	})

    return {
		title: 'Our Products',
	}
}

export default function OurPillarsPage(props) {
    const params = use(props.params);

    const {
        locale
    } = params;

    unstable_setRequestLocale(locale)
    const t = useTranslations('Index')
    return <OurProducts />
}
