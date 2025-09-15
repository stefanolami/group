'use client'

import { useTheme } from 'next-themes'
import { Toaster as Sonner } from 'sonner'

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
	const { theme = 'system' } = useTheme()

	return (
		<Sonner
			theme={theme as ToasterProps['theme']}
			className="toaster group"
			style={{
				//@ts-expect-error --normal-bg is not recognized
				'--normal-bg': 'var(--popover)',
				'--normal-text': 'var(--popover-foreground)',
				'--normal-border': 'var(--border)',
			}}
			{...props}
		/>
	)
}

export { Toaster }
