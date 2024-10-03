import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/not-found.tsx',
		'./src/components/NotFound.jsx',
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
				'consulting-tertiary': '#FFF',
				'funding-primary': '#FFF',
				'funding-secondary': '#00A4D5',
				'funding-tertiary': '#1D4967',
				'marketing-primary': '#AA337F',
				'marketing-secondary': '#FFF',
				'marketing-tertiary': '#FFF',
				'production-primary': '#FFF',
				'production-secondary': '#DF8946',
				'production-tertiary': '#4A2C2O',
				'institute-primary': '#6D9544',
				'institute-secondary': '#FFF',
				'institute-tertiary': '#FFF',
				'spaces-primary': '#FFF',
				'spaces-secondary': '#0F2CCA',
				'spaces-tertiary': '#2A2A2A',
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
