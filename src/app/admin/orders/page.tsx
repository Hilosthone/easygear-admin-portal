'use client'
import React from 'react'
import { Eye, Truck, CheckCircle, Clock, XCircle } from 'lucide-react'

interface Order {
  id: string
  customer: string
  date: string
  amount: string
  status: 'Pending' | 'Shipped' | 'Delivered' | 'Cancelled' // Strict status types
  items: number
}

const orders: Order[] = [
  {
    id: '#ORD-7721',
    customer: 'John Doe',
    date: 'Dec 24, 2025',
    amount: '₦45,000',
    status: 'Pending',
    items: 2,
  },
  {
    id: '#ORD-7722',
    customer: 'Sarah Smith',
    date: 'Dec 23, 2025',
    amount: '₦120,500',
    status: 'Shipped',
    items: 1,
  },
  {
    id: '#ORD-7723',
    customer: 'Mike Obi',
    date: 'Dec 22, 2025',
    amount: '₦15,000',
    status: 'Delivered',
    items: 3,
  },
  {
    id: '#ORD-7724',
    customer: 'Amina Yusuf',
    date: 'Dec 21, 2025',
    amount: '₦65,200',
    status: 'Pending',
    items: 4,
  },
  {
    id: '#ORD-7725',
    customer: 'Emeka Chenedu',
    date: 'Dec 20, 2025',
    amount: '₦210,000',
    status: 'Shipped',
    items: 2,
  },
  {
    id: '#ORD-7726',
    customer: 'Chioma Adeleke',
    date: 'Dec 19, 2025',
    amount: '₦8,500',
    status: 'Cancelled',
    items: 1,
  },
  {
    id: '#ORD-7727',
    customer: 'Babatunde Raji',
    date: 'Dec 18, 2025',
    amount: '₦95,000',
    status: 'Delivered',
    items: 5,
  },
  {
    id: '#ORD-7728',
    customer: 'Blessing Okon',
    date: 'Dec 18, 2025',
    amount: '₦32,000',
    status: 'Shipped',
    items: 2,
  },
  {
    id: '#ORD-7729',
    customer: 'David Mark',
    date: 'Dec 17, 2025',
    amount: '₦12,000',
    status: 'Pending',
    items: 1,
  },
  {
    id: '#ORD-7730',
    customer: 'Grace Effiong',
    date: 'Dec 16, 2025',
    amount: '₦55,400',
    status: 'Delivered',
    items: 3,
  },
]

export default function OrdersPage() {
  return (
    <div className='space-y-6'>
      <div>
        <h1 className='text-2xl font-bold text-slate-800'>Customer Orders</h1>
        <p className='text-slate-500 text-sm'>
          Track and manage gear shipments.
        </p>
      </div>

      <div className='bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm'>
        <div className='overflow-x-auto'>
          {' '}
          {/* Added wrapper for mobile responsiveness */}
          <table className='w-full text-left border-collapse min-w-[700px]'>
            <thead className='bg-slate-50 border-b border-slate-200 text-slate-600 text-xs uppercase tracking-wider'>
              <tr>
                <th className='px-6 py-4 font-bold'>Order ID</th>
                <th className='px-6 py-4 font-bold'>Customer</th>
                <th className='px-6 py-4 font-bold'>Date</th>
                <th className='px-6 py-4 font-bold'>Amount</th>
                <th className='px-6 py-4 font-bold'>Status</th>
                <th className='px-6 py-4 font-bold text-right'>Action</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-slate-100'>
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className='hover:bg-slate-50/50 transition-colors'
                >
                  <td className='px-6 py-4 font-bold text-blue-600'>
                    {order.id}
                  </td>
                  <td className='px-6 py-4 text-slate-700 font-medium'>
                    {order.customer}
                  </td>
                  <td className='px-6 py-4 text-slate-500 text-sm'>
                    {order.date}
                  </td>
                  <td className='px-6 py-4 font-bold text-slate-800'>
                    {order.amount}
                  </td>
                  <td className='px-6 py-4'>
                    <StatusBadge status={order.status} />
                  </td>
                  <td className='px-6 py-4 text-right'>
                    <button className='text-slate-400 hover:text-blue-600 p-2 hover:bg-blue-50 rounded-lg transition-all'>
                      <Eye size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

type OrderStatus = 'Pending' | 'Shipped' | 'Delivered' | 'Cancelled'

function StatusBadge({ status }: { status: OrderStatus }) {
  const styles: Record<OrderStatus, string> = {
    Pending: 'bg-orange-100 text-orange-600 border-orange-200',
    Shipped: 'bg-blue-100 text-blue-600 border-blue-200',
    Delivered: 'bg-green-100 text-green-600 border-green-200',
    Cancelled: 'bg-red-100 text-red-600 border-red-200',
  }

  const icons: Record<OrderStatus, React.ReactNode> = {
    Pending: <Clock size={12} />,
    Shipped: <Truck size={12} />,
    Delivered: <CheckCircle size={12} />,
    Cancelled: <XCircle size={12} />,
  }

  return (
    <span
      className={`flex items-center gap-1.5 w-fit px-2.5 py-1 rounded-full text-[11px] font-bold border ${styles[status]}`}
    >
      {icons[status]}
      {status}
    </span>
  )
}
