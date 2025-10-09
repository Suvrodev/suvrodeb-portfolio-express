import { Schema, model, connect, Types } from "mongoose";

export type TMessage = {
  name: string;
  email: string;
  message: string;
  isRead: boolean;
};
