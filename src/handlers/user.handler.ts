import { NextFunction, Request, Response } from "express-serve-static-core";

/**
 * url: /api/user
 */
export function rootPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.status(200).json({
    message: "OK",
  });
}
