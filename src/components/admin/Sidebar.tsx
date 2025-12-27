'use client'
import React, { useEffect, useState } from 'react'
import { X, LogOut, User as UserIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ADMIN_NAV_LINKS } from '@/constants/navigation'
import { cn } from '@/lib/utils'

interface SidebarProps {
  isOpen: boolean
  setIsOpen: (val: boolean) => void
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const pathname = usePathname()
  const [adminName, setAdminName] = useState('Admin')
  const [adminRole, setAdminRole] = useState('Staff')

  // Load admin details from localStorage on mount
  useEffect(() => {
    const name = localStorage.getItem('user_name')
    const role = localStorage.getItem('user_role')
    if (name) setAdminName(name)
    if (role) setAdminRole(role)
  }, [])

  const notifications: Record<string, number> = {
    Orders: 5,
    Payments: 2,
    Customers: 12,
  }

  const handleLogout = () => {
    localStorage.removeItem('easyGear_auth')
    localStorage.removeItem('easyGear_token')
    localStorage.removeItem('user_name')
    localStorage.removeItem('user_role')
    window.location.href = '/admin' // Redirect and refresh
  }

  return (
    <aside
      className={cn(
        'fixed inset-y-0 left-0 z-[70] w-64 bg-blue-700 text-white flex flex-col transition-transform duration-300 transform lg:translate-x-0 lg:sticky lg:top-0 lg:h-screen border-r border-blue-950 shadow-xl',
        isOpen ? 'translate-x-0' : '-translate-x-full'
      )}
    >
      {/* Brand Logo */}
      <div className='p-8 flex items-center justify-between shrink-0'>
        <Link
          href='/admin'
          className='text-2xl font-bold italic tracking-tight'
        >
          easyGear<span className='text-orange-500'>.</span>
        </Link>
        <button
          onClick={() => setIsOpen(false)}
          className='lg:hidden p-1 text-blue-200 hover:text-white'
        >
          <X size={24} />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className='flex-1 px-4 space-y-1 overflow-y-auto overflow-x-hidden custom-scrollbar'>
        {ADMIN_NAV_LINKS.map((link) => {
          const hasNotification = notifications[link.name]
          return (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                'flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-all group',
                pathname === link.href
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40'
                  : 'text-blue-200/70 hover:bg-blue-800 hover:text-white'
              )}
            >
              <div className='flex items-center gap-3'>
                <link.icon
                  size={19}
                  className={cn(
                    'transition-colors',
                    pathname === link.href
                      ? 'text-white'
                      : 'text-blue-400 group-hover:text-white'
                  )}
                />
                <span className='font-medium'>{link.name}</span>
              </div>
              {hasNotification && (
                <span
                  className={cn(
                    'flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-lg text-[10px] font-bold',
                    pathname === link.href
                      ? 'bg-white text-blue-600'
                      : 'bg-orange-500 text-white'
                  )}
                >
                  {hasNotification}
                </span>
              )}
            </Link>
          )
        })}
      </nav>

      {/* Footer: User Profile & Logout */}
      <div className='p-4 border-t border-blue-950 shrink-0 space-y-2'>
        <div className='flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-800/50 border border-white/5'>
          <div className='w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white shrink-0'>
            <UserIcon size={16} />
          </div>
          <div className='min-w-0'>
            <p className='text-xs font-bold truncate text-white'>{adminName}</p>
            <p className='text-[10px] text-blue-300 uppercase tracking-wider font-medium'>
              {adminRole}
            </p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className='flex items-center gap-3 px-4 py-3 w-full rounded-xl text-sm font-medium text-white hover:bg-red-500/10 hover:text-red-400 transition-all group'
        >
          <LogOut size={19} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  )
}
