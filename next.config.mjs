import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: '/team-member/stefano-lami',
				destination: '/en/our-team/stefano-lami',
				permanent: true,
			},
			{
				source: '/team-member/kjeld-olesen',
				destination: '/en/our-team/kjeld-olesen',
				permanent: true,
			},
			{
				source: '/team-member/glenn-cezanne',
				destination: '/en/our-team/glenn-cezanne',
				permanent: true,
			},
			{
				source: '/team-member/corina-gheorgheza',
				destination: '/en/our-team/corina-gheorgheza',
				permanent: true,
			},
			{
				source: '/team-member/guilherme-c-ferreira',
				destination: '/en/our-team/guilherme-ferreira',
				permanent: true,
			},
			{
				source: '/team-member/matheus-carvalho',
				destination: '/en/our-team/matheus-carvalho',
				permanent: true,
			},
			{
				source: '/team-member/shumaila-afzal',
				destination: '/en/our-team/shumaila-afzal',
				permanent: true,
			},
		]
	},
}

export default withNextIntl(nextConfig)
