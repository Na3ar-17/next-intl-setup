import createMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'
import { locales, localePrefix } from './navigation'

export default function middleware(request: NextRequest) {
  const { cookies, url } = request
  const currentLocale = cookies.get('NEXT_LOCALE')?.value
  const [, , , localeFromUrl] = url.split('/')
  const isMainPage = url === 'http://localhost:3000/'

  const newUrl = url.replace(/\/([^\/]+)\/?$/, `/${currentLocale}`)

  // if (isMainPage) {
  //   return NextResponse.redirect(`${url}${currentLocale}`)
  // }

  // if (!locales.includes(localeFromUrl as any)) {
  //   return NextResponse.redirect(newUrl)
  // }

  const nextIntlMiddleware = createMiddleware({
    locales,
    defaultLocale: 'en',
  })

  return nextIntlMiddleware(request)
}

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(de|en)/:path*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!_next|_vercel|.*\\..*).*)',
  ],
}
