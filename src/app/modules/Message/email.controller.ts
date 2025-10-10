import { NextFunction, Request, RequestHandler, Response } from "express";
import { messageService } from "./messageservice";
import catchAsync from "../../utils/catchAsync";

//Create Message
const createMessage: RequestHandler = catchAsync(async (req, res, next) => {
  const message = req.body;

  console.log("Come Message: ", message);

  const result = await messageService.createEMessageIntoDB(message);

  //Send Response
  res.status(200).json({
    message: "Email Sent successfully",
    success: true,
    data: result,
  });
});

// Get All Message
const getAllMessage: RequestHandler = catchAsync(async (req, res, next) => {
  const result = await messageService.getAllMessageFromDB();

  // Send response with the results
  res.status(200).json({
    message: "Email retrieved successfully",
    status: true,
    data: result,
  });
});

//Delete Message
const deleteMessage: RequestHandler = catchAsync(async (req, res, next) => {
  const messageId = req.params.id;
  console.log("Message id: ", messageId);
  const result = await messageService.deleteMessageFromDB(messageId);

  //Send Response
  res.status(200).json({
    message: "Email deleted successfully",
    status: true,
    data: result,
  });
});
//Delete Email
const updateMessage: RequestHandler = catchAsync(async (req, res, next) => {
  const messageId = req.params.id;
  const messageBody = req?.body;
  console.log("Message id: ", messageId);
  const result = await messageService.updateMessageFromDB(
    messageId,
    messageBody
  );

  //Send Response
  res.status(200).json({
    message: "Email Updated successfully",
    status: true,
    data: result,
  });
});

export const MessageControllers = {
  createMessage,
  getAllMessage,
  deleteMessage,
  updateMessage,
};
