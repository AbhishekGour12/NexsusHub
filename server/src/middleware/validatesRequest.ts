import { Request, Response, NextFunction } from "express";
import { validationResult, ValidationError } from "express-validator";

export const validateRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Ab cast karne ki zaroorat nahi
    const extractedErrors = errors.array();

    return res.status(400).json({
      success: false,
      errors: extractedErrors.map((err:any) => {
        // Yeh check (type guard) zaroori hai
        // Hum check kar rahe hain ki kya yeh FieldValidationError hai

        // 'path' naya aur recommended tareeka hai
        if (err.type === 'field') {
          return {
            field: err.path, // 'param' ke bajaye 'path' use karein
            message: err.msg,
          };
        }
        
        // Agar 'field' type ka error nahi hai, toh ek general error bhejein
        return {
          field: 'unknown',
          message: err.msg,
        };

      }),
    });
  }
  next();
};