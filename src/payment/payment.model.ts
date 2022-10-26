import { Schema, model } from "mongoose";
import { Payment } from "./payment.types";

const PaymentSchema = new Schema(
  {
    recipient: String,
    amount: Number,
  },
  { versionKey: false }
);

export const PaymentModel = model<Payment>("payments", PaymentSchema);
