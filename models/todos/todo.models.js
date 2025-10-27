import mongoose from 'mongoose';
const todo = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdby: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    subtodos: [
      {
        type:mongoose.Schema.Types.ObjectId,
        ref : "subtodo"
      }
    ],
  },
  { timestamps: true }
);

export const todo = mongoose.model('todo', todo);
