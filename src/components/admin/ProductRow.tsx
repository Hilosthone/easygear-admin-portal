'use client'
import React from 'react'
import { Edit, Trash2 } from 'lucide-react'
import { Product } from '@/types'

interface ProductRowProps {
  product: Product
  onEdit: (product: Product) => void
  onDelete: (id: string) => void
}

export default function ProductRow({
  product,
  onEdit,
  onDelete,
}: ProductRowProps) {
  return (
    <tr className='hover:bg-slate-50/50 transition-colors border-b border-slate-100 last:border-0'>
      {/* Product Image & Name */}
      <td className='px-6 py-4'>
        <div className='flex items-center gap-3'>
          <div className='w-12 h-12 bg-slate-100 rounded-lg overflow-hidden border border-slate-200 flex items-center justify-center shrink-0'>
            {/* Replace with <img src={product.image} className="object-cover w-full h-full" /> */}
            <span className='text-[10px] font-bold text-slate-400 uppercase'>
              Gear
            </span>
          </div>
          <div className='min-w-[150px]'>
            <p className='font-bold text-slate-800 truncate'>{product.name}</p>
            <p className='text-xs text-slate-500'>{product.category}</p>
          </div>
        </div>
      </td>

      {/* Price - prevented from wrapping */}
      <td className='px-6 py-4 font-bold text-slate-700 whitespace-nowrap'>
        ₦{product.price.toLocaleString()}
      </td>

      {/* Stock - prevented from wrapping */}
      <td className='px-6 py-4 text-slate-600 font-medium whitespace-nowrap'>
        {product.stock} in stock
      </td>

      {/* Status Badge */}
      <td className='px-6 py-4'>
        <span
          className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider whitespace-nowrap ${
            product.status === 'In Stock'
              ? 'bg-green-100 text-green-700'
              : product.status === 'Low Stock'
              ? 'bg-orange-100 text-orange-700'
              : 'bg-red-100 text-red-700'
          }`}
        >
          {product.status}
        </span>
      </td>

      {/* Actions */}
      <td className='px-6 py-4 text-right'>
        <div className='flex justify-end gap-2'>
          <button
            onClick={() => onEdit(product)}
            className='p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all'
            aria-label='Edit product'
          >
            <Edit size={18} />
          </button>
          <button
            onClick={() => onDelete(product.id)}
            className='p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all'
            aria-label='Delete product'
          >
            <Trash2 size={18} />
          </button>
        </div>
      </td>
    </tr>
  )
}
