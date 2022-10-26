import { setupServer } from "msw/node";
import { rest } from "msw";
import { Payment } from "../../payment/payment.types";

export const mockServer = setupServer(
  rest.post("https://internal.tbol/api/v2/payments", async (req, res, ctx) => {
    const payment = await req.json<Omit<Payment, "id" | "internalId">>();

    console.log("Request received on mock API", payment);

    if (!payment.recipient) {
      return res(ctx.status(400), ctx.json({ success: false }));
    }

    return res(ctx.status(200), ctx.json({ id: "999999999" }));
  })
);

mockServer.listen({ onUnhandledRequest: "warn" });

console.log("Mock running");
