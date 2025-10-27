import mongoose from 'mongoose';

const user = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'username is necessary'],
      unique: true,
      lowercase: true,
    },
    email: String,
    isActive: Boolean,
  },
  { timestamps: true }
);

export const User = mongoose.model('User', user);
