'use client'
import StatCard from '@/components/admin/StatCard'
import RecentOrders from '@/components/admin/RecentOrders'
import SalesChart from '@/components/admin/SalesChart'

export default function DashboardPage() {
  return (
    <div className='space-y-8'>
      {/* Header */}
      <div>
        <h1 className='text-2xl font-bold text-slate-800'>
          Dashboard Overview
        </h1>
        <p className='text-slate-500'>
          {/* FIXED: Replaced ' with &apos; to satisfy ESLint */}
          Welcome back, here is what&apos;s happening today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        <StatCard title='Total Revenue' value='₦4,250,000' trend='+12.5%' />
        <StatCard title='Total Orders' value='456' trend='+8.2%' />
        <StatCard title='New Customers' value='89' trend='+14.1%' />
        <StatCard title='Conversion Rate' value='3.4%' trend='+1.2%' />
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {/* Sales Chart - Takes up 2 columns */}
        <div className='lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm'>
          <div className='flex items-center justify-between mb-6'>
            <h3 className='font-bold text-slate-800 text-lg'>Revenue Growth</h3>
            <select className='text-sm border-none bg-slate-50 rounded-lg p-1.5 outline-none font-medium'>
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last 60 Days</option>
              <option>Last 90 Days</option>
            </select>
          </div>
          <SalesChart />
        </div>

        {/* Quick Actions/Small Table - Takes up 1 column */}
        <div className='bg-[#0a192f] p-6 rounded-2xl text-white shadow-lg flex flex-col justify-between'>
          <div>
            <h3 className='font-bold text-lg mb-2'>Inventory Goal</h3>
            <p className='text-slate-400 text-sm'>
              You have 8 items running low on stock. Restock soon to maintain
              sales.
            </p>
          </div>

          <div className='mt-8 space-y-4'>
            <div className='bg-white/10 p-4 rounded-xl flex items-center justify-between'>
              <span className='text-sm font-medium'>Jerseys</span>
              <span className='text-orange-500 font-bold'>85%</span>
            </div>
            <div className='bg-white/10 p-4 rounded-xl flex items-center justify-between'>
              <span className='text-sm font-medium'>Footwear</span>
              <span className='text-blue-400 font-bold'>42%</span>
            </div>
          </div>

          <button className='w-full mt-8 bg-orange-500 hover:bg-orange-600 py-3 rounded-xl font-bold transition-all'>
            Generate Report
          </button>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className='bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden'>
        <div className='p-6 border-b border-slate-100 flex justify-between items-center'>
          <h3 className='font-bold text-slate-800'>Recent Transactions</h3>
          <button className='text-blue-600 text-sm font-bold hover:underline'>
            View All
          </button>
        </div>
        <RecentOrders />
      </div>
    </div>
  )
}