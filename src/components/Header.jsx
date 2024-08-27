'use client'

import LocaleSwitcher from './LocaleSwitcher'
import Navbar from './Navbar'

export default function Header({ messages, children }) {
	console.log(messages)
	const navTrans = messages?.Navigation
	return (
		<div className="bg-slate-500 text-white mx-auto w-1/2 flex flex-row justify-between items-center px-10">
			<Navbar messages={navTrans} />
			{children}
		</div>
	)
}
