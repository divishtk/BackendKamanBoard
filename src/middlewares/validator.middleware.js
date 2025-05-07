import { validationResult } from 'express-validator';
import { ApiError } from '../utils/api-errors.js';

export const validate = (req, resp, next) => {
  
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  const extractedErrors = [];
  errors.array().map((err) =>
    extractedErrors.push({
      [err.path]: err.msg,
    }),
  );

  console.log(extractedErrors)

  throw new ApiError(401, 'Received Data is not valid', extractedErrors);
};
