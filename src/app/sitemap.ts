import { MetadataRoute } from 'next'
import { getPathname } from '@/i18n/routing'

const locales = ['en']
const defaultLocale = 'en'
const baseUrl = 'https://www.groupontap.com'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		getEntry('/'),
		getEntry('/our-team'),
		getEntry({
			pathname: '/our-team/[name]',
			query: { name: 'glenn-cezanne' },
		}),
		getEntry({
			pathname: '/our-team/[name]',
			query: { name: 'corina-gheorgheza' },
		}),
		getEntry({
			pathname: '/our-team/[name]',
			query: { name: 'cristina-andriuc' },
		}),
		getEntry({
			pathname: '/our-team/[name]',
			query: { name: 'matheus-carvalho' },
		}),
		getEntry({
			pathname: '/our-team/[name]',
			query: { name: 'guilherme-ferreira' },
		}),
		getEntry({
			pathname: '/our-team/[name]',
			query: { name: 'stefano-lami' },
		}),
		getEntry({
			pathname: '/our-team/[name]',
			query: { name: 'kjeld-olesen' },
		}),
		getEntry({
			pathname: '/our-team/[name]',
			query: { name: 'joao-dos-santos' },
		}),
		getEntry('/our-projects'),
		getEntry('/our-products'),
		getEntry('/our-pillars'),
		getEntry('/contact'),
		getEntry('/privacy-policy'),
		getEntry('/cookie-use'),
		getEntry('/terms-and-conditions'),
	]
}

type Href = Parameters<typeof getPathname>[0]['href']

function getEntry(href: Href) {
	return {
		url: getUrl(href, defaultLocale),
		alternates: {
			languages: Object.fromEntries(
				locales.map((locale) => [locale, getUrl(href, locale)])
			),
		},
	}
}

function getUrl(href: Href, locale: any) {
	const pathname = getPathname({ locale, href })
	return `${baseUrl}/${locale}${pathname === '/' ? '' : pathname}`
}
