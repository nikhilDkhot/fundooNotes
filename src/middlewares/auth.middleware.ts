/* eslint-disable @typescript-eslint/no-explicit-any */
import HttpStatus from 'http-status-codes';
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import config from '../config/config';
import utils from '../utils/user.util';

const secert = config.development.secret


const Utils = new utils();
/**
 * Middleware to authenticate if user has a valid Authorization token
 * Authorization: Bearer <token>
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export const userAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    let bearerToken = req.header('Authorization');
    if (!bearerToken)
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Authorization token is required'
      };
    bearerToken = bearerToken.split(' ')[1];

    const { id }: any = await jwt.verify(bearerToken,secert);
    req.body.id = id;
    next();
  }  
  /*try {
    let bearerToken = req.header('Authorization');
    if (!bearerToken)
     throw {
      code: HttpStatus.BAD_REQUEST,
      message: 'Authorization token is required'
     };
    bearerToken = bearerToken.split(' ')[1];
  
    const { id }: any = await Utils.tokenVerify(
     bearerToken,
     config.development.secreat
    );
    req.body.id = id;
    next();
   }*/catch (error) {
    next(error);
  }
};

export const noteAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
     let bearerToken = req.header('Authorization');
    if (!bearerToken)
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Authorization token is required'
      };
    bearerToken = bearerToken.split(' ')[1];

    const { id }: any = await jwt.verify(bearerToken,secert);
    (req as any ).id = id;
    next(); 
   /* try {
      let bearerToken = req.header('Authorization');
      if (!bearerToken)
       throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Authorization token is required'
       };
      bearerToken = bearerToken.split(' ')[1];
    
      const { id }: any = await Utils.tokenVerify(
       bearerToken,
       config.development.secreat
      );
      req.body.id = id;
      next();*/
     
  } catch (error) {
    next(error);
  }
};

export const forgotUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    let bearerToken = req.header('Authorization');
    if (!bearerToken)
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Authorization token is required'
      };
    bearerToken = bearerToken.split(' ')[1];

    const { id } : any = await Utils.tokenVerify(bearerToken, config.development.forget_secreat);
    req.body.id = id;
    next();
    
  } catch (error) {
    next(error);
  }
};
