import { NextFunction, Request, Response } from 'express';

export const wrapper = (fn: (req: Request, res: Response) => void) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await fn(req, res);
    } catch (e) {
      next(e);
    }
  };
};
