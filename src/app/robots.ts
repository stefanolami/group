import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: '*',
				allow: '/',
			},
			// Block aggressive/unwanted crawlers that drive up costs
			{
				userAgent: [
					'SemrushBot',
					'AhrefsBot',
					'MJ12bot',
					'DotBot',
					'PetalBot',
					'BLEXBot',
					'bytespider',
					'GPTBot',
					'CCBot',
					'anthropic-ai',
					'Claude-Web',
					'Bytespider',
					'YisouSpider',
					'DataForSeoBot',
					'Amazonbot',
					'magpie-crawler',
					'Diffbot',
					'Seekport',
				],
				disallow: '/',
			},
		],
		sitemap: 'https://www.groupontap.com/sitemap.xml',
	}
}
