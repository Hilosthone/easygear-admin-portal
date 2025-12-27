import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import User from '@/models/User'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export async function POST(req: Request) {
  try {
    await connectDB()
    const { email, password } = await req.json()
    console.log('Attempting login for:', email) 

    const user = await User.findOne({ email })
    if (!user) {
      console.log('❌ User not found in database')
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    console.log('Password match result:', isMatch)

    if (!isMatch) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET!,
      { expiresIn: '1d' }
    )

    return NextResponse.json({
      token,
      user: { name: user.name, email: user.email, role: user.role },
    })
  } catch (err) {
    console.error('Login API Error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
