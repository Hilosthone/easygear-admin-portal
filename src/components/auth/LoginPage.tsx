'use client'
import React, { useState } from 'react'
import { Lock, Mail, Eye, EyeOff, Loader2 } from 'lucide-react'

export default function LoginPage({ onLogin }: { onLogin: () => void }) {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      // ✅ Using relative path to hit the Next.js API route
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (response.ok) {
        localStorage.setItem('easyGear_token', data.token)
        localStorage.setItem('easyGear_auth', 'true')
        localStorage.setItem('user_name', data.user.name)
        localStorage.setItem('user_role', data.user.role)
        onLogin()
      } else {
        setError(data.error || 'Login failed. Please try again.')
      }
    } catch (err) {
      setError(
        'Connection failed. Please check your internet or phone hotspot.'
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='min-h-screen bg-blue-900 flex items-center justify-center p-4'>
      <div className='bg-white w-full max-w-md rounded-2xl p-8 shadow-2xl'>
        <div className='text-center mb-8'>
          <h1 className='text-3xl font-bold italic text-blue-900'>
            easyGear<span className='text-orange-500'>.</span>
          </h1>
          <p className='text-slate-500 mt-2 font-medium'>Admin Portal Login</p>
        </div>

        {error && (
          <div className='mb-6 p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl text-center font-medium'>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className='space-y-5'>
          <div className='space-y-2'>
            <label className='text-sm font-bold text-slate-900'>
              Email Address
            </label>
            <div className='relative'>
              <Mail
                className='absolute left-3 top-3 text-slate-400'
                size={18}
              />
              <input
                type='email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl text-black'
                placeholder='admin@easygear.com'
              />
            </div>
          </div>

          <div className='space-y-2'>
            <label className='text-sm font-bold text-slate-900'>Password</label>
            <div className='relative'>
              <Lock
                className='absolute left-3 top-3 text-slate-400'
                size={18}
              />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-full pl-10 pr-12 py-3 border border-slate-300 rounded-xl text-black'
                placeholder='••••••••'
              />
              <button
                type='button'
                onClick={() => setShowPassword(!showPassword)}
                className='absolute right-3 top-3 text-slate-400'
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            type='submit'
            disabled={isLoading}
            className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2'
          >
            {isLoading ? (
              <Loader2 className='animate-spin' size={20} />
            ) : (
              'Sign In'
            )}
          </button>
        </form>
      </div>
    </div>
  )
}