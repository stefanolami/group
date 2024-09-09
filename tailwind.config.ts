import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				primary: '#4F5648',
				'primary-light': '#86907E',
				grey: '#EAEAEA',
				'consulting-primary': '#354B83',
				'consulting-secondary': '#FFF',
				'funding-primary': '#FFF',
				'funding-secondary': '#00A4D5',
				'marketing-primary': '#AA337F',
				'marketing-secondary': '#FFF',
				'production-primary': '#FFF',
				'production-secondary': '#DF8946',
				'institute-primary': '#6D9544',
				'institute-secondary': '#FFF',
				'spaces-primary': '#FFF',
				'spaces-secondary': '#0F2CCA',
			},
			fontFamily: {
				jose: ['var(--font-jose)'],
				unna: ['var(--font-unna)'],
			},
		},
	},
	plugins: [],
}
export default config
