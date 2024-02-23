import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
dotenv.config();

export const login = (req: Request, res: Response) => {
  const accessToken = jwt.sign({
    email: res.locals.email
  },
  process.env.ACCESS_SECRET as string,
  {
    expiresIn: "10m"
  }
  );

  const refreshToken = jwt.sign(
    {
        email: res.locals.email,
    },
    process.env.REFRESH_SECRET as string,
    {
        expiresIn: "1d"
    },

  )
  //pro HTTPS secure a httpOnly na true
  res.cookie("jwt", refreshToken, {
    sameSite: "none",
    secure: false,
    httpOnly: false,
    maxAge: 1000 * 60 * 60 * 24
  });
  return res.json({accessToken});
}