import { Request, Response, Router } from "express";
import { Controller } from "../__ignore/interfaces";
import { createPayment, getPayments } from "./payment.service";
import asyncHandler from "express-async-handler";

class PaymentController implements Controller {
  public path = "/payments";
  public router = Router();

  constructor() {
    this.router
      .get(this.path, asyncHandler(this.getAllPayments))
      .post(this.path, asyncHandler(this.createPayment));
  }

  private createPayment = async (
    request: Request<{}, {}, {}>,
    response: Response
  ) => {
    // TODO implementation to call the service
  };

  private getAllPayments = async (
    request: Request<{}, {}, {}>,
    response: Response
  ) => {
    // TODO implementation to call the service
  };
}

export default PaymentController;
