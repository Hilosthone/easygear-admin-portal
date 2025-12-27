'use client'
import React, { useState } from 'react'
import {
  Save,
  User,
  Globe,
  Bell,
  ShieldCheck,
  Loader2,
  Store,
  Construction,
  Search,
  Phone,
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function SettingsPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  // --- EXISTING STATES ---
  const [heroHeadline, setHeroHeadline] = useState(
    'Unleash Your Potential with Our Latest GEARS'
  )
  const [heroSub, setHeroSub] = useState(
    'Discover our newest collection designed for athletes.'
  )

  // --- NEW PROFESSIONAL STATES ---
  const [maintenanceMode, setMaintenanceMode] = useState(false)
  const [currency, setCurrency] = useState('NGN (₦)')
  const [storeEmail, setStoreEmail] = useState('contact@easygear.ng')
  const [seoTitle, setSeoTitle] = useState(
    'EasyGear | Best Sports Gear in Nigeria'
  )
  const [notifications, setNotifications] = useState(true)

  const handleGlobalSave = async () => {
    setLoading(true)
    // Simulate API Call
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      setTimeout(() => setSuccess(false), 2000)
    }, 1000)
  }

  return (
    <div className='max-w-4xl pb-20 space-y-8 animate-in fade-in duration-500'>
      {/* 1. HEADER */}
      <div className='flex flex-col md:flex-row md:items-center justify-between gap-4'>
        <div>
          <h1 className='text-2xl font-bold text-slate-800'>System Settings</h1>
          <p className='text-slate-500'>
            Global configuration for EasyGear platform.
          </p>
        </div>
        <button
          onClick={handleGlobalSave}
          disabled={loading}
          className={cn(
            'flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-bold transition-all shadow-lg active:scale-95 disabled:opacity-70',
            success
              ? 'bg-green-600 text-white'
              : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-200'
          )}
        >
          {loading ? (
            <Loader2 className='animate-spin' size={18} />
          ) : success ? (
            'Saved Successfully!'
          ) : (
            <>
              <Save size={18} /> Save Changes
            </>
          )}
        </button>
      </div>

      {/* 2. STORE STATUS (MAINTENANCE) */}
      <section
        className={cn(
          'p-6 rounded-xl border transition-all',
          maintenanceMode
            ? 'bg-orange-50 border-orange-200'
            : 'bg-white border-slate-200'
        )}
      >
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <div
              className={cn(
                'p-2 rounded-lg',
                maintenanceMode
                  ? 'bg-orange-500 text-white'
                  : 'bg-slate-100 text-slate-500'
              )}
            >
              <Construction size={20} />
            </div>
            <div>
              <h2 className='font-bold text-slate-800'>Maintenance Mode</h2>
              <p className='text-sm text-slate-500'>
                Offline the storefront for updates
              </p>
            </div>
          </div>
          <button
            onClick={() => setMaintenanceMode(!maintenanceMode)}
            className={cn(
              'px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all',
              maintenanceMode
                ? 'bg-orange-600 text-white'
                : 'bg-slate-200 text-slate-600'
            )}
          >
            {maintenanceMode ? 'Active' : 'Disabled'}
          </button>
        </div>
      </section>

      {/* 3. BUSINESS INFO */}
      <section className='bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden'>
        <div className='p-6 border-b border-slate-100 flex items-center gap-2'>
          <Store className='text-blue-600' size={20} />
          <h2 className='font-bold text-slate-800'>Business Configuration</h2>
        </div>
        <div className='p-6 grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='space-y-1.5'>
            <label className='text-sm font-semibold text-slate-700 font-mono uppercase text-[10px]'>
              Base Currency
            </label>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className='w-full p-2.5 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500/20'
            >
              <option>NGN (₦)</option>
              <option>USD ($)</option>
              <option>GBP (£)</option>
            </select>
          </div>
          <div className='space-y-1.5'>
            <label className='text-sm font-semibold text-slate-700 font-mono uppercase text-[10px]'>
              Support Email
            </label>
            <div className='relative'>
              <Phone
                className='absolute left-3 top-3 text-slate-400'
                size={16}
              />
              <input
                type='email'
                value={storeEmail}
                onChange={(e) => setStoreEmail(e.target.value)}
                className='w-full pl-10 p-2.5 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500/20'
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. SEO & SEARCH DISCOVERY */}
      <section className='bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden'>
        <div className='p-6 border-b border-slate-100 flex items-center gap-2'>
          <Search className='text-blue-600' size={20} />
          <h2 className='font-bold text-slate-800'>
            Search Engine Optimization (SEO)
          </h2>
        </div>
        <div className='p-6 space-y-4'>
          <div className='space-y-1.5'>
            <label className='text-sm font-semibold text-slate-700'>
              Google Search Title
            </label>
            <input
              type='text'
              value={seoTitle}
              onChange={(e) => setSeoTitle(e.target.value)}
              className='w-full p-2.5 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500/20'
            />
            <p className='text-[10px] text-slate-400'>
              This is how your site appears in Google searches.
            </p>
          </div>
        </div>
      </section>

      {/* 5. NOTIFICATIONS TOGGLE */}
      <div className='bg-white p-6 rounded-xl border border-slate-200 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <Bell
            className={cn(notifications ? 'text-blue-600' : 'text-slate-400')}
          />
          <div>
            <span className='font-medium text-slate-700 block'>
              Order Alerts
            </span>
            <span className='text-xs text-slate-400'>
              Get email when a new order is placed
            </span>
          </div>
        </div>
        <div
          onClick={() => setNotifications(!notifications)}
          className={cn(
            'w-12 h-6 rounded-full relative transition-all cursor-pointer border',
            notifications
              ? 'bg-blue-600 border-blue-700'
              : 'bg-slate-200 border-slate-300'
          )}
        >
          <div
            className={cn(
              'absolute top-1 w-4 h-4 bg-white rounded-full transition-all shadow-sm',
              notifications ? 'right-1' : 'left-1'
            )}
          />
        </div>
      </div>
    </div>
  )
}
