import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const baseUrl = 'https://www.groupontap.com'

	return [
		{
			url: `${baseUrl}/our-team`,
		},
	]
}
