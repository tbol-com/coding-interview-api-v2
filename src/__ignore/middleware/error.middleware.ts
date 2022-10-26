import { NextFunction, Request, Response } from "express";
import HttpException from "../../exceptions/HttpException";

function errorMiddleware(
  err: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log("in error middleware");
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  res.status(status).send({
    message,
    status,
  });
}

export default errorMiddleware;
