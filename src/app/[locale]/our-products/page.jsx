import OurProducts from '../../../components/our-products/OurProducts'

export async function generateMetadata() {
	return {
		title: 'Our Products',
	}
}

export default async function OurPillarsPage() {
	return <OurProducts />
}
