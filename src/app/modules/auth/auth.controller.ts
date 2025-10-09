import { RequestHandler } from "express";
import { AuthServices } from "./auth.service";
import catchAsync from "../../utils/catchAsync";
import config from "../../config";

//Login User
const loginUser: RequestHandler = catchAsync(async (req, res, next) => {
  const result = await AuthServices.loginUser(req.body);

  const { refreshToken } = result;

  res.cookie("sDevRef", refreshToken, {
    // secure: config.node_env === "production",
    httpOnly: true, ///js diye access kora jabe na
    // secure: config.node_env === "production" ? true : false, //secure: true দিলে cookie শুধুমাত্র HTTPS connection এ পাঠানো হবে। HTTP connection এ পাঠানো হবে না। lokalhost not allowed
    // sameSite: config.node_env === "production" ? "none" : "lax", //none dile sob port e set hobe kintu secure true hote hobe, lax dile cors er, and strict dile same domain e
    secure: true,
    sameSite: "none",
    path: "/",
    // domain: config.node_env === "production" ? ".vercel.app" : "localhost",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.status(200).json({
    success: true,
    message: "Login successful",
    statusCode: 200,
    data: {
      accessToken: result?.accessToken,
      refreshToken: result?.refreshToken,
    },
  });
});

//Get Access Token by redresh token
const refreshToken: RequestHandler = catchAsync(async (req, res, next) => {
  console.log("in cookies: ", req.cookies);

  const result = await AuthServices.refreshToken(req.cookies?.sDevRef);

  res.status(200).json({
    success: true,
    message: "Generate Access token successfully",
    statusCode: 200,
    data: result,
  });
});

export const AuthControllers = {
  loginUser,
  refreshToken,
};
