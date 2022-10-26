/* mySeedScript.js */

import { PaymentModel } from "../../payment/payment.model";
import { Payment } from "../../payment/payment.types";
import { faker } from "@faker-js/faker";
import mongoose from "mongoose";

export const seedDb = async () => {
  try {
    await PaymentModel.deleteMany();

    const payments: Array<Payment & { internalId: string }> = [];

    for (let i = 0; i < 40; i++) {
      const recipient = `${faker.name.firstName()} ${faker.name.lastName()}`;

      payments.push({
        id: new mongoose.Types.ObjectId().toString(),
        recipient,
        amount: faker.datatype.number({
          min: 1,
          max: 10000,
        }),
        internalId: String(i),
      });
    }
    await PaymentModel.insertMany(payments);

    console.log("Database seeded!");
  } catch (err) {
    console.log(err);
  }
};
