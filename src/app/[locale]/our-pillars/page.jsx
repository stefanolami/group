import OurPillars from '../../../components/our-pillars/OurPillars'

export async function generateMetadata() {
	return {
		title: 'Our Pillars',
	}
}

export default async function OurPillarsPage() {
	return <OurPillars />
}
