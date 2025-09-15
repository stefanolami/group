import type { Config } from 'tailwindcss'

const config: Config = {
	darkMode: ['class'],
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
				/* primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			}, */
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
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))',
				},
			},
			fontFamily: {
				jose: ['var(--font-jose)'],
				unna: ['var(--font-unna)'],
				robo: ['var(--font-robo)'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}
export default config
