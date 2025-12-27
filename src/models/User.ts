import mongoose, { Schema, model, models } from 'mongoose'

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'User' },
  },
  { timestamps: true }
)

// This "models.User ||" part is CRUCIAL for Next.js to prevent re-compilation errors
const User = models.User || model('User', UserSchema)

export default User
