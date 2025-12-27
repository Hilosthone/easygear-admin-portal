'use client'
import { Menu, Search, User, Bell } from 'lucide-react'

export default function Navbar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className='h-16 border-b border-slate-200 bg-white flex items-center justify-between px-4 md:px-8 sticky top-0 z-30'>
      <div className='flex items-center gap-4'>
        {/* Mobile Menu Toggle */}
        <button
          onClick={onMenuClick}
          className='lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors'
        >
          <Menu size={24} />
        </button>

        {/* Search Bar */}
        <div className='relative hidden md:block w-64 lg:w-96'>
          <Search
            className='absolute left-3 top-1/2 -translate-y-1/2 text-slate-400'
            size={18}
          />
          <input
            type='text'
            placeholder='Search dashboard...'
            className='w-full pl-10 pr-4 py-2 bg-slate-50 border border-transparent rounded-xl text-sm outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all'
          />
        </div>
      </div>

      <div className='flex items-center gap-4 md:gap-6'>
        {/* Notification Icon */}
        <button className='relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-all group'>
          <Bell size={22} className='group-hover:text-blue-600' />
          {/* Notification Badge */}
          <span className='absolute top-1.5 right-1.5 w-4 h-4 bg-orange-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white'>
            5
          </span>
        </button>

        {/* Vertical Divider */}
        <div className='h-8 w-[1px] bg-slate-200 hidden sm:block'></div>

        {/* User Profile Section */}
        <div className='flex items-center gap-3 cursor-pointer group'>
          <div className='text-right hidden sm:block'>
            <p className='text-sm font-bold text-slate-800 leading-none'>
              Sir Victor
            </p>
            <span className='text-[10px] text-orange-600 font-bold uppercase tracking-wider bg-orange-50 px-1.5 py-0.5 rounded mt-1 inline-block border border-orange-100'>
              Super Admin
            </span>
          </div>

          <div className='relative'>
            <div className='w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-xl shadow-lg shadow-blue-200 group-hover:scale-105 transition-transform'>
              <User size={20} />
            </div>
            {/* Active Status Indicator */}
            <div className='absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full'></div>
          </div>
        </div>
      </div>
    </header>
  )
}
