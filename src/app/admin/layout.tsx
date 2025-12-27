'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/admin/Sidebar'
import Navbar from '@/components/admin/Navbar'
import LoginPage from '@/components/auth/LoginPage'
import { cn } from '@/lib/utils'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Check if the user has the "VIP Pass" in their browser
    const authStatus = localStorage.getItem('easyGear_auth') === 'true'
    setIsAuthenticated(authStatus)
  }, [])

  const handleLoginSuccess = () => {
    setIsAuthenticated(true)
  }

  // While checking localStorage, show nothing or a loader to prevent "flicker"
  if (isAuthenticated === null)
    return <div className='min-h-screen bg-blue-900' />

  // If not logged in, show the Login Page instead of the Admin Dashboard
  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLoginSuccess} />
  }

  return (
    <div className='flex min-h-screen bg-slate-50'>
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      <div className='flex-1 flex flex-col min-w-0 min-h-screen'>
        <Navbar onMenuClick={() => setSidebarOpen(true)} />

        <main
          className={cn(
            'flex-1 p-4 md:p-8 overflow-x-hidden transition-all duration-300',
            sidebarOpen ? 'opacity-50 lg:opacity-100' : 'opacity-100'
          )}
          onClick={() => {
            if (sidebarOpen) setSidebarOpen(false)
          }}
        >
          <div className='max-w-7xl mx-auto'>{children}</div>
        </main>
      </div>
    </div>
  )
}
