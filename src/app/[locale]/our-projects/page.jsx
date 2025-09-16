import OurProjects from '../../../components/our-projects/OurProjects'

export async function generateMetadata() {
	return {
		title: 'Our Projects',
	}
}

export default async function OurProjectsPage() {
	return <OurProjects />
}
