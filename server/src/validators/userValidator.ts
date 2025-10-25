import { body } from "express-validator";


export const registerUserValidator = [
    body('name').notEmpty().withMessage('Name is required').isLength({ min: 3 }).withMessage('Name must be at least 3 characters long'),
    body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Valid email is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('type').notEmpty().withMessage('User type is required').isIn(['school', 'gym', 'sports_academy']).withMessage('Invalid user type'),
]

export const loginUserValidator = [
    body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Valid email is required'),
    body('password').notEmpty().withMessage('Password is required').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
]

