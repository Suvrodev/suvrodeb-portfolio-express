import { Schema, model, connect, Types } from "mongoose";
import { TMessage } from "./message.interface";

const messageSchema = new Schema<TMessage>(
  {
    name: { type: String, required: [true, "Name is required"] },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: [/.+@.+\..+/, "Invalid email format"],
    },
    message: { type: String, required: [true, "Message is required"] },
    isRead: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const MessageModel = model<TMessage>("message", messageSchema);
