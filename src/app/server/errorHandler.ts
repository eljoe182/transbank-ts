import { Request, Response, NextFunction } from 'express';

export const ErrorHandler = (error: Error | any, req: Request, res: Response, _next: NextFunction): Response => {
  console.log(req.originalUrl);
  console.error(error.stack);
  return res.status(500).json({ message: error.message });
};
