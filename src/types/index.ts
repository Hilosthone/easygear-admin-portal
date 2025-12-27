export interface Product {
  id: string
  name: string
  category: string
  price: number
  stock: number
  status: 'In Stock' | 'Low Stock' | 'Out of Stock'
}

export interface Order {
  id: string
  customer: string
  date: string
  amount: number
  status: 'Delivered' | 'Pending' | 'Shipped'
}