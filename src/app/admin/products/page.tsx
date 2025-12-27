'use client'

import React, { useState } from 'react'
import { Plus, Search, Filter, Download, PackageOpen } from 'lucide-react'
import ProductRow from '@/components/admin/ProductRow'
import ProductModal from '@/components/admin/ProductModal'
import { Product } from '@/types'

// Expanded Mock Data
const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Nike Air Max 270',
    category: 'Footwear',
    price: 120000,
    stock: 15,
    status: 'In Stock',
  },
  {
    id: '2',
    name: 'Super Eagles Home Jersey',
    category: 'Jersey',
    price: 45000,
    stock: 3,
    status: 'Low Stock',
  },
  {
    id: '3',
    name: 'Dumbbell Set 10kg',
    category: 'Fitness',
    price: 85000,
    stock: 0,
    status: 'Out of Stock',
  },
  {
    id: '4',
    name: 'Adidas Predator Elite',
    category: 'Footwear',
    price: 155000,
    stock: 10,
    status: 'In Stock',
  },
  {
    id: '5',
    name: 'Yoga Mat Premium',
    category: 'Fitness',
    price: 25000,
    stock: 20,
    status: 'In Stock',
  },
  {
    id: '6',
    name: 'Wilson NBA Basketball',
    category: 'Equipment',
    price: 35000,
    stock: 2,
    status: 'Low Stock',
  },
  {
    id: '7',
    name: 'Training Cones (Set of 20)',
    category: 'Equipment',
    price: 12000,
    stock: 50,
    status: 'In Stock',
  },
  {
    id: '8',
    name: 'Speed Rope Pro',
    category: 'Fitness',
    price: 8500,
    stock: 0,
    status: 'Out of Stock',
  },
]

export default function ProductsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  // Combined Search and Status Filtering Logic
  const filteredProducts = MOCK_PRODUCTS.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus =
      statusFilter === 'all' ||
      product.status.toLowerCase().replace(/\s+/g, '-') === statusFilter

    return matchesSearch && matchesStatus
  })

  const handleDelete = (id: string) => {
    console.log('Deleting product with ID:', id)
  }

  const handleEdit = (product: Product) => {
    console.log('Editing product:', product.name)
  }

  return (
    <div className='space-y-6'>
      {/* 1. Header Section */}
      <div className='flex flex-col md:flex-row md:items-center justify-between gap-4'>
        <div>
          <h1 className='text-2xl font-bold text-slate-800 tracking-tight'>
            Inventory Management
          </h1>
          <p className='text-slate-500 text-sm'>
            Manage {MOCK_PRODUCTS.length} total items in your catalog.
          </p>
        </div>

        <div className='flex items-center gap-3'>
          <button className='flex items-center gap-2 px-4 py-2.5 border border-slate-200 rounded-lg text-slate-600 font-semibold hover:bg-slate-50 transition-all text-sm'>
            <Download size={18} /> Export
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className='flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg font-bold transition-all shadow-lg shadow-orange-200 active:scale-95 text-sm'
          >
            <Plus size={20} /> Add New Gear
          </button>
        </div>
      </div>

      {/* 2. Filters & Search */}
      <div className='bg-white p-4 rounded-xl border border-slate-200 flex flex-col md:flex-row gap-4 items-center justify-between shadow-sm'>
        <div className='relative w-full md:w-96'>
          <Search
            className='absolute left-3 top-1/2 -translate-y-1/2 text-slate-400'
            size={18}
          />
          <input
            type='text'
            placeholder='Search gear name or category...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm text-slate-700'
          />
        </div>

        <div className='flex items-center gap-2 w-full md:w-auto'>
          <div className='flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100'>
            <Filter size={14} className='text-slate-400' />
            <span className='text-xs font-bold text-slate-500 uppercase tracking-wider'>
              Status:
            </span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className='bg-transparent text-sm font-bold text-slate-700 focus:outline-none cursor-pointer'
            >
              <option value='all'>All Items</option>
              <option value='in-stock'>In Stock</option>
              <option value='low-stock'>Low Stock</option>
              <option value='out-of-stock'>Out of Stock</option>
            </select>
          </div>
        </div>
      </div>

      {/* 3. Products Table Wrapper */}
      <div className='bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden'>
        <div className='overflow-x-auto'>
          <table className='w-full text-left border-collapse min-w-[750px]'>
            <thead className='bg-slate-50 border-b border-slate-200 text-slate-500 text-[11px] uppercase tracking-widest font-bold'>
              <tr>
                <th className='px-6 py-4 w-16'>Item</th>
                <th className='px-6 py-4'>Product Details</th>
                <th className='px-6 py-4'>Price</th>
                <th className='px-6 py-4'>Inventory</th>
                <th className='px-6 py-4'>Status</th>
                <th className='px-6 py-4 text-right'>Actions</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-slate-100'>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductRow
                    key={product.id}
                    product={product}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan={6} className='py-20 text-center'>
                    <div className='flex flex-col items-center justify-center text-slate-400'>
                      <PackageOpen size={48} strokeWidth={1} className='mb-2' />
                      <p className='text-lg font-medium'>No products found</p>
                      <p className='text-sm'>
                        Try adjusting your search or filters
                      </p>
                      <button
                        onClick={() => {
                          setSearchQuery('')
                          setStatusFilter('all')
                        }}
                        className='mt-4 text-blue-600 font-bold text-sm hover:underline'
                      >
                        Clear all filters
                      </button>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer Stats */}
        <div className='px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center'>
          <p className='text-xs text-slate-500 font-medium'>
            Showing{' '}
            <span className='text-slate-800 font-bold'>
              {filteredProducts.length}
            </span>{' '}
            results
          </p>
        </div>
      </div>

      {/* 4. The Add Product Modal */}
      {isModalOpen && <ProductModal onClose={() => setIsModalOpen(false)} />}
    </div>
  )
}
