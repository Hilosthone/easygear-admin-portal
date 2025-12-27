'use client'
import { useState, useEffect } from 'react'
import LoginPage from '@/components/auth/LoginPage'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

  useEffect(() => {
    // Check if user is logged in
    const status = localStorage.getItem('easyGear_auth') === 'true'
    setIsAuthenticated(status)
  }, [])

  const handleLogin = () => {
    localStorage.setItem('easyGear_auth', 'true')
    setIsAuthenticated(true)
  }

  return (
    <html lang='en'>
      <head>
        {/* This sets the title in the browser tab */}
        <title>EasyGear | Admin Portal</title>
        <meta
          name='description'
          content='Management dashboard for EasyGear sports equipment.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/vercel.svg' />
      </head>
      <body className='antialiased bg-slate-50 text-slate-900'>
        {/* We only show content once isAuthenticated is no longer null.
            This prevents a "flash" of the login page for users who are already logged in.
        */}
        {isAuthenticated === null ? (
          <div className='min-h-screen flex items-center justify-center bg-white'>
            <div className='flex flex-col items-center gap-4'>
              <div className='animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600'></div>
              <p className='text-sm text-slate-500 font-medium'>
                Loading EasyGear...
              </p>
            </div>
          </div>
        ) : isAuthenticated ? (
          <div className='min-h-screen'>{children}</div>
        ) : (
          <LoginPage onLogin={handleLogin} />
        )}
      </body>
    </html>
  )
}
