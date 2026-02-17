import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'
import { NextRequest, NextResponse } from 'next/server'

const BOT_PATTERNS =
	/Googlebot|Bingbot|SemrushBot|AhrefsBot|MJ12bot|DotBot|PetalBot|BLEXBot|bytespider|GPTBot|CCBot|anthropic-ai|Claude-Web|YandexBot|Slurp|DuckDuckBot|Baiduspider|facebookexternalhit|Twitterbot|rogerbot|linkedinbot|embedly|quora link preview|showyoubot|outbrain|pinterest|applebot|Sogou|ia_archiver/i

const intlMiddleware = createMiddleware(routing)

export default function middleware(request: NextRequest) {
	const userAgent = request.headers.get('user-agent') || ''

	// Short-circuit for bots: skip expensive i18n logic, just serve the page
	if (BOT_PATTERNS.test(userAgent)) {
		return NextResponse.next()
	}

	return intlMiddleware(request)
}

export const config = {
	// Match only internationalized pathnames, exclude static files
	matcher: [
		'/((?!_next|api|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff|woff2|ttf|eot|json|xml|txt|mp4|mp3|pdf)).*)',
	],
}
