import {authMiddleware} from '@clerk/nextjs'
import CreateMiddleware from 'next-intl/middleware'

const intlMiddlaware =CreateMiddleware({
locales:['en','ru','tr','uz'],
defaultLocale:'uz'
})

export default authMiddleware({
    beforeAuth:(req) => intlMiddlaware(req),
    publicRoutes:['/:lng']
})




export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};