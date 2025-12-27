'use client'
import React from 'react'
import {
  CreditCard,
  ArrowDownLeft,
  ArrowUpRight,
  CheckCircle2,
  XCircle,
} from 'lucide-react'

const transactions = [
  {
    id: 'TX-9901',
    customer: 'John Doe',
    method: 'Visa •••• 4242',
    date: 'Dec 24, 2025',
    amount: '₦45,000',
    status: 'Successful',
  },
  {
    id: 'TX-9902',
    customer: 'Sarah Smith',
    method: 'Mastercard •••• 5555',
    date: 'Dec 23, 2025',
    amount: '₦120,500',
    status: 'Successful',
  },
  {
    id: 'TX-9903',
    customer: 'Mike Obi',
    method: 'Bank Transfer',
    date: 'Dec 22, 2025',
    amount: '₦15,000',
    status: 'Failed',
  },
]

export default function PaymentsPage() {
  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-end'>
        <div>
          <h1 className='text-2xl font-bold text-slate-800'>
            Payments & Transactions
          </h1>
          <p className='text-slate-500 text-sm'>
            Monitor all incoming revenue from easyGear.
          </p>
        </div>
        <div className='text-right'>
          <p className='text-xs font-bold text-slate-400 uppercase tracking-widest'>
            Available Balance
          </p>
          <h2 className='text-3xl font-black text-blue-600'>₦1,240,500</h2>
        </div>
      </div>

      {/* Payment Stats */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4'>
          <div className='p-3 bg-green-100 text-green-600 rounded-xl'>
            <ArrowDownLeft size={24} />
          </div>
          <div>
            <p className='text-sm text-slate-500 font-medium'>Successful</p>
            <p className='text-xl font-bold text-slate-800'>₦1.1M</p>
          </div>
        </div>
        <div className='bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4'>
          <div className='p-3 bg-red-100 text-red-600 rounded-xl'>
            <ArrowUpRight size={24} />
          </div>
          <div>
            <p className='text-sm text-slate-500 font-medium'>Refunds</p>
            <p className='text-xl font-bold text-slate-800'>₦45,000</p>
          </div>
        </div>
        <div className='bg-[#136aed] p-6 rounded-2xl text-white shadow-lg flex items-center gap-4'>
          <div className='p-3 bg-blue-500/20 text-blue-400 rounded-xl'>
            <CreditCard size={24} />
          </div>
          <div>
            <p className='text-sm text-slate-400 font-medium'>Pending Payout</p>
            <p className='text-xl font-bold'>₦150,000</p>
          </div>
        </div>
      </div>

      {/* Transaction Table */}
      <div className='bg-white rounded-2xl border border-slate-200 overflow-hidden'>
        <table className='w-full text-left'>
          <thead className='bg-slate-50 border-b border-slate-200 text-slate-500 text-xs font-bold uppercase'>
            <tr>
              <th className='px-6 py-4'>Transaction ID</th>
              <th className='px-6 py-4'>Customer</th>
              <th className='px-6 py-4'>Method</th>
              <th className='px-6 py-4'>Date</th>
              <th className='px-6 py-4'>Amount</th>
              <th className='px-6 py-4'>Status</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-slate-100'>
            {transactions.map((tx) => (
              <tr
                key={tx.id}
                className='text-sm hover:bg-slate-50 transition-colors'
              >
                <td className='px-6 py-4 font-mono font-medium text-slate-500'>
                  {tx.id}
                </td>
                <td className='px-6 py-4 font-bold text-slate-800'>
                  {tx.customer}
                </td>
                <td className='px-6 py-4 text-slate-600'>{tx.method}</td>
                <td className='px-6 py-4 text-slate-500'>{tx.date}</td>
                <td className='px-6 py-4 font-bold text-slate-800'>
                  {tx.amount}
                </td>
                <td className='px-6 py-4'>
                  <span
                    className={`flex items-center gap-1 font-bold ${
                      tx.status === 'Successful'
                        ? 'text-green-600'
                        : 'text-red-500'
                    }`}
                  >
                    {tx.status === 'Successful' ? (
                      <CheckCircle2 size={14} />
                    ) : (
                      <XCircle size={14} />
                    )}
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
