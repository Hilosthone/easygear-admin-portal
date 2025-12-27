interface Props {
  title: string
  value: string
  trend: string
  isAlert?: boolean
}

export default function StatCard({ title, value, trend, isAlert }: Props) {
  return (
    <div className='bg-white p-6 rounded-xl border border-slate-200 shadow-sm'>
      <p className='text-sm text-slate-500 font-medium'>{title}</p>
      <div className='flex items-end justify-between mt-2'>
        <h3 className='text-2xl font-bold text-slate-800'>{value}</h3>
        <span
          className={`text-xs font-bold ${
            isAlert ? 'text-red-500' : 'text-green-500'
          }`}
        >
          {trend}
        </span>
      </div>
    </div>
  )
}
