'use client'
import React from 'react'
import { Mail, Phone } from 'lucide-react'

const customers = [
  {
    name: 'John Doe',
    email: 'john.doe@gmail.com',
    phone: '+234 801 234 5678',
    year: 2023,
    orders: 12,
    spent: '₦540,000',
  },
  {
    name: 'Sarah Smith',
    email: 'sarah.s@gmail.com',
    phone: '+234 703 111 2222',
    year: 2024,
    orders: 5,
    spent: '₦210,000',
  },
  {
    name: 'Hilosthone Sulyman',
    email: 'hilosthone.s@gmail.com',
    phone: '+234 805 333 4444',
    year: 2025,
    orders: 20,
    spent: '₦1,079,000',
  },
]

export default function CustomersPage() {
  return (
    <div className='space-y-6'>
      <h1 className='text-2xl font-bold text-slate-800'>Customers</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {customers.map((customer) => (
          <div
            key={customer.email}
            className='bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow'
          >
            <div className='flex items-center gap-4 mb-4'>
              <div className='w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-full font-bold text-lg'>
                {customer.name.charAt(0)}
              </div>
              <div>
                <h3 className='font-bold text-slate-800'>{customer.name}</h3>
                        <p className='text-xs text-slate-500'>Customer since {customer.year}</p>
              </div>
            </div>

            <div className='space-y-2 mb-6'>
              <div className='flex items-center gap-2 text-sm text-slate-600'>
                <Mail size={14} className='text-slate-400' /> {customer.email}
              </div>
              <div className='flex items-center gap-2 text-sm text-slate-600'>
                <Phone size={14} className='text-slate-400' /> {customer.phone}
              </div>
            </div>

            <div className='grid grid-cols-2 gap-4 pt-4 border-t border-slate-100'>
              <div>
                <p className='text-[10px] uppercase font-bold text-slate-400'>
                  Total Orders
                </p>
                <p className='font-bold text-slate-800'>{customer.orders}</p>
              </div>
              <div>
                <p className='text-[10px] uppercase font-bold text-slate-400'>
                  Total Spent
                </p>
                <p className='font-bold text-blue-600'>{customer.spent}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
