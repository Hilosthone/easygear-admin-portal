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
      <body className='antialiased bg-slate-50 text-slate-900'>
        {/* We only show content once isAuthenticated is no longer null.
           This prevents the "Missing HTML/Body" error because the tags 
           above are always rendered.
        */}
        {isAuthenticated === null ? (
          <div className='min-h-screen flex items-center justify-center'>
            <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600'></div>
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