'use client'
import React from 'react'
import { X, Upload, Save } from 'lucide-react'

interface ProductModalProps {
  onClose: () => void
}

export default function ProductModal({ onClose }: ProductModalProps) {
  return (
    <div className='fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4'>
      <div className='bg-white rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200'>
        {/* Header */}
        <div className='flex items-center justify-between p-6 border-b border-slate-100'>
          <div>
            <h2 className='text-xl font-bold text-slate-800'>Add New Gear</h2>
            <p className='text-sm text-slate-500'>
              List a new product in the easyGear catalog.
            </p>
          </div>
          <button
            onClick={onClose}
            className='p-2 hover:bg-slate-100 rounded-full transition-colors'
          >
            <X size={20} className='text-slate-500' />
          </button>
        </div>

        {/* Form */}
        <form className='p-6 space-y-5'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className='space-y-1.5'>
              <label className='text-sm font-semibold text-slate-700'>
                Product Name
              </label>
              <input
                type='text'
                placeholder='e.g. Nike Air Max'
                className='w-full p-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none transition-all'
              />
            </div>

            <div className='space-y-1.5'>
              <label className='text-sm font-semibold text-slate-700'>
                Category
              </label>
              <select className='w-full p-2.5 border border-slate-200 rounded-lg outline-none bg-white'>
                <option>Footwear</option>
                <option>Jersey</option>
                <option>Fitness</option>
                <option>Accessories</option>
              </select>
            </div>

            <div className='space-y-1.5'>
              <label className='text-sm font-semibold text-slate-700'>
                Price (₦)
              </label>
              <input
                type='number'
                placeholder='0.00'
                className='w-full p-2.5 border border-slate-200 rounded-lg outline-none'
              />
            </div>

            <div className='space-y-1.5'>
              <label className='text-sm font-semibold text-slate-700'>
                Stock Quantity
              </label>
              <input
                type='number'
                placeholder='0'
                className='w-full p-2.5 border border-slate-200 rounded-lg outline-none'
              />
            </div>
          </div>

          <div className='space-y-1.5'>
            <label className='text-sm font-semibold text-slate-700'>
              Product Image
            </label>
            <div className='border-2 border-dashed border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center text-slate-400 hover:border-blue-400 hover:bg-blue-50/50 transition-all cursor-pointer'>
              <Upload size={28} className='mb-2 text-slate-300' />
              <p className='text-sm font-medium text-slate-500'>
                Click to upload product photo
              </p>
              <p className='text-xs'>Supports: JPG, PNG (Max 5MB)</p>
            </div>
          </div>

          {/* Actions */}
          <div className='flex justify-end gap-3 pt-4'>
            <button
              type='button'
              onClick={onClose}
              className='px-6 py-2.5 text-sm font-bold text-slate-600 hover:bg-slate-100 rounded-lg transition-all'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='px-6 py-2.5 text-sm font-bold bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2 shadow-lg shadow-blue-200'
            >
              <Save size={18} /> Save Product
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
