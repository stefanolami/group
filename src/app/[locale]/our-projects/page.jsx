import { use } from "react";
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'
import OurProjects from '../../../components/our-projects/OurProjects'

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
		title: 'Our Projects',
	}
}

export default function OurProjectsPage(props) {
    const params = use(props.params);

    const {
        locale
    } = params;

    unstable_setRequestLocale(locale)
    const t = useTranslations('Index')
    return <OurProjects />
}
