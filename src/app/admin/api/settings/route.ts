import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import mongoose from 'mongoose'

// Simple schema to store settings
const SettingsSchema = new mongoose.Schema(
  {
    key: { type: String, default: 'site_config' },
    heroHeadline: String,
    heroSub: String,
    adminName: String,
    email: String,
    notifications: Boolean,
    twoFactor: Boolean,
  },
  { timestamps: true }
)

const Settings =
  mongoose.models.Settings || mongoose.model('Settings', SettingsSchema)

export async function POST(req: Request) {
  try {
    await connectDB()
    const data = await req.json()

    // Upsert: Update if exists, create if not
    await Settings.findOneAndUpdate({ key: 'site_config' }, data, {
      upsert: true,
    })

    return NextResponse.json({ message: 'Saved successfully' })
  } catch (error) {
    return NextResponse.json({ error: 'Server Error' }, { status: 500 })
  }
}
