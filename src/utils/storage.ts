'use client'

export function getLocalStorage<T>(key: string, defaultValue: T): T {
	const stickyValue = localStorage.getItem(key)
	if (stickyValue !== null && stickyValue !== undefined) {
		try {
			return JSON.parse(stickyValue) as T
		} catch (error) {
			console.error(
				`Error parsing stored JSON for key "${key}": ${error}`
			)
			return defaultValue as T
		}
	} else {
		return defaultValue as T
	}
}

export function setLocalStorage<T>(key: string, value: T) {
	localStorage.setItem(key, JSON.stringify(value))
}
