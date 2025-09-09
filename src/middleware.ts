import { NextRequest, NextResponse } from 'next/server'

import { cookies } from 'next/headers'
import { cookieName, cookiePrefix } from '@/constants/cookies'

export async function middleware(request: NextRequest) {
  const cookieStore = await cookies()
  const sessionCookie = cookieStore.get(`${cookiePrefix}.${cookieName}`)
  const isLoggedIn = !!sessionCookie?.value

  if (!isLoggedIn) return NextResponse.redirect(new URL('/', request.url))
  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard'],
}
