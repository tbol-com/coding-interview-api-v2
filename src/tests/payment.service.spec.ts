import { createPayment } from "../payment/payment.service";
import { connectDb, closeDb } from "../__ignore/db/db.handler";

beforeAll(async () => await connectDb());
afterAll(async () => await closeDb());

describe("Create payment", () => {
  test("should return created payment", () => {

    // ...createPayment(...

  });
});
