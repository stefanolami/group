import Header from './Header'
import pick from 'lodash/pick'
import { useMessages } from 'next-intl'
import LocaleSwitcher from './LocaleSwitcher'

export default function HeaderWrapper() {
	const messages = useMessages()

	return (
		<header className="bg-slate-400">
			<Header
				messages={
					// … and provide the relevant messages
					pick(messages, 'Navigation')
				}
			>
				<LocaleSwitcher />
			</Header>
		</header>
	)
}
